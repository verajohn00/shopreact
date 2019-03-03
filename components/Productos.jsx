/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React from 'react';
import * as request from 'superagent';
import { Link } from 'react-router-dom';
import Vistaproducto from './Vistaproducto.jsx';
import Carrito from './Carrito.jsx';

var crritoG = [];
var totalG = 0.0;
//var url= "http://localhost/Api/";
var url= "http://xatsaautopartes.xyz/Api/";


function updateState(cart,tota){
    console.log(tota);
    //this.setState({carrito:cart});
    //this.setState({total:tota});
    crritoG = cart;
    totalG = tota;
}

class Productos extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            tempValue: 0,
            input: '',
            text: "",
            totalP: 0.0,
            carritoP: []
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.addCarrito = this.addCarrito.bind(this);
        crritoG = [];
        totalG = 0.0;
    }
        
    componentDidMount(){
        request.get(url+"Api/productos")
            .end((er,res) => {
            this.setState({ data : res.body });
        })
    }

    handleChange(e) {          
        this.setState({ tempValue: e.target.value });
    }
    
    addCarrito(i){
        
        var existencia = this.state.data[i].cantidad;
        if(parseInt(existencia) < this.state.tempValue){
            alert("No hay disponibilidad");
        }else{
            alert("Elemento agregado");
            var precio = this.state.data[i].precio;
            var subtotal = precio * this.state.tempValue;
            var totalTemp = subtotal + this.state.totalP;
            this.setState({ totalP: totalTemp });
            var elemento = {"subtotal":subtotal, "q":this.state.tempValue, "producto":this.state.data[i]};
            this.state.carritoP.push(elemento);
            updateState(this.state.carritoP,totalTemp);
        }
    }
    
    onChangeHandler(e){
        this.setState({
            input: e.target.value,
        })
    }
    
    render () {
        
        return (
            <div className="container-fluid">
                <Navmenu />
                <br/>
                <div className="padding backwhite">
                <div className="row padding">
                    <div className="col-6">
                        <h3>Catálogo de productos</h3>
                    </div>
                    <div className="col-6 float-right">
                        <h5>¿Qué estas buscando?</h5>
                        <input type="text" value={this.state.input} onChange={this.onChangeHandler.bind(this)} placeholder="Buscar producto"/>
                    </div>
                </div>
                <div className="row scroll">
                    <div className="row fullwidth">
                        {
                            this.state.data.filter(product => this.state.input === '' || product.nombre.includes(this.state.input)).map((product, index) => (
                            <div className="col-12 col-sm-12 col-md-4" key={index}>
                             <div className="card">
                                <img className="card-img-top" src={ url+"images/"+product.imagen} alt={product.imagen}/>
                                <div className="card-body">
                                  <h5 className="card-title">{product.nombre}</h5>
                                  <p className="card-text">
                                      Precio: ${product.precio}
                                      <br/>
                                      Unidades disponibles: {product.cantidad}
                                  </p>
                                  
                                    <Link className="btn btn-primary" to={{
                                            pathname:"/vistaproducto",
                                            state:{
                                                producto: product
                                            }
                                        }}>
                                        Ver más
                                    </Link>
                                  <div className="float-right">
                                    <button className="btn btn-warning" onClick={() => this.addCarrito(index)}>Añadir</button>                    
                                    <input type="number" size="10" onChange={ this.handleChange }/>
                                  </div>
                                </div>
                            </div>
                            </div>
                            ))
                        }
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

class Navmenu extends React.Component{

    constructor(props) {
        super(props);
        updateState = updateState.bind(this);        
    }

    render(){
        return(
            <nav className="navbar navbar-light bg-light justify-content-between">
            <a className="navbar-brand">La bodega</a>
            <ul className="mr-sm-2 inline">
                <li><Link to="/productos"><span className="glyphicon glyphicon-search">Productos</span></Link></li>
                <li><Link to={{
                            pathname: "/carrito",
                            state:{
                                carrito: crritoG,//this.state.carrito,
                                total: totalG//this.state.total
                            }
                        }}><span className="glyphicon glyphicon-search">Carrito <span className="redColor">({crritoG.length})</span></span></Link></li>
                <li><Link to="/"><span className="glyphicon glyphicon-search">Cerrar sesión</span></Link></li>
            </ul>
            </nav>
        );
    }
}

export default Productos;

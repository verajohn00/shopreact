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

function updateState(cart,tota){
    console.log(tota);
    this.setState({carrito:cart});
    this.setState({total:tota});
}

class Productos extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            tempValue: 0,
            input: '',
            text: "",
            total: 0.0,
            carrito: [],
            url: "http://localhost/Api/"
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.addCarrito = this.addCarrito.bind(this);
    }
        
    componentDidMount(){
        request.get(this.state.url+"Api/productos")
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
            var totalTemp = subtotal + this.state.total;
            this.setState({ total: totalTemp });
            var elemento = {"subtotal":subtotal, "q":this.state.tempValue, "producto":this.state.data[i]};
            this.state.carrito.push(elemento);
            updateState(this.state.carrito,totalTemp);
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
                <Navmenu contador={this.state.carrito.length}/>
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
                                <img className="card-img-top" src={ this.state.url+"images/"+product.imagen} alt={product.imagen}/>
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
        this.state = {
            carrito : [],
            total: 0,
            url: "http://localhost/Api/"
        };

        updateState = updateState.bind(this);
        
    }

    render(){
        return(
            <nav className="navbar navbar-light bg-light justify-content-between">
            <a className="navbar-brand">La bodega</a>
            <ul className="mr-sm-2 inline">
                <li><Link to="/productos"><span className="glyphicon glyphicon-search">Productos</span></Link></li>
                <li><Link to={{
                            pathname:"/carrito",
                            state:{
                                carrito: this.state.carrito,
                                total: this.state.total
                            }
                        }}><span className="glyphicon glyphicon-search">Carrito <span className="redColor">({this.state.carrito.length})</span></span></Link></li>
                <li><Link to="/"><span className="glyphicon glyphicon-search">Cerrar sesión</span></Link></li>
            </ul>
            </nav>
        );
    }
}

export default Productos;

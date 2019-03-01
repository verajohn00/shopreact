/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React from 'react';
import * as request from 'superagent';
import { Link } from 'react-router-dom';
import Vistaproducto from './Vistaproducto.jsx';

class Productos extends React.Component{
    
    constructor() {
        super();
        this.state = {
            data: [],
            tempValue: "",
            input: '',
            url: "http://xatsaautopartes.xyz/Api/"
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.addCarrito = this.addCarrito.bind(this);
    }
        
    componentDidMount(){
        request.get(this.state.url+"Api/productos")
            .end((er,res) => {
            this.setState({ data : res.body });
            //console.log(this.state.data);               
        })
    }

    handleChange(e) {
          
        this.setState({ tempValue: e.target.value });
        //console.log(this.props.index);
    }
    
    addCarrito(i){
        console.log(i);
        console.log(this.state.tempValue);
    }
    
    onChangeHandler(e){
        this.setState({
            input: e.target.value,
        })
    }
    
    render () {
        
        //console.log('PLACES' + this.state.data);

        return (
            <div className="container-fluid">
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
                                  <button className="btn btn-primary">
                                    <Link to={{
                                            pathname:"/vistaproducto",
                                            state:{
                                                producto: product
                                            }
                                        }}>
                                        Ver más
                                    </Link></button>
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

export default Productos;

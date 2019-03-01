/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React from 'react';
import * as request from 'superagent';
import { Link } from 'react-router-dom';

class Vistaproducto extends React.Component{
    
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            url: "http://localhost/Api/"
        };
    }
        
    componentDidMount(){
        
        const { handle } = this.props.match.params;
        const { producto } = this.props.location.state;
        this.state.producto = this.props.location.state;
        //console.log(this.state.producto);
    }
    
    render () {
        const { producto } = this.props.location.state;
        console.log(producto);
        
        return (
            <div className="container-fluid">        
            <div className="backwhite">
                <div className="row">
                    <div className="col-12">
                        <h3>{producto.nombre}</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-sm-6">
                        <img className="card-img-top" src={this.state.url+"/images/"+producto.imagen} alt="" />
                    </div>
                    <div className="col-12 col-sm-6">
                        <h3>
                            Precio: ${producto.precio}
                        </h3>
                        <br/>
                        <h4>
                            Unidades disponibles: {producto.cantidad}
                        </h4>            
                    </div>
                </div>
                <div className="row padding">            
                        <button className="btn btn-warning"><Link to="/productos">Regresar</Link></button>
                </div>
            </div>
        </div>
        );
    }
}

export default Vistaproducto;

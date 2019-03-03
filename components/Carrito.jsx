/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React from 'react';
import * as request from 'superagent';
import { Link } from 'react-router-dom';
import Vistaproducto from './Vistaproducto.jsx';
import Navmenu from './Navmenu.jsx';

class Carrito extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
            carrito: [],
            tempValue: "",
            total: 0.0,
            url: "http://xatsaautopartes.xyz/Api/"
            //url: "http://localhost/Api/"
        };

        this.pagarCarrito = this.pagarCarrito.bind(this);

    }


    componentDidMount(){
        console.log(this.props.location.state);
        this.setState({carrito: this.props.location.state.carrito})
        this.setState({total: this.props.location.state.total})
    }

    pagarCarrito(){
    
        var json = JSON.stringify(this.state.carrito);
    
        request.post(this.state.url+"Api/finishCartReact")
            .send({params:json})
            .end((er,res) => {
                console.log(res);
                if(res){
                    this.props.history.push('/productos');
                }else{
                    //this.showError = true;
                }    
            })
    }
       
    render () {        
        return (
            <div className="container-fluid">
            <Navmenu />
            <br/>
            <div className="padding backwhite">
            <div className="row">
                <div className="col-12">
                    <h3>Carrito de compras</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-sm-6">
                {
                this.state.carrito.map((product, index) => (
                    <div className="col-12" key={index}>
                         <div className="row">
                             <div className="col-3">
                                <img className="image-responsive carrito" src={this.state.url+"/images/"+product.producto["imagen"]} alt={product.producto["imagen"]} />                         
                             </div>
                             <div className="col-9">
                                 <h5>{product.producto["nombre"]}</h5>
                                 <p>Unidades: {product.q}</p>
                             </div>
                        </div>
                         <div className="row">
                             <div className="col-12">
                                <p>
                                    Subtotal:$ {product.subtotal}
                                </p>
                             </div>
                        </div>
                         
                    </div>
                
                ))
                }
                </div>
                <div className="col-12 col-sm-6">
                    <h2>Total a pagar: <strong>${this.state.total}</strong></h2>
                    <Link className="btn btn-danger" to="/productos">Cancelar</Link>
                    <button className="btn btn-info pagar" onClick={this.pagarCarrito}>Pagar</button>
                </div>
            </div>

            </div>
        </div>
        );
    }
}

export default Carrito;

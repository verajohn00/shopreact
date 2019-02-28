/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React from 'react';
import * as request from 'superagent';
import { Link } from 'react-router-dom';

class Vistaproducto extends React.Component{
    
    constructor() {
        super();
        this.state = {
            data: [],
            url: "http://localhost/Api/"
        };
    }
        
    /*componentDidMount(){
        request.get(this.state.url+"Api/productos")
            .end((er,res) => {
            this.setState({ data : res.body });
            console.log(this.state.data);   
        })
    }*/
    
    render () {
        
        return (
            <div className="container-fluid">        
            <div className="backwhite">
                <div className="row">
                    <div className="col-12">
                        <h3>elemento</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-sm-6">
                        <img className="card-img-top" src="" alt="" />
                    </div>
                    <div className="col-12 col-sm-6">
                        <h3>
                            Precio: Precio
                        </h3>
                        <br/>
                        <h4>
                            Unidades disponibles: Cantidad
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

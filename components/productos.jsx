/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React from 'react';

class Productos extends React.Component{
    render () {
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
                        <input type="text" placeholder="Buscar producto"/>
                    </div>
                </div>
                <div className="row scroll">
                    <div className="row fullwidth">
                        <div className="col-12 col-sm-12 col-md-4">
                             <div className="card">
                                <img className="card-img-top" src="/images/" alt=""/>
                                <div className="card-body">
                                  <h5 className="card-title">nombre</h5>
                                  <p className="card-text">
                                      Precio: $precio
                                      <br/>
                                      Unidades disponibles: cantidad
                                  </p>
                                  <button className="btn btn-primary">Ver más</button>
                                  <div className="float-right">
                                    <button className="btn btn-warning">Añadir</button>                    
                                    <input type="number" size="10"/>
                                  </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                    <div className="row padding">            
                        <button className="btn btn-warning">Regresar</button>
                    </div>

                </div>
            </div>
        );
    }
}

export default Productos;

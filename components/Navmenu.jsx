import React from 'react';
import { Link } from 'react-router-dom';

class Navmenu extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            carrito : [],
            contador: 0,
            url: "http://xatsaautopartes.xyz/Api/"
        };
        
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
                            carrito: this.state.contador
                        }
                    }}><span className="glyphicon glyphicon-search">Carrito <span className="redColor">({this.state.contador})</span></span></Link></li>
            <li><Link to="/"><span className="glyphicon glyphicon-search">Cerrar sesión</span></Link></li>
        </ul>
        </nav>
        );
    }
}

export default Navmenu;

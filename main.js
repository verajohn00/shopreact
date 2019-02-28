import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import Login from './components/Login.jsx';
import Productos from './components/Productos.jsx';
import Vistaproducto from './components/Vistaproducto.jsx';
import { Switch, Redirect } from 'react-router';
import { BrowserRouter , Route, BrowserHistory , Router} from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
    <div>
        <Route exact path="/" component={Login} />
        <Route exact path="/productos" component={Productos} />
        <Route exact path="/vistaproducto" component={Vistaproducto} />
    </div>
    </BrowserRouter>,document.getElementById('app'));
    
//ReactDOM.render(<Login />, document.getElementById('app'));

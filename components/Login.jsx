import React from 'react';

class Login extends React.Component{
    render(){
        return(
            <div className="container-fluid">
            <div className="container padding">
                <div className="row top">
                    <div className="col-12 d-flex justify-content-center">
                        <h3>Inicia Sesión</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                        <form>
                        <div className="form-group">
                            <label htmlFor="email">Correo electrónico</label>
                            <input type="email" className="form-control" size="50" id="email" placeholder="" name="email" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Contraseña</label>
                            <input type="password" className="form-control" id="password" placeholder="" name="password" required/>
                        </div>
                            <div className="alert alert-danger" role="alert">
                                Revisa tus datos para continuar.
                            </div>
                            <button type="submit" className="btn btn-success center">Ingresar</button>
                        </form>
                    </div>        
                </div>
            </div>
            </div>
        );
    }
}

export default Login;

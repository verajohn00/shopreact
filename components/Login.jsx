import React from 'react';
import * as request from 'superagent';

class Login extends React.Component{
        
    constructor(props) {
        super(props);
        this.state = {
            mail:"",
            pass:"",
            error: false,
            url: "http://xatsaautopartes.xyz/Api/"
            //url: "http://localhost/Api/"
        };

        this.validar = this.validar.bind(this);
        this.handleChangeMail = this.handleChangeMail.bind(this);
        this.handleChangePass = this.handleChangePass.bind(this);

    }

    validar(e){
        e.preventDefault();
        request.post(this.state.url+"Api/validateReact")
            .send({correo:this.state.mail,pass:this.state.pass})
            .end((er,res) => {
                console.log(res);
                if(res.body){
                    this.props.history.push('/productos');
                }else{
                    this.setState({error: true});
                }    
            })
    }

    handleChangeMail(e) {          
        this.setState({error: false});  
        this.setState({ mail: e.target.value });
    }

    handleChangePass(e) {          
        this.setState({error: false});  
        this.setState({ pass: e.target.value });
    }

    render(){
        return(
            <div className="container-fluid">
            <div className="container padding white">
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
                            <input type="email" className="form-control" size="50" id="email" placeholder="" name="email" required onChange={ this.handleChangeMail } />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Contraseña</label>
                            <input type="password" className="form-control" id="password" placeholder="" name="password" required  onChange={ this.handleChangePass } />
                        </div>
                            { this.state.error ?  
                            <div className="alert alert-danger" role="alert">
                                Revisa tus datos para continuar.
                            </div>
                            : null }

                            <button type="submit" className="btn btn-success center" onClick={ this.validar }>Ingresar</button>
                        </form>
                    </div>        
                </div>
            </div>
            </div>
        );
    }
}

export default Login;

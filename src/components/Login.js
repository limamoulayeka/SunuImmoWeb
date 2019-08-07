import React, { Component } from 'react';
import '../assets/css/login.css';
import { url } from '../api/ApiUrl';
import axios from 'axios';


class Login extends Component {

    constructor (props) {
        super(props)

        this.state = {
            login : '',
            password : 0   
        }
        this.onChangeHandle = this.onChangeHandle.bind(this)
        this.Logon = this.Logon.bind(this)
    }

    onChangeHandle(event) {
        event.preventDefault();
        this.setState({
            [event.target.name] : event.target.value, 
            
        })
    }

    Logon(event) {
        event.preventDefault();
        let log = this.state.login;
        let pas = this.state.password;
        axios.post(`${url}/SunuImmo?action=logon&login=${log}&password=${pas}`,{
            login: log,
            password: pas
        })
        .then(res => {
            
            this.props.history.push('/listProperty')
            window.location.reload();
            console.log(res.data)
            
            
        }).catch(err=>console.log(err));
    }

    render () {
        return (
            <div className="logincontainer">
                <div className="container">
                
                <div className="row mb-4" id="startProject">
                    <div className="col text-center">
                    <a href="#" className="btn btn-lg btn-primary" data-toggle="modal" data-target="#basicModal">Start Project</a>
                    </div>
                </div>

                <div className="modal fade"  id="basicModal" tabindex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title" id="titleForm">SunuImmo</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                    <div className="loginmodal-container">
            
          <h1>Login to Your Account</h1><br/>
      
                    <form onSubmit={this.Logon}>
                        <div className="form-group">
                        <input className="form-control" type="email" name="login" placeholder="Login" onChange={this.onChangeHandle} required/>
                        </div>
                        <div className="form-group">
                        <input className="form-control" type="password" name="password" placeholder="Password" onChange={this.onChangeHandle} required/>
                        </div>
                        <button className="btn btn-primary">submit</button>
                    </form>

                    </div>
                    </div>
                    <div className="modal-footer">
                    
                    </div>
                    </div>
                </div>
                </div>
  
                </div>    
            </div>
        )
           
        
    }

}

export default Login
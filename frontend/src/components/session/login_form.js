import React from 'react';
import { TextField, Button } from "@mui/material";
import { Link, withRouter } from "react-router-dom";
import "./loginform.css"

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.handleModal = this.handleModal.bind(this);
    this.demoUser = this.demoUser.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.login(user);
  }

  renderErrors() {
    const { errors, modal } = this.props
    if (errors && !modal) {
      return(
        <ul>
          {Object.keys(errors).map((error, i) => (
              <li key={`error-${i}`}>
                {errors[error]}
              </li>
          ))}
        </ul>
      );
    } else {
      return ""
    }
  }

  handleModal(){
    this.props.removeErrors();
    this.props.openModal('signup')
  }

  demoUser(e){
    e.preventDefault();

    let user = {
      email: 'demo@user.com',
      password: 'password'
    }

    this.props.login(user)
  }

  render() {
    return (
      <div className="login-formbox">
        <div className="login-header">
          <h2>Log In</h2>
          {/* <div className='register' onClick={this.handleModal}>or click here to register!</div> */}
          <hr className="hr-top" />
        </div>
        
        <div className="login-errors">
          {this.renderErrors()}
        </div>
        
        <form className='login-form'>
          <div>
              <TextField type="text"
                value={this.state.email}
                onChange={this.update('email')}
                label={
                  this.state.errors.emailOrUsername ||
                  this.state.errors.username
                    ? this.state.errors.emailOrUsername ||
                      this.state.errors.username
                    : "Email or Username"
                }
                variant="outlined"
                size="small"
                sx={{ width: 350 }}
              />
            <br/>
            <br/>

              <TextField type="password"
                value={this.state.password}
                onChange={this.update('password')}
                label={
                  this.state.errors.password
                    ? this.state.errors.password
                    : "Password"
                }
                variant="outlined"
                size="small"
                sx={{ width: 350 }}
              />
            <br/>
            {/* <div className="demouser" onClick={this.demoUser}>Demo User</div> */}
            <Button
                onClick={(e) => this.demoUser(e, true)}
                variant="contained"
                sx={{ margin: "0.5em 0",
                width: 350 }}
              >
                Demo User
              </Button>
            <br/>
            {/* <div className="loginbutton" onClick={this.handleSubmit}>Login</div> */}
            <Button
                onClick={(e) => this.handleSubmit(e, true)}
                variant="contained"
                sx={{ margin: "0.5em 0",
                width: 350  }}
              >
                Log in
              </Button>
          </div>
        </form>
        <h3>Don't have an account?</h3>
      </div>
    );
  }
}

export default withRouter(LoginForm);
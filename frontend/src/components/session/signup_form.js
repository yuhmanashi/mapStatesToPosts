import React from 'react';
import { TextField, Button } from "@mui/material";
import { withRouter } from 'react-router-dom';
import "./loginform.css"

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      password2: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.signedIn === true) {
  //     this.props.history.push('/home');
  //   }

  //   this.setState({errors: nextProps.errors})
  // }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    // let userlogin = {
    //   email: this.state.email,
    //   password: this.state.password
    // };

    // this.props.signup(user, this.props.history); 
    this.props.signup(user).then(this.handleCloseModal);
  }

  componentWillUnmount() {
    let userlogin = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.login(userlogin)
  }

  handleCloseModal(){
    if (this.props.signedIn) {
      this.props.closeModal();
    }
  }

  renderErrors() {
    const { errors } = this.props
    if (errors) {
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

  render() {
    return (
      <div className="signup-formbox">
        <div className="signup-header">
          <h2>Sign Up!</h2>
          <hr className="hr-top" />
        </div>

        <div className="signup-errors">
          {this.renderErrors()}
        </div>

        <form className="signup-form">
          <div>
            <br/>
              <TextField type="text"
                value={this.state.username}
                onChange={this.update('username')}
                label={
                  this.state.errors.password
                    ? this.state.errors.password
                    : "Username"
                }
                variant="outlined"
                size="small"
                sx={{ width: 350 }}
              />
            <br/>
              <TextField type="text"
                value={this.state.email}
                onChange={this.update('email')}
                label={
                  this.state.errors.password
                    ? this.state.errors.password
                    : "Email"
                }
                variant="outlined"
                size="small"
                sx={{ width: 350 }}
              />
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
              <TextField type="password"
                value={this.state.password2}
                onChange={this.update('password2')}
                label={
                  this.state.errors.password
                    ? this.state.errors.password
                    : "Confirm Password"
                }
                variant="outlined"
                size="small"
                sx={{ width: 350 }}
              />
            <br/>
            {/* <div className="signupbutton" onClick={this.handleSubmit}>Signup</div> */}
            <Button
                onClick={(e) => this.handleSubmit(e, true)}
                variant="contained"
                sx={{ margin: "0.5em 0",
                width: 350 }}
              >
                Signup
              </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);
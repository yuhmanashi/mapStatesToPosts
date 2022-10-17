import React from 'react';
import { withRouter } from 'react-router-dom';
import "./form.css"

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
          <p>Its quick and easy!</p>
          <hr className="hr-top" />
        </div>

        <div className="signup-errors">
          {this.renderErrors()}
        </div>

        <form className="signup-form">
          <div>
            <br/>
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                placeholder="Username"
              />
            <br/>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="Email"
              />
            <br/>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
              />
            <br/>
              <input type="password"
                value={this.state.password2}
                onChange={this.update('password2')}
                placeholder="Confirm Password"
              />
            <br/>
            <div className="signupbutton" onClick={this.handleSubmit}>Signup</div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);
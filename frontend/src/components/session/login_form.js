import React from 'react';
import { withRouter } from 'react-router-dom';
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
    // this.renderSignup = this.renderSignup.bind(this);
    this.demoUser = this.demoUser.bind(this);
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.currentUser === true) {
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

  // renderSignup(){
  //   if (this.props.signedIn) {
  //     return(
  //       <div className='success'>
  //         <p>You're registered now!</p>
  //         <p>Please log in!</p>
  //       </div>
  //     )
  //   } else {
  //     return(
  //       <div className='register' onClick={this.handleModal}>or click here to register!</div>
  //     )
  //   }
  // }

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
          <div className='register' onClick={this.handleModal}>or click here to register!</div>
          <hr className="hr-top" />
        </div>
        
        <div className="login-errors">
          {this.renderErrors()}
        </div>
        
        <form className='login-form'>
          <div>
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
            <div className="demouser" onClick={this.demoUser}>Demo User</div>
            <br/>
            <div className="loginbutton" onClick={this.handleSubmit}>Login</div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);
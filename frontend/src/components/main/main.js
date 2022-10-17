import React from 'react';
import LoginFormContainer from '../session/login_form_container';
import './main.css'

class MainPage extends React.Component {
  constructor(props){
    super(props);
    this.openLoginForm = this.openLoginForm.bind(this);
    this.openSignupForm = this.openSignupForm.bind(this)
  }

  openLoginForm(){
    this.props.openModal('login');
  }

  openSignupForm(){
    this.props.openModal('signup');
  }

  render() {
    return (
      <div className="mainpage">
        <div className="mainpagecontent">
          <div className="header">
            <h1>MapStatesToPost</h1>
          </div>
          <div className='formbody'>
            <LoginFormContainer />
          </div>
          <div className="buttons">
            {/* <div className="login button" onClick={this.openLoginForm}>Log in</div> */}
            {/* <div className="signup button" onClick={this.openSignupForm}>Signup</div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
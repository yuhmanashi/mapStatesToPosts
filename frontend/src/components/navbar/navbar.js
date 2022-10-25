import React from 'react';
import { Link } from 'react-router-dom'
import './navbar.css'
import { FaGithub, FaRegUserCircle, FaLinkedin } from 'react-icons/fa'
import Button from '@mui/material/Button';


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.createPostModal = this.createPostModal.bind(this);
    this.aboutUsModal = this.aboutUsModal.bind(this);
    this.handleUser = this.handleUser.bind(this);
  }

  logoutUser(e) {
      e.preventDefault();
      this.props.logout();
  }

  // Selectively render links dependent on whether the user is logged in
  createPostModal(){
    this.props.openModal('createpost');
  }

  aboutUsModal(){
    this.props.openModal('about-us')
  }

  handleUser() {
    const { userId, users } = this.props;
    let username;
    users.forEach(user => {
      if (userId === user._id) {
        username = user.username;
        return;
      }
    });
    return username;
  }

  render() {
      return (
        <div className="navbar">
          <div className="navbar-left">
            <Link to="/home">        
              <div className="personal-logo">
                <img
                  src="https://deandingprojects.s3.us-east-2.amazonaws.com/mstp-icon.png"
                  alt="mstp-logo"
                />
              </div>
            </Link>
          </div>
            
          <div className="navbar-right">
            <div className='nav-buttons'>
              <Button color="inherit" sx={{
                width: '200px',
                  margin: '10px',
                  backgroundColor: 'rgba(15,45,48,255)',
                  color: 'white',
                  '&:hover': {
                    backgroundColor:'rgb(68,180,204)',
                    color: 'rgba(15,45,48,255)'
                  }
                }} onClick={this.createPostModal}>
                Create Post
              </Button>
              
              <div className='user-icon'>
                <FaRegUserCircle />
                <ul className="user-dropdown">
                  <div id='profile'>
                    <Link to={`/users/${this.props.userId}`}>Profile</Link>
                  </div>
                  <div id='about-us' onClick={this.aboutUsModal}>About Us</div>
                  <hr/>
                  <div id='logout-btn' onClick={this.props.logout}>Logout</div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
  }
}

export default NavBar;
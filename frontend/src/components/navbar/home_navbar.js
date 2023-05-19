import React from 'react';
import { Link } from 'react-router-dom'
import './home_navbar.css'
import { FaRegUserCircle } from 'react-icons/fa'
import Button from '@mui/material/Button';
import DehazeIcon from '@mui/icons-material/Dehaze';

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
        <div className="home-navbar">
          <div className="home-navbar-left">
            <Link to="/home">        
              <div className="home-personal-logo">
                <img
                  src="https://deandingprojects.s3.us-east-2.amazonaws.com/mstp-icon.png"
                  alt="mstp-logo"
                />
              </div>
            </Link>
          </div>
            
          <div className="home-navbar-right">
            <div className='home-user-icon'>
              <DehazeIcon/>
              <ul className="home-user-dropdown">
                <div id='profile'>
                  <Link to={`/users/${this.props.userId}`}>Profile</Link>
                </div>
                <div id='states-list'>States</div>
                <div id='trending'>Trending</div>
                <div id='create-post'>Create Post</div>
                <div id='about-us' onClick={this.aboutUsModal}>About Us</div>
                <hr/>
                <div id='logout-btn' onClick={this.props.logout}>Logout</div>
              </ul>
            </div>
          </div>
            {/* <div className='home-user-icon'>
                <FaRegUserCircle />
                
              </div>
            </div> */}
            {/* <div className='nav-buttons'>
              <Button color="inherit" sx={{
                // width: '140px',
                  margin: '10px',
                  backgroundColor: 'rgba(15,45,48,255)',
                  color: 'white',
                  fontSize: 'min(max(10px, 2vw), 14px)',
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
            </div> */}
          
        </div>
      );
  }
}

export default NavBar;
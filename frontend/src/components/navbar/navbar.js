import React from 'react';
import { Link } from 'react-router-dom'
import './navbar.css'
import { FaGithub, FaRegUserCircle, FaLinkedin } from 'react-icons/fa'


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
            <div className="nav-logo">
                <Link to="/home">mapStatestoPost</Link>
            </div>
            
            <div className='nav-buttons'>
              <div className='create-post' onClick={this.createPostModal}>Create Post</div>

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
      );
  }
}

export default NavBar;
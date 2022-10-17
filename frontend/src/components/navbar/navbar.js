import React from 'react';
import { Link } from 'react-router-dom'
import './navbar2.css'
import { FaGithub, FaRegUserCircle, FaLinkedin } from 'react-icons/fa'


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.openModal = this.openModal.bind(this);
    this.handleUser = this.handleUser.bind(this);
  }

  logoutUser(e) {
      e.preventDefault();
      this.props.logout();
  }

  // Selectively render links dependent on whether the user is logged in
  openModal(){
    this.props.openModal('createpost');
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

  //test
  render() {
      return (
        <div className="navbar">
            <div className="nav-logo">
                <Link to="/home">mapStatestoPost</Link>
            </div>
            
            <div className='nav-buttons'>
              <div className='create-post' onClick={this.openModal}>Create Post</div>

              <div className='user-icon'>
                <FaRegUserCircle />
                <ul className="user-dropdown">
                  <div id='profile'>
                    <Link to={`/users/${this.props.userId}`}>Profile</Link>
                  </div>
                  <div id='about-us'>About Us</div>
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
import React from 'react';
import { Link } from 'react-router-dom'
import './home_navbar2.css'
import { FaRegUserCircle } from 'react-icons/fa'
import Button from '@mui/material/Button';
import DehazeIcon from '@mui/icons-material/Dehaze';

class NavBar2 extends React.Component {
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

  //states pops up sidebar
  //trending pops up trending states
  //create post opens post modal
  render() {
      return (
        <div className="navbar2">
          <div>States</div>
          <div>Trending</div>
          <div>Create Post</div>
        </div>
      );
  }
}

export default NavBar2;
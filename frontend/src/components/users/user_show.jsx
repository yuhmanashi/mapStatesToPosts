import React from 'react'; 
import { withRouter } from 'react-router-dom';

import PostsIndexContainer from '../posts/posts_index_container';
import NavBarContainer from '../navbar/navbar_container';
import './user_show.css';

import SideBar from "../side_bar/side_bar.jsx";


class UserShow extends React.Component {
  constructor(props) {
    super(props); 
    
    this.handlePosts = this.handlePosts.bind(this);
  }

  componentDidMount() {
    this.props.fetchComments();
    this.props.fetchUsers();
    this.props.fetchUser(this.props.userId)
  }

  handlePosts() {
    const { userId, posts } = this.props;
    const userPosts = posts.filter(post => post.user === userId)
    return userPosts;
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
    if (!this.handleUser()) return null;

    return (
      <div className="user-show-container">
        <NavBarContainer />
        {/* <SideBar /> */}
        
          <div className="user_details">
            <h1 className="user_name">{this.handleUser()}'s Posts</h1>
            <div className='user_posts'>
              <PostsIndexContainer posts={this.handlePosts()}/>
            </div>
          </div>
        
      </div>
    )
  }


}; 

export default withRouter(UserShow); 
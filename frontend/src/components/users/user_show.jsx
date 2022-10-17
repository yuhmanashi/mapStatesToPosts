import React from 'react'; 
import { withRouter } from 'react-router-dom';

import PostsIndexContainer from '../posts/posts_index_container';
import NavBarContainer from '../navbar/navbar_container';
import './user_show.css';


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
    const { posts } = this.props;
    const userPosts = posts.filter(post => post.user === this.props.userId)
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
    return (
      <div className="user_show_container">
        <header className='navbar'>
          <NavBarContainer />
        </header>
 
          <div className="user_details">
            <h1 className="user_name">{this.handleUser()}'s Page</h1>
        

            <div className='user_posts'>
                <PostsIndexContainer posts={this.handlePosts()}/>
            </div>

            
        </div>
        
      </div>
    )
  }


}; 

export default withRouter(UserShow); 
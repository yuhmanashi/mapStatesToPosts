import React from 'react'; 
import PostIndexItem from './post_index_item';
import "./posts_index.css" 
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";

class PostsIndex extends React.Component {
  componentDidMount(){
    this.props.fetchPosts();
    this.props.fetchComments();
    this.props.fetchUsers();
  }

  render() {
    const { page, maxPosts, posts, comments, users, deletePost, openModal, givePostId, userId } = this.props;
    if (!posts) return null;
    
    const totalPosts = posts.length;
    if (maxPosts === null) maxPosts = totalPosts
    const postShow = posts.slice(0, maxPosts).map(post => {
      return (
        <PostIndexItem
          post={post}
          comments={comments}
          users={users}
          userId={userId}
          deletePost={deletePost}
          openModal={openModal}
          givePostId={givePostId}
          key={post._id}
        />
      )});
    
    if (page === 'home'){
      return <div className='home-posts'>{postShow}</div>
    }

    return (
      <div className='state-posts'>
        {postShow}
      </div>
    );
  }
}

export default PostsIndex; 
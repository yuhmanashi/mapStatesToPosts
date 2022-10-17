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
    const { maxPosts, posts, comments, users, deletePost, openModal, givePostId, userId } = this.props;
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
    return (
      <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
      >
        <Masonry>
          {postShow}
        </Masonry>
      </ResponsiveMasonry>
      // <ul className="post-container"> 
      //   {postShow}
      // </ul>
    );
  }
}

export default PostsIndex; 
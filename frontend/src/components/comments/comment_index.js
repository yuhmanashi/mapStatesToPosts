import React from 'react';
import CommentIndexItem from './comment_index_item';
import './comment_index.css'

class CommentIndex extends React.Component {
  
  render() {
    const { comments, deleteComment, editComment, openModal, giveCommentId, postId, users, userId, fetchComment } = this.props;
    const postComments = comments.filter(comment => comment.post === postId);

    return (
        <ul className="comment-container"> 
          {
            postComments.map(comment => (
              <CommentIndexItem
                comment={comment}
                userId={userId}
                users={users}
                fetchComment={fetchComment}
                giveCommentId={giveCommentId}
                editComment={editComment}
                deleteComment={deleteComment}
                openModal={openModal}
                key={comment._id}
              />
            ))
          }
        </ul>
    );
  }
}

export default CommentIndex;
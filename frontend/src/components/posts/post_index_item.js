import React from 'react';
import { Link } from 'react-router-dom'; 
import CommentIndexContainer from '../comments/comment_index_container';
import CreateCommentContainer from '../comments/create_comment_form_container';
import { MdEdit, MdDelete } from 'react-icons/md'

import data from '../../data/usa-map-dimensions'


class PostIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleDate = this.handleDate.bind(this);
    this.handleUser = this.handleUser.bind(this);
    this.openModal = this.openModal.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDate() {
    const { post } = this.props;
    const date = post.date
    const year = date.slice(0, 4)
    const monthes = { '01': 'January', '02': 'February', '03': 'March', '04': 'April', '05': 'May', '06': 'June', '07': 'July', '08': 'August', '09': 'September', '10': 'October', '11': 'November', '12': 'December' }
    const month = monthes[date.slice(5, 7)]
    let day = date.slice(8, 10)
    if (day[0] === '0') day = day[1];
    return `${month} ${day}, ${year}`
  }

  

  handleUser() {
    const { post, users } = this.props;
    let username;
    users.forEach(user => {
      if (post.user === user._id) {
        username = user.username;
        return;
      }
    });
    return username;
  }

  handleDelete(){
    if (this.props.userId === this.props.post.user) {
      this.props.deletePost(this.props.post._id);
    }
  }

  openModal(){
    if (this.props.userId === this.props.post.user) {
        this.props.givePostId(this.props.post._id);
        this.props.openModal('editpost');
    }
  }

  render() {
    let statesData = data();
    const { post } = this.props;
    const abberviation = post.stateName

    return (
      <div className="post-items">
        <div className="post-box">
          <div className="state-name">
            <h3>{statesData[abberviation].name}</h3>
            <div className="date">
              {this.handleDate()}
            </div>
          </div>

          <div className="post-pic">
            <img src={`${post.photo.location}`} />
          </div>
          <br />
          <div className="post-body">
            <div className="body-top">
              <div className="username">
                <Link to={`/users/${post.user}`}>
                  {this.handleUser()}
                </Link>
              </div>
            </div>

            <div className="body-mid">
              <p className="caption">
                {post.caption}
              </p>
            </div>

          </div>

          <div className='comment-box'>
            <CommentIndexContainer postId={post._id} />
            <br />
            <CreateCommentContainer postId={post._id} />
          </div>

          <div className='edit-delete-buttons'>
            <button id='post-edit' onClick={this.openModal}>
              <MdEdit/>
            </button>
            <button id='post-delete' onClick={this.handleDelete}>
              <MdDelete/>
            </button>
          </div>

        </div>
      </div>
    )
  }
}

export default PostIndexItem;
import React from 'react';
import './comment_form.css'

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.comment;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetCommentInput = this.resetCommentInput.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state).then(this.resetCommentInput());
  }

  resetCommentInput(){
    this.state.body = "";
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  render() {
    return (
      <div className="comment-form">
        <form onSubmit={this.handleSubmit}>
            <input
              className="create-comment"
              value={this.state.body}
              onChange={this.update('body')}
              placeholder="Write a comment"
            />
        </form>
      </div>
    );
  }
}

export default CommentForm;
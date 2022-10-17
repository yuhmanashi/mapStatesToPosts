import React from 'react';
import { TiDelete, TiEdit } from 'react-icons/ti';
import { Link } from 'react-router-dom'; 



class CommentIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteComment = this.handleDeleteComment.bind(this);
        this.handleAuthor = this.handleAuthor.bind(this);
        this.openModal = this.openModal.bind(this);
    }

    handleDeleteComment() {
        if (this.props.userId === this.props.comment.author) {
            this.props.deleteComment(this.props.comment._id);
        }
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    handleAuthor() {
        const { comment, users } = this.props;
        let username;
        users.forEach(user => {
            if (comment.author === user._id) {
                username = user.username;
                return;
            }
        });
        return username;
    }

    openModal(){
        if (this.props.userId === this.props.comment.author) {
            this.props.giveCommentId(this.props.comment._id);
            this.props.openModal('editcomment');
        }
    }

    render() {
        const { comment, users } = this.props;
        return (
            <div className="comment-items">
                <div className="comment-body">
                    <div className="author">
                        <Link to={`/users/${comment.author}`}>
                            {this.handleAuthor()}
                        </Link>
                    </div>

                    <div className="comment">
                        {this.props.comment.body}
                    </div>
                </div>
                <div className="comment-button">
                    <div className="comment-delete" onClick={this.handleDeleteComment}><TiDelete /></div>
                    <div className="comment-edit" onClick={this.openModal}><TiEdit /></div>
                </div>
            </div>
        )
    }
}

export default CommentIndexItem;
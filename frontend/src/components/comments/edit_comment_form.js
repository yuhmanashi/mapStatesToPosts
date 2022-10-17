import React from 'react';
import './comment_form.css';

class EditCommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.comment;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        this.props.fetchComment(this.props.commentId);
    }

    componentDidUpdate(prevProps, prevState){
        if (prevProps.comment !== this.props.comment){
            this.setState(this.props.comment)
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state).then(this.props.closeModal());
    }
    
    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }
      
    render() {
        // if (!this.props.comment) return null;
        const { comment } = this.props;
        if (!this.state) return null;
        // this.state = comment
        return (
            <div className="edit-comment-form">
                <div className='form-header'>
                    <h3>Edit Comment</h3>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        className="createcomment"
                        value={this.state.body}
                        onChange={this.update('body')}
                    />
                </form>
            </div>
        );
    }
}

export default EditCommentForm;
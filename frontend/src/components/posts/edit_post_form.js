import React from 'react';
import './post_create_form.css';

class EditCommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.post;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        this.props.fetchPost(this.props.postId);
    }

    componentDidUpdate(prevProps, prevState){
        if (prevProps.post !== this.props.post){
            this.setState(this.props.post)
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state).then(this.props.closeModal());
    }

    // handleSubmit(e) {
    //   e.preventDefault();
    //   const formData = new FormData();

    //   formData.append('caption', this.state.caption);
    //   formData.append('stateName', this.state.stateName);
  
  
    //   if (this.state.photo){
    //     formData.append('photo', this.state.photo);
    //   }
      
    //   this.props.action(formData).then(this.props.closeModal());
    // }


    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }
      
    render() {
        if (!this.state) return null;
        return(
          <div className="post-create-container">
            <form onSubmit={this.handleSubmit}>
    
              <h1>Edit Post</h1>
                <label>Caption</label>
                <textarea 
                className="captionbody"
                  onChange={this.update('caption')}
                  value={this.state.caption}
                  rows="6"
                  cols="50" />
              
              <br />
              <label>State</label>
              <select
              className="state"
                value={this.state.stateName || ''}
                onChange={this.update('stateName')}>
                <option value=" ">Select a State</option>
                <option value="AK">Alaska</option>
                <option value="AL">Alabama</option>
                <option value="AR">Arkansas</option>
                <option value="AZ">Arizona</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="IA">Iowa</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="MA">Massachusetts</option>
                <option value="MD">Maryland</option>
                <option value="ME">Maine</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MO">Missouri</option>
                <option value="MS">Mississippi</option>
                <option value="MT">Montana</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="NE">Nebraska</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NV">Nevada</option>
                <option value="NY">New York</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VA">Virginia</option>
                <option value="VT">Vermont</option>
                <option value="WA">Washington</option>
                <option value="WI">Wisconsin</option>
                <option value="WV">West Virginia</option>
                <option value="WY">Wyoming</option>
            </select>
            
            {/* <label>Image</label>
                <input 
                  type="file"
                  onChange={e => this.setState({ photo: e.target.files[0] })}
                  // value={this.state.photo} 
                 /> */}
              <br />
              <input className="createpostbtn" type="submit" value="Edit Post" />
              <br />
              <button className="cancelbtn" onClick={this.props.closeModal}>Cancel</button>
            </form>
    
          </div>
        )
    }
}

export default EditCommentForm;
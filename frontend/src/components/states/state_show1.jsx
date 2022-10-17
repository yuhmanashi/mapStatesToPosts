import React from 'react'; 
import { Link } from 'react-router-dom'; 
import CommentIndexContainer from '../comments/comment_index_container';
import CreateCommentContainer from '../comments/create_comment_form_container';
import './state_show.css';
import '../posts/posts_index.css'
import PostsIndexContainer from '../posts/posts_index_container';


class StateShow extends React.Component{
  constructor(props){
    super(props); 

    this.handlePosts = this.handlePosts.bind(this);
    
  }

  componentDidMount() {
    this.props.fetchPosts();
    this.props.fetchComments();
    this.props.fetchUsers();
  }
  
  handlePosts() {
    const { posts } = this.props;
    const nyPosts = posts.filter(post => post.stateName === 'New York')
    return nyPosts;
  }
  
  render() {
 

    // for (let i = 0; i < this.props.USAStates.length)

    return (
      
      <div className="state-show-wrapper">
          <div className="state_container">
            <div className="state_info">
            <Link to={`/`}>Back to Map</Link>
            <h1 className="state_header">New York</h1>
            <h1 className="state_header">Description</h1>
            <p className="state_body">New York is a state in the northeastern U.S., known for New York City and towering Niagara Falls. NYC’s island of Manhattan is home to the Empire State Building, Times Square and Central Park. The Brooklyn Bridge connects Manhattan with the borough of Brooklyn. The iconic Statue of Liberty stands in New York Harbor. To the east, Long Island has beaches, the Montauk Lighthouse, the ritzy Hamptons and Fire Island. </p>
            <h1 className="state_header">Fun Facts</h1>
            <p className="state_body">App Academy, a top coding bootcamp, have a campus in New York City.</p>
            </div>
          </div>
          <div className='state_posts'>
            <PostsIndexContainer posts={this.handlePosts()}/>
          </div>
      </div>
    )
  }
}


export default StateShow; 


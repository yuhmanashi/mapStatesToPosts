import React from 'react'; 
import { Link } from 'react-router-dom'; 
import './state_show.css';
import '../posts/posts_index.css'
import PostsIndexContainer from '../posts/posts_index_container';
import NavBarContainer from '../navbar/navbar_container';
import SideBar from "../side_bar/side_bar.jsx";


import { MdTravelExplore } from 'react-icons/md'
import { RiChatSmileFill, RiRoadMapFill} from 'react-icons/ri'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


import data from '../../data/usa-map-dimensions'


class StateShow extends React.Component{
  constructor(props){
    super(props); 
    this.handlePosts = this.handlePosts.bind(this);
    this.handleNoPosts = this.handleNoPosts.bind(this);
  }

  componentDidMount() {
    this.props.fetchPosts();
    this.props.fetchComments();
    this.props.fetchUsers();
  }
  
  handlePosts(res) {
    const { posts } = this.props;
    const statePosts = posts.filter(post => post.stateName === res)
    return statePosts
  }

  handleNoPosts(posts){
    if (posts.length){
      return <PostsIndexContainer posts={posts}/>
    } else {
      return <div className='no-posts'>No posts yet</div>
    }
  }
  
  render() {
    const { USAStates, stateId } = this.props;

    let res = ""

    USAStates.forEach(USAState => {
      if (USAState._id === stateId)
      res = USAState.name
    })

    let statesData = data();

    let posts = this.handlePosts(res)
    let latestPost = posts[0]

    let itemData = latestPost ? posts.slice(0 , 9) : [{photo:{location:"https://deandingprojects.s3.us-east-2.amazonaws.com/noimage.jpeg"}}]
    return (
      <div className="state-show-wrapper">
          <NavBarContainer />
          <SideBar />
          <div className="state-main">
            <div className="state-content">
              {/* change to modal */}
              <div className="state-info">
                <Link to={`/`}><RiRoadMapFill/> Back to Map </Link>
                <div className='state-title'>{statesData[res].name}</div>
                <div className='recent-posts'>
                  <div className='state-title'>Recent Photos</div>
                  <ImageList sx={{ width: 600, height: 300 }} cols={2} rowHeight={300}>
                  {itemData.map((item) => (
                    <ImageListItem key={item.photo.location}>
                      <img
                        src={`${item.photo.location}?w=300&h=300&fit=crop&auto=format`}
                        srcSet={`${item.photo.location}?w=300&h=300&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                    />
                    </ImageListItem>
                    ))}
                  </ImageList>
                </div>
                
                <div className='state-desc'>
                  <div className='state-title'>Description</div>
                  {statesData[res].description}
                </div>
                
                <div className="funfact">
                  <div className='state-title'>Fun Fact of {statesData[res].name}</div>
                  <p>{statesData[res].funFacts}</p>
                  <br/>
                  <a href={statesData[res].funFactsUrl} target="_blank" rel="noreferrer"><RiChatSmileFill /> More fun facts!</a>
                  <br/>
                  <a href={statesData[res].travelUrl} target="_blank" rel="noreferrer"><MdTravelExplore /> Travel Info</a>
                </div>

              </div>

              <div className='scroller'>
                <div className='scroller-title'>All State Posts</div>
                {this.handleNoPosts(posts)}
              </div>

            </div>
          </div>
      </div>
    )
  }
}


export default StateShow; 


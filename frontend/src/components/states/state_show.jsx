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
          <div className="state-main">
            <div className="state-top">
              {/* change to modal */}
              <SideBar />
              <div className="state-info">
                <Link to={`/`}><RiRoadMapFill/> Back to Map </Link>
                <div>
                  <h1>{statesData[res].name}</h1>
                  <p>{statesData[res].description}</p>
                </div>
                
                <div className="funfact">
                  <h1>Fun Fact of {statesData[res].name}</h1>
                  <p>{statesData[res].funFacts}</p>
                  <h1>Most Recent Photos</h1>
                  <ImageList sx={{ width: 600, height: 600 }} cols={2} rowHeight={300}>
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
                  <br />
                  <a href={statesData[res].funFactsUrl} target="_blank" rel="noreferrer"><RiChatSmileFill /> More fun facts!</a>
                  <br />
                  <a href={statesData[res].travelUrl} target="_blank" rel="noreferrer"><MdTravelExplore /> Travel Info</a>
                </div>

              </div>

              <div className="filler">
                <div className='state-posts'>
                  <PostsIndexContainer posts={this.handlePosts(res)}/>
                </div>  
              </div>
            </div>


          </div>
      </div>
    )
  }
}


export default StateShow; 


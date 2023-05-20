import React, { Component } from 'react';
import './home2.css';
import USAMap from "react-usa-map";
import PostsIndexContainer from '../posts/posts_index_container'; 
import NavBarContainer from '../navbar/home_navbar_container';
import NavBar2Container from '../navbar/home_navbar2_container';
import SideBar from "../side_bar/side_bar_test";
import { AiFillFire, FaFire, ImFire, RiFireFill, MdLocalFireDepart } from 'react-icons/fa'
import Button from '@mui/material/Button';
import Trendings from './trendings.js'
import HomeTabs from '../navbar/tabs';


class HomePage extends Component {
  constructor(props){
    super(props);
    this.state = { width: 0, height: 0};
    this.updateWindowSize = this.updateWindowSize.bind(this);
  }

  mapHandler = (event) => {
    const stateName = event.target.dataset.name
    this.props.USAStates.forEach(USAState => {

      if (stateName === USAState.name) {
        this.props.history.push(`/USAStates/${USAState._id}`);
      }
    })
  };

  statesFilling = () => {
    const { posts, currentUser} = this.props;
    
    let states = [];
    posts.map(post => {

      if (post.user === currentUser.id) {
      states.push(post.stateName)
      }
    })

    const res = states.reduce((acc, state) => {
       acc[state] = {
        fill: "#3ca023"
      };
      return acc;
    }, {})
    return res
  }

  componentDidMount() {
    this.props.fetchStates();
    this.updateWindowSize();
    window.addEventListener('resize', this.updateWindowSize)
  }

  componentWillUnmount(){
    window.removeEventListener('resize', this.updateWindowSize)
  }

  updateWindowSize(){
    this.setState({ width: window.innerWidth, height: window.innerHeight })
  }
  
  render() {
    const { posts, USAStates } = this.props;
    if (!posts || !USAStates) {
      return null;
    }

    return (
      <div className="home">
        <NavBarContainer />
        <div className='tabs'>
          <HomeTabs />
        </div>
        <main className="main">
          <SideBar windowSize={this.state} />
          <div className="content">
            
              <div className="home-map">
                {/* <div className='trend-legend'>
                  <div className='trending'>
                    <Button className='trending-title'>Trending States <FaFire/></Button>
                    <hr/>
                    <Trendings/>           
                    <br/>
                  </div>
                  <div className='legend'>
                    <div>Legend</div>
                    <div id='greenbox'>
                      <div className='box'></div> Visited
                    </div>
                    <div id='greybox'>
                      <div className='box'></div> Unvisited
                    </div>
                  </div>
                </div> */}
                <br/>
                <USAMap title='' customize={this.statesFilling()} onClick={this.mapHandler} />
                <div className='home-tag'>Click on a state to view the state's page!</div>
                
              </div>

              <div className= "scroller">
                <div className='scroller-title'>Recent Posts</div>
                <PostsIndexContainer posts={posts} maxPosts={8} page={'home'}/>
              </div>
          </div>
        </main>


      </div>
           
    );
  }
}

export default HomePage;

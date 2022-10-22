import React, { Component } from 'react';
import './home.css';
import USAMap from "react-usa-map";
import PostsIndexContainer from '../posts/posts_index_container'; 
import NavBarContainer from '../navbar/navbar_container';
import SideBar from "../side_bar/side_bar.jsx";
import { AiFillFire, FaFire, ImFire, RiFireFill, MdLocalFireDepart } from 'react-icons/fa'
import Button from '@mui/material/Button';
import Trendings from './trendings.js'


class HomePage extends Component {  
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
    this.props.fetchStates()
  }


  render() {
    const { posts, USAStates } = this.props;
    if (!posts || !USAStates) {
      return null;
    }

    return (
      <div className="home">
        <NavBarContainer />
        <SideBar />
        <main className="main">
          <div className="content">
            
              <div className="home-map">
                <div className='trend-legend'>
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
                </div>
                <br/>
                <USAMap title='' customize={this.statesFilling()} onClick={this.mapHandler} />
                <div className='home-tag'>Click on a state to view the state's page!</div>
                
              </div>

              <div className= "scroller">
                <PostsIndexContainer posts={posts} maxPosts={5}/>
              </div>
          </div>
        </main>


      </div>
           
    );
  }
}

export default HomePage;

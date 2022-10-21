import React, { Component } from 'react';
import './home2.css';
import USAMap from "react-usa-map";
import PostsIndexContainer from '../posts/posts_index_container'; 
import NavBarContainer from '../navbar/navbar_container';
import SidebarContainer from '../sidebar/test_container';
import { Link } from 'react-router-dom';
import { AiFillFire, FaFire, ImFire, RiFireFill, MdLocalFireDepart } from 'react-icons/fa'


class HomePage extends Component {  
  mapHandler = (event) => {
    const stateName = event.target.dataset.name
    const stateStyle = event.target.style
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
        <SidebarContainer />

        <main className="main">
          <div className="content">
            <div className="top">
              <div className="home-map">
                <USAMap title='' customize={this.statesFilling()} onClick={this.mapHandler} />
                <div className='home-tag'>Click on a state to view the state's page!</div>
              </div>

              <div className="placehold">
                <div className='trending-title'>Trending <FaFire/></div>
                <hr/>
                <a href="">California</a>
                <br/>
                <p>Everyone is visiting California right now!</p>
                {/* <div className="trending-content">
                  <a href="">California</a>
                  <p>Everyone is visiting California right now!</p>
                </div> */}
              </div>
            </div>
           
            {/* <PostsIndexContainer posts={posts} maxPosts={1}/> */}
            <div className='bottom'>
              <div className= "scroller">
                <PostsIndexContainer posts={posts} maxPosts={4}/>
              </div>
            </div>
          </div>
        </main>

        {/* <div className="btn">
          <Link to="/states/CA"><button>CA</button></Link>
        </div> */}
      </div>
           
    );
  }
}

export default HomePage;

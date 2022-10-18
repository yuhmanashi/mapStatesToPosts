import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';
import { FaGithub, FaRegUserCircle, FaLinkedin } from 'react-icons/fa';

class Sidebar extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="sidebar">
                <div className="sidebar-items">
                    
                    {/* <ul>
                        <li className="drop-down-menu-1">
                        <a href="#" className="icon-home"><FaGithub /></a>
                        <ul className='dropdown-content'>
                            <li><a href="https://github.com/KayiLeung/mapStatesToPost" target="_blank">map States To Post</a></li>
                            <li><a href="https://github.com/dingtianding" target="_blank">Dean Ding</a></li>
                            <li><a href="https://github.com/KayiLeung" target="_blank">Ka Yi Leung</a></li>
                            <li><a href="https://github.com/smackey15" target="_blank">Sean Mackey</a></li>
                            <li><a href="https://github.com/yuhmanashi" target="_blank">Yao Xu</a></li>
                        </ul>
                        </li>
                    </ul> */}

                    {/* <ul>
                        <li className="drop-down-menu-1">
                        <a href="#" className="icon-home"><FaLinkedin /></a>
                        <ul className='dropdown-content'>
                            <li><a href="https://www.linkedin.com/in/deanding/" target="_blank">Dean Ding</a></li>
                            <li><a href="https://www.linkedin.com/in/ka-yi-leung-9b0687a3/" target="_blank">Ka Yi Leung</a></li>
                            <li><a href="https://www.linkedin.com/in/sean-mackey123/" target="_blank">Sean Mackey</a></li>
                            <li><a href="https://www.linkedin.com/in/yaoxu03/" target="_blank">Yao Xu</a></li>
                        </ul>
                        </li>
                    </ul> */}
                </div>

                <footer className="footer">
                    <div>
                        <p id="footer_text">Copyright ©2022
                            <br/>
                            Favicon courtesy of <a href="https://www.vecteezy.com/" target="_blank" className="footer-link">Vecteezy</a>
                        </p>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Sidebar;
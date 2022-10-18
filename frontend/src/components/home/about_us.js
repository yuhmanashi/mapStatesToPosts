import React from 'react';
import { FaGithub, FaRegUserCircle, FaLinkedin } from 'react-icons/fa';
import './about_us.css'

export default class AboutUs extends React.Component {
    render(){
        return (
            <div className="about-us-container">
                <h1>About Us</h1>
                <hr/>
                <div className="about-us">
                    <ul className='yao-xu'>
                        <h4>Yao Xu:</h4>
                        <li>
                            <a href="https://github.com/yuhmanashi" target="_blank">
                                <FaGithub />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/yaoxu03/" target="_blank">
                                <FaLinkedin />
                            </a>
                        </li>
                    </ul>

                    <ul className='dean-ding'>
                        <h4>Dean Ding:</h4>
                        <li>
                            <a href="https://github.com/dingtianding" target="_blank">
                                <FaGithub />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/deanding/" target="_blank">
                                <FaLinkedin />
                            </a>
                        </li>
                    </ul>

                    <ul className="project-link">
                        <h4>Project Repo:</h4>
                        <li>
                            <a href="https://github.com/KayiLeung/mapStatesToPost" target="_blank">
                                <FaGithub />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
import React from 'react';
import { FaGithub, FaRegUserCircle, FaLinkedin, FaAngellist } from 'react-icons/fa';
import './about_us.css'

export default class AboutUs extends React.Component {
    render(){
        return (
            <div className="about-us-container">
                <div className="about-us">
                    <ul className='yao-xu'>
                        <div className='selfie'>
                            <img src={require('./pics/yao.png')}></img>
                        </div>
                        <h4>Yao Xu</h4>
                        <ul className='links'>
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
                    </ul>
                    
                    <ul className='dean-ding'>
                        <div className='selfie'>
                            <img src={require('./pics/dd.png')}></img>
                        </div>
                        <h4>Dean Ding</h4>
                        <ul className='links'>
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
                    </ul>

                    <ul className='kayi-leung'>
                        <div className='selfie'>
                            <img src={require('./pics/ky.png')}></img>
                        </div>
                        <h4>Kayi Leung</h4>
                        
                        <ul className='links'>
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
                    </ul>

                    <ul className='sean-mackey'>
                        <div className='selfie'>
                            <img src={require('./pics/smackey.png')}></img>
                        </div>
                        <h4>Sean Mackey</h4>
                        
                        <ul className='links'>
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
                    </ul>

                    <ul className='project-repo'>
                        <div className='selfie'>
                            <img className='selfie'src={require('./pics/mstep.png')}></img>
                        </div>
                        
                        <h4>Project Repo</h4>
                        <ul className='links'>
                            <li>
                                <a href="https://github.com/yuhmanashi/mapStatesToPosts" target="_blank">
                                    <FaGithub />
                                </a>
                            </li>
                        </ul>
                    </ul>
                </div>
            </div>
        )
    }
}
import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';

class Sidebar extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="sidebar">
                <div className="sidebar-items">
                    <div>test big</div>
                    <div>test another</div>
                    <div>test</div>
                    <div>test small</div>
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
import React, { useRef, useState, useEffect } from 'react';
import '../stylesheets/splash.scss'

import Splash1 from './svgs/splash-1.jsx'
import Splash2 from './svgs/splash-2.jsx'
import Splash3 from './svgs/splash-3.jsx'

import NestedModal from './modal.jsx';


function Splash() {
    const [scrollTop, setScrollTop] = useState(0);
    const [stateIndex, setstateIndex] = useState(0);
    
    const states = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming']


    function useInterval(cb, delay){
        const savedCb = useRef();

        useEffect(() => {
            savedCb.current = cb;
        }, [cb])

        useEffect(() => {
            function tick() {
              savedCb.current();
            }
            if (delay !== null) {
              let id = setInterval(tick, delay);
              return () => clearInterval(id);
            }
        }, [delay]);
    }

    useInterval(() => {
        if (stateIndex !== states.length - 1){
            setstateIndex(stateIndex + 1);
        } else {
            setstateIndex(0);
        }
      }, 1000);
  
    
    useEffect(() => {
        let splash3 = document.getElementById('splash-3')
        let splash2 = document.getElementById('splash-2')
        let splashCircle = document.getElementById('splash-circle')
        let splashBackground = document.getElementById('splash-background')


        document.addEventListener('scroll', function(){
            let scrollValue = window.scrollY;
            setScrollTop(scrollValue)
            if (scrollTop < 1000){
                splash3.style.left = scrollTop * 0.1 + 'px';
                splash3.style.top = -65 + scrollTop * .25 + 'px';
                splash2.style.left = '-' + scrollTop * 0.15 + 'px';
                splash2.style.top = 10 + scrollTop * .3 + 'px';
                splashCircle.style.top = 135 + scrollTop * 2 + 'px';
                splashBackground.style.left = '-' + scrollTop * 0.3 + '%';
            } else {

            }
        })
    }, [window.scrollY])



    return (
        <>
            <div id='splash-background' className='splash-background'/>
            <div id='splash-stars' className='splash-stars'>
            </div>
            <div className='splash-center-container'>
                <div id='splash-circle' className='splash-circle'>
                    <h5>[scroll to continue]</h5>
                </div>
                <div className='splash-text'>
                    <h1>mapStateToPosts</h1>
                    <div className='states'>
                        <h4>{states[stateIndex]}</h4>
                    </div>
                </div> 
                <div className='splash-modal'>
                    <NestedModal/>
                </div> 
            </div>       
            <div id='splash-3'className='splash-asset'>
                <Splash3/>
            </div>
            <div id='splash-2'className='splash-asset'>
                <Splash2/>
            </div>
            <div id='splash-1' className='splash-asset-border'>
                <Splash1/>
            </div>
        </>
    )
};

export default Splash;
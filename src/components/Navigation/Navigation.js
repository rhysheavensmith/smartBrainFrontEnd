import React from 'react';
import brain from './brain.png';
import './Navigation.css';

const Navigation = ({onRouteChange, isSignedIn}) => {
        if(isSignedIn) {
            return (
                <nav className='navbar'>
                <img src={brain} alt='brain' height='40' width='40' className='f3 link dim white black pa3 pointer'/>
                <p onClick={() => onRouteChange('signout')} className='f5 link dim black underline pa3 pointer'>Sign Out</p>
            </nav>
            );
            
        } else { return (
            <nav className='navbar'>
                <img src={brain} alt='brain' height='40' width='40' className='f3 link dim white black pa3 pointer'/>
                <div style={{display: 'flex'}}>
                <p onClick={() => onRouteChange('signin')} className='f5 link dim black underline pa3 pointer'>Sign In</p>
                <p onClick={() => onRouteChange('register')} className='f5 link dim black underline pa3 pointer'>Register</p>
                </div>
            </nav>
        );
            
        }  
       
}

export default Navigation;
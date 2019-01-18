import React from 'react';
import Tilt from 'react-tilt';
import './logo.css';
import brain from './brain.png';


const Logo = () => {
    return (
        <div className='mt-0 ml-4'>
           <Tilt className="Tilt" options={{ max : 55 }} style={{ height: 150, width: 150 }}>
           <div className="Tilt-inner"><img style={{paddingTop:'25px'}} src={brain} alt=''/></div>
            </Tilt>
        </div>
    );
}

export default Logo;
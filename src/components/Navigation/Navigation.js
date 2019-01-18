import React from 'react'

const Navigation = ({onRouteChange, isSignedIn}) => {
        if(isSignedIn) {
            return(
            <nav style = {{display: 'flex', justifyContent: 'flex-end', zIndex: '-1'}}>
            <p onClick={() => onRouteChange('signout')}className='mr-3 mt-3 h3 pointer'>Sign Out</p>
            </nav>
            )
            
        } else {
            return (
            <nav style = {{display: 'flex', justifyContent: 'flex-end', zIndex: '-1'}}>
            <p onClick={() => onRouteChange('signin')} className='mr-3 mt-3 h3 pointer'>SignIn</p>
            <p onClick={() => onRouteChange('register')} className='mr-3 mt-3 h3 pointer'>Register</p>
            </nav>
            );
        }
}

export default Navigation;
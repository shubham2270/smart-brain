import React from 'react';



const Ranks = ({ name, entries }) => {
    return (
        <div>
           <div className='h3'>
               {`${name}, your current rank is...`}
           </div>
           <div className='h1'>
               {entries}
           </div>
        </div>
    );
}

export default Ranks;
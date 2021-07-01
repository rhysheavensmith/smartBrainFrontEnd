import React from 'react';

const Rank = ({ name, entries }) => {
    return(
        <div>
            <div className='white f2 pa3'>{`${name}, you have made ${entries} entries`}</div>
        </div>    
    );   
}

export default Rank;
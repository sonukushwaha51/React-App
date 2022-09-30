import React, {Component} from 'react';

function MainBlock() {
    return ( 
        <div className = "main">
            <p>This is online book store app.</p>
            <p className="time">The current time is {new Date().toLocaleTimeString()}</p>
        </div>
    );    
}
       

export default MainBlock;
import React, {Component} from 'react';

function MainBlock() {
    return ( 
        <div className = "homepage-mainblock">
            <div className = "container">
                <div className = "row">
                    <p>This is online book store app.</p>
                    <p className="time">The current time is {new Date().toLocaleTimeString()}</p>
                </div>
            </div>
            
        </div>
    );    
}
       

export default MainBlock;
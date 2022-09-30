import react, {Component} from 'react';
import App from '../App.js';

class MainBlock extends Component {
    
    render() {
        return ( 
            <div className = 'main'>
                <p>This is online book store app.</p>
                <p className="time">The current time is {new Date().toLocaleTimeString()}</p>
            </div>
        );   
    }
    
}


export default MainBlock;
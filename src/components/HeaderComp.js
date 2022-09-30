import React,{Component} from "react";
import { BrowserRouter } from "react-router-dom";

function HeaderComponent() {
    return(
        <React.Fragment>
            <ul>
                <li>Home</li><li>About us</li>
            </ul>
        </React.Fragment>
    );
}

export default HeaderComponent;
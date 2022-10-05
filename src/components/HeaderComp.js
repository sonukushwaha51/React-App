import React,{Component} from "react";
import { NavLink } from "react-router-dom";
import { Button, Card } from "reactstrap";

function HeaderComponent() {
    return(
        <React.Fragment>
            <Card className="container col-lg-12 col-md-12 m-3 headers">
                <Button><NavLink className="nav-link" to="/home">Home</NavLink></Button>
                <Button>
                    <NavLink className= 'nav-link' to = "/category">Category</NavLink>
                </Button>
                <Button><NavLink className="nav-link" to = "/offers">Offers</NavLink></Button>
                <Button><NavLink className="nav-link" to = "/buying-guides">Buying Guides</NavLink></Button>
                <Button>
                <NavLink className= 'nav-link' to = "/contactus">Contact Us</NavLink>
                </Button>
                
            </Card>
        </React.Fragment>
    );
}

export default HeaderComponent;
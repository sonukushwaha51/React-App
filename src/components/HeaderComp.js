import React,{Component} from "react";
import { BrowserRouter } from "react-router-dom";
import { Button, Card } from "reactstrap";
import bootstrap from "bootstrap";

function HeaderComponent() {
    return(
        <React.Fragment>
            <Card className="container col-lg-12 col-md-12 m-3 headers">
                <Button>Home</Button>
                <Button>Category</Button>
                <Button>Buying Guides</Button>
                <Button>Offers</Button>
                <Button>Contact Us</Button>
                
            </Card>
        </React.Fragment>
    );
}

export default HeaderComponent;
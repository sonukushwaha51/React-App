import React,{Component} from "react";
import { BrowserRouter } from "react-router-dom";
import { Card, Button } from "reactstrap";

function FooterComponent() {
    return(
        <React.Fragment>
            <Card className="container col-lg-12 col-md-12 m-3 footers">
                <Button>Home</Button>
                <Button>Contact Us</Button>
                <Button>Buying Guides</Button>
                <Button>Offers</Button>
            </Card>
        </React.Fragment>
    );
}

export default FooterComponent;
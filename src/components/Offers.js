import React, { useContext } from "react";
import { Button } from "reactstrap";
import myContext from "../context/MyContext";
import FooterComponent from "./FooterComp";
import HeaderComponent from "./HeaderComp";

function Offers(props) {
    const b = useContext(myContext);
    
    return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <HeaderComponent />
                    <div className="container">
                        <div className="row>">
                            <div className="offers-block">
                                <h1>This is offers page.</h1>
                                <Button color="primary" onClick={b.mycall}>{b.darkMode.text}</Button>
                            </div>
                        </div>
                    </div>
                    <FooterComponent />
                </div>
            </div>
            
        </React.Fragment>
    );
}

export default Offers;
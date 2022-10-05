import React from "react";
import FooterComponent from "./FooterComp";
import HeaderComponent from "./HeaderComp";

function Category() {
    return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                <HeaderComponent></HeaderComponent>
                    <div className="container">
                        <div className="row">
                            <div className="categor-main-block">
                                This is category page
                            </div>
                        </div>
                    </div>
                    <FooterComponent></FooterComponent>   
                </div>
            </div>
            
        </React.Fragment>
    );
}

export default Category;
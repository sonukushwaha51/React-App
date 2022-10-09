import React from "react";
import BestSellers from "./BestSellers";
import { EditorialBanner } from "./EditorialBanner";
import FooterComponent from "./FooterComp";
import HeaderComponent from "./HeaderComp";

function Category() {
    return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                <HeaderComponent></HeaderComponent>
                    <EditorialBanner></EditorialBanner>
                    <BestSellers />
                    <FooterComponent></FooterComponent>   
                </div>
            </div>
            
        </React.Fragment>
    );
}

export default Category;
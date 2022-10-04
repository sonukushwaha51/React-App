import React from "react";
import FooterComponent from "./FooterComp";
import HeaderComponent from "./HeaderComp";

function Category() {
    return(
        <React.Fragment>
            <HeaderComponent></HeaderComponent>
            <div>This is category page</div>
            <FooterComponent></FooterComponent>
        </React.Fragment>
    );
}

export default Category;
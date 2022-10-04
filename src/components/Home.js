import React,{Component} from "react";
import { NavLink, Routes,Route, Navigate, BrowserRouter} from "react-router-dom";
import HeaderComponent from "./HeaderComp";
import MainBlock from "./main-block-homepage";
import FooterComponent from "./FooterComp";
import Contact from "./Contact";
import Category from "./Category";

function Home() {
    return(
        
        <React.Fragment>
                        
            <div className="container">
                <div className="row">
                    <HeaderComponent></HeaderComponent>
                    <MainBlock></MainBlock>
                    <FooterComponent></FooterComponent>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Home;

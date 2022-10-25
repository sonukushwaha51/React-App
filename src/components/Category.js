import React, { useState, useCallback} from "react";
import BestSellers from "./BestSellers";
import { EditorialBanner } from "./EditorialBanner";
import FooterComponent from "./FooterComp";
import HeaderComponent from "./HeaderComp";

function Category(props) {
    const [names, setNames] = useState({name : "Sonu Kushwaha", st : true});
    // const [idtest,setIdtest] = useState({id : useId(), pr : "ABC"})
    // console.log(idtest)
 //   const [timer, setTimer] = useState({value : 19})
 function handlelcick()  {
    if(names.st === true) { setNames({name : "Sonu Kushwha",st : !names.st}) } else { setNames({name: "Props removed", st : !names.st}) }
    console.log(names)
    //incrementtimer();
    // return names;
}
    const myCallback = useCallback(() => {handlelcick()},[handlelcick])
    // function incrementtimer() {
    //     setTimer({value : timer.value + 1})
    //     console.log(timer.value)
    // }
    // setInterval(() => {
    //     incrementtimer();
    // } ,5000)
    return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                <HeaderComponent></HeaderComponent>
                    <EditorialBanner></EditorialBanner>
                    <BestSellers names = {names} myCallback = {myCallback} />
                    <FooterComponent></FooterComponent>   
                </div>
            </div>
            
        </React.Fragment>
    );
}

export default  Category;
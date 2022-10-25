import React, {  useCallback, useState } from "react";
import MyContext from "./MyContext";

function MyState(props) {
    const [timer, setTimer] = useState(19)
     function handleclick() {
        incrementtimer();
    }

    const[darkMode, setDarkMode] = useState({
        text: "Enable Dark Mode",
        status: "Light"
    })
    function toggleDark() {
        if(darkMode.status === "Light") {
            setDarkMode({
                text : "Enable Light mode",
                status: "Dark"
            })
            document.getElementsByTagName('body')[0].style.backgroundColor = 'black'
        } else {
            setDarkMode({
                text : "Enable Dark mode",
                status: "Light"
            })
            document.getElementsByTagName('body')[0].style.backgroundColor = 'white'
        }
    }
    const mycall = useCallback(() => {toggleDark()},[toggleDark])

    function incrementtimer() {
        setTimer(timer+1)
    }
    return(
        <React.Fragment>
        <MyContext.Provider value = {{timer, handleclick, darkMode, mycall}}>
            {props.children}
        </MyContext.Provider>
        </React.Fragment>
    )
}

export default MyState;
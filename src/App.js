import React from "react"
import NavBar from "./components/NavBar"
import Main from "./components/Main"
import Footer from "./components/Footer"
import Background from "./assets/images/trianglify.png"

const background = {
    width: "100%",
    height: "auto",
    backgroundImage: "url(" + Background + ")",
    backgroundAttachment : "fixed"


}

const App = () => {
  
    return(
        <div style = {background}>
            <NavBar />
            <Main />
            <Footer />
        </div>
    )
};

export default App;
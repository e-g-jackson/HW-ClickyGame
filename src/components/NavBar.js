import React from "react";

const NavBar = () =>{
    return (
        <nav className = "jumbotron bg-dark text-white">
            <div className = "float-left">
                <h1>The Clicky Game!</h1>
            </div>
            <div className = "float-right">
                <a href = "http://www.google.com">button 1</a>|
                <a href = "http://www.google.com">button 2</a>|
                <a href = "http://www.google.com">button 3</a>
            </div>
        </nav>
    )
}

export default NavBar
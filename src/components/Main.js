import React, {Component} from "react";
import Cell from "./Cell";
import pics from "../props/info";
import click from "../assets/js/logic"

import "../assets/css/style.css"

class Main extends Component {
    
    state = {
        score: click.score,
        array: pics
    };

    componentWillMount = () => {
        this.randomizer()
        console.log("this.state.array = ")
        console.log(this.state.array)
    }

    handleClick = (e) => {
        e.preventDefault();
        console.log("clickity clacked!")
        this.randomizer();
    }
    
    randomizer = () =>{
        //randomizer
        console.log("RANDOMIZE")
        var pictures = this.state.array
        var indexNumber = pictures.length;
        var tempVal, randIndex;

        while (0 !== indexNumber) {
            randIndex = Math.floor(Math.random() * indexNumber);
            indexNumber -= 1;
    
            tempVal = pictures[indexNumber];
            pictures[indexNumber] = pictures[randIndex];
            pictures[randIndex] = tempVal;
        }
        
        this.setState({
            score: click.score,
            array: pictures
        })
    };
    
    render(){
        let formInfo = this.state.array.map(
            images => <Cell 
                key = {JSON.stringify(images)}
                data = {images}
                onClick = {(event) => this.handleClick(event)}
            />
        );
        console.log(click.score)

        return(
        <div className = "container">
            <div className = "row py-3">
                <div className = "text-left text-white col-6"><em>Try and click all 12 images without repeating yourself!</em></div>
                <div className = "text-right text-white lead col-6">Score : {this.state.score}</div>
            </div>
            <hr className = "border-white"/>
            <div className = "row">
                {formInfo}
            </div>
        </div>
        )
    }
}

export default Main;
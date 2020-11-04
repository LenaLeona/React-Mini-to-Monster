import React from 'react';
import './index.css';

export default class Squares extends React.Component {
    constructor(props) {
        super();
        this.state = {
            color: "white",
            position: props.pos
        }
    }

    render() {
        return (
            <div className="square" id={this.state.position} onClick={() => this.changeColor()}>
            </div>
        )
    }

    changeColor() {
        let cur = document.getElementById(this.state.position);
        if (this.state.color === "white") {
            this.props.clickedFunc("black");
            cur.style.backgroundColor = "black";
            this.setState({
                color: "black"
            })
        } else {
            this.props.clickedFunc("white");
            cur.style.backgroundColor = "white";
            this.setState({
                color: "white"
            })
        }
    }
}
import React from 'react';
import Squares from './Squares';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            num_black: 0
        }
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.num_black}</h1>
                <div className="wrapper">
                    <div><Squares pos="one" clickedFunc={(color) => this.cntBlack(color)}></Squares></div>
                    <div><Squares pos="two" clickedFunc={(color) => this.cntBlack(color)}></Squares></div>
                    <div><Squares pos="three" clickedFunc={(color) => this.cntBlack(color)}></Squares></div>
                    <div><Squares pos="four" clickedFunc={(color) => this.cntBlack(color)}></Squares></div>
                </div>
            </div>
        )
    }

    cntBlack(color) {
        let update;
        if (color === "black") {
            update = this.state.num_black + 1;
        } else if (color === "white") {
            update = this.state.num_black - 1;
        }
        this.setState({
            num_black: update
        })
    }
}
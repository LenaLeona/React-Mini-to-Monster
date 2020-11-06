import React from 'react';

//Example 1: change state by onClick()

export default class HideableText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isHidden : false,
        }
    }

    toggleIsHidden() {
        this.setState((curState) => ({
            isHidden: !curState.isHidden,
        }));
    }

    render() {
        return (
            <div>
                <button onClick={() => this.toggleIsHidden()}>Toggle</button>
                {this.state.isHidden && this.props.text}
            </div>
        );
    }
}
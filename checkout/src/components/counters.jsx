import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
//destructing arg: to pick the properties of the prop object
      const { onReset, counters, onDelete, onIncrement, onDecrement } = this.props;

    return (
      <div>
        <button
        //   onClick={this.props.onReset} replaced coz line 7
          onClick={onReset}
          className="btn btn-success btn-sm m-2"
        >
          Reset
        </button>
        {counters.map((counter) => (
          <Counter // pass props to children compo - counter
            key={counter.id} 
            // onDelete={this.props.onDelete} replaced coz line 7
            // onIncrement={this.props.onIncrement}
            onDelete={onDelete} 
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            // value={counter.value}
            // id={counter.id}
            counter={counter}
            // value and id will be properties of the props object in counters class 
            // <h4>Counter #{counter.id}</h4> //code align with pass children 
          />
        ))}
      </div>
    );
  }
}

export default Counters;

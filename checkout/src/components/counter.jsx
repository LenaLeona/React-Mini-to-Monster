import React, { Component } from "react";

class Counter extends Component {
  //(local) state is js property/attribute: contains all data the compos in this class needs
  //use props to get value passed from Counters
//   state = {
//     value: this.props.counter.value
//   };

  //js property/attributes
  //   styles = {
  //       fontSize: 50,
  //       fontWeight: "bold"
  //   };

  //   // build event handler
  //   constructor() {
  //       super();
  //       this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  // handle events using arrow func (without param), related to local state
//   handleIncrement = () => {
//     this.setState({ value: this.state.value + 1 });
//   };

  // handle events using arrow func (with param i.e. event argument)
  //   handleIncrement = product => {
  //     this.setState({ count: this.state.count + 1 });
  //   };

  //Compos自带func
  render() {
    return (
      <div>
        {/* set attributes : e.g. className*/}
        {/* <span>{ 2 + 2 }</span>  ok*/}
        {/* <span>{ count }</span>  ok*/}
        {/* <span style={this.styles} className="badge badge-primary m-2">{this.formatCount()}</span>  //ok*/}
        {/* use inline style also ok */}
        {/* <span style={{ fontSize: 30 }} className="badge badge-primary m-2">{this.formatCount()}</span> */}
        {/* <span className="badge badge-primary m-2">{this.formatCount()}</span> //ok but not dynamic*/}
        {/* {this.props.children} //passing children */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-primary btn-sm m-2"
        >
          Increment
        </button>

        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Decrement
        </button>

        <button
        //   onClick={this.props.onDelete}
          onClick={()=> this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  // render class dynamically
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    // classes += this.state.value === 0 ? "warning" : "primary"; //local state
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    // const { value: count } = this.state; //local state
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
    // return count === 0 ? <h1>Zero</h1> : count; //ok
  }
}

export default Counter;

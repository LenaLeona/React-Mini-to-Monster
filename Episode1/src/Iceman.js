import React from 'react';
import './App.css'

function Flavor(props){

    return(
        <div className="icecream">
        <h3>{props.name}</h3>
        <p>{props.message}</p>
        <p>Number of likes: {props.num}</p>
        </div>
    );
}

export default Flavor;
import React, { Component } from "react";
import "./App.css";
import HideableText from "./HideableText";
import AutoCompleteText from "./AutoCompleteText";
import nationalParks from './nationalParks';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>Showcase 1 : hide text</p>
        <div className="App-content">
          <HideableText text="Dynamic Text!" />
        </div>

        <div className="App-Component">
          <div className="App-Component">
          <p>Showcase 2: search bar</p>
          <p>search national parks in the States</p>
            <AutoCompleteText items={nationalParks} />
            <br />
            <p>search Aesop ingredients</p>
            <AutoCompleteText items={['Red ConvolverNode',
            'Marshmallow ShadowRoot',
            'Lemon Balm',
            'Calendula']} />
            
          </div>
        </div>
      </div>
    );
  }
}

export default App;

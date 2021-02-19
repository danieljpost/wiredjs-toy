import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  let textInput = React.createRef();

  function handleClick() {
    window.alert(`Hello ${textInput.current.value}!`);
  }

  return (
    <main>
      <wired-card elevation="5">
        <h1>wired-elements demo</h1>
      </wired-card>

      <section>
        <wired-input placeholder="your name" ref={textInput} />
        <wired-button elevation="2" onClick={handleClick}>
          Submit
        </wired-button>
        <hr />
        <wired-radio-group>
          <wired-label>ya</wired-label>
          <wired-radio value="bob" label="ya" />
          <br />
          <wired-label>nah</wired-label>
          <wired-radio value="bob" />
        </wired-radio-group>
        <hr />
        <wired-label>how much?</wired-label>
        <wired-slider knobradius="15" value="10" min="5" max="15">
          test
        </wired-slider>
      </section>
    </main>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

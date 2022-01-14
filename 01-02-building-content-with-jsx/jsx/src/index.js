// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
const buttonText = { text: 'Click Me!' };
const labelText = 'Enter name:';

function getTime() {
  return (new Date()).toLocaleTimeString();
}

const App = () => {
  return (
    // <div>
    //   <label className="label" htmlFor="name">{labelText}</label>
    //   <input id="name" type="text" />
    //   <button style={{ backgroundColor: 'blue', color: 'white' }}>{buttonText.text}</button>
    // </div>

    <div>
      <div>Current Time:</div>
      <h3>{getTime()}</h3>
    </div>
  );
};

//  Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));
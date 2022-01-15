import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     (position) => console.log(position),
//     (err) => console.log(err)
//   );
//   return <div>Latitude: </div>;
// };

class App extends React.Component {
  // Constructor is not specific to react but rather the javascript language.
  // Called first when component is initialized.

  // Not required to define the contructor function, we can optionally
  // define it if we want to do some initial setup when our component
  // is first created. If we do define a constructor function, then we 
  // have to make sure that we call the 'super()' function inside of it.
  // constructor(props) {
  //   // super must be called. Super is a reference to the parents constructor function.
  //   super(props);
    
  //   // Initialize state object and assign property to it.
  //   // THIS IS THE ONLY TIME we do direct assignment to this.state.
  //   this.state = { lat: null, errorMessage: '' };
  // }

  state = { lat: null, errorMessage: '' };
  
  // Called one time when the component is initialized.
  // Best practice to put all initial data loading code in this function.
  componentDidMount() {
    // console.log('Component was rendered to the screen.');

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // Call setState! Comes from React.Component, used to update state.
        this.setState({ lat: position.coords.latitude });

        // Incorrect!!!
        // this.state.lat = position.coords.latitude;
      },
      (err) => {
        // NOT required to update all properties of state. 
        // When calling setState we are only ever adding or updating properties,
        // never removing or deleting properties.
        this.setState({ errorMessage: err.message });
      }
    );
  }
  
  // Gets called whenever there is an update to the component. 
  // Good place to do more data-loading when state/props change.
  componentDidUpdate() {
    // console.log('Component was just updated - it rerendered.');
  }
  
  // Remove logic from render() funciton and move to custom helper function (renderContent()). 
  renderContent() {
    // If errorMessage is true, and we do not have a latitude, display error message.
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    
    // If we do not have an error message, and latitude is true, display latitude.
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />
    }
    
    // If past both conditional checks, then display loading, 
    // neither errorMessage or latitude are true.
    return <Spinner message="Please accept location request." />;
  }

  // Must define render!!
  render() {
    return (
      <div className="app-container">
        {this.renderContent()}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
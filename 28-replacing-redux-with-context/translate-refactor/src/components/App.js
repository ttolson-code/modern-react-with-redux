import React from'react';
import UserCreate from './UserCreate';
import LanguageSelector from './LanguageSelector';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class App extends React.Component {
  state = { language: 'english' };

  onLanguageChange = (language) => {
    this.setState({ language });
  };

  render() {
    // Provider component is not the same 'provider' used by react-redux.

    // UserCreate shows the Button and Field components,
    // so UserCreate needs to know the information out of the
    // context object.

    // When we render LanguageContext.provider you must assign a 'value' prop
    // Prop name of 'value' is special to a provider component.

    // Value that is passed is pushed into the context object.
    return (
      <div className="ui container">
        <LanguageSelector onLanguageChange={this.onLanguageChange} />
        <LanguageContext.Provider value={this.state.language}>
          <ColorContext.Provider value="red">
            <UserCreate />
          </ColorContext.Provider>
        </LanguageContext.Provider>
      </div>
    );
  }
}

export default App;

// App Workflow:
// Application loads up in the browser
// We create a context object with a default value of 'english'
// App component gets rendered, creates a Provider that wraps UserCreate
// Provider updates the value of the context object to 'this.state.language;
// Button and Field reach into context object, see the balue from 'this.state.language;
// Button and Field render appropriate text to the screen.
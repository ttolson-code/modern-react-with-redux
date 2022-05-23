import React from'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';

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
        <div>
          Select a Language:
          <i className="flag us" onClick={() => this.onLanguageChange('english')} />
          <i className="flag nl" onClick={() => this.onLanguageChange('dutch')} />
        </div>
        <LanguageContext.Provider value={this.state.language}>
          <UserCreate />
        </LanguageContext.Provider>
      </div>
    );
  }
}

export default App;
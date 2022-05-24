import React from 'react';

// Create context object.

// Can pass data into the object by setting up a default value, 
// we can create a default value by passing it directly into the create
// context call. 

// This will indicate to the Field and Button components that by default,
// the selected language is English.

// The default value for the LanguageContext object is 'English'.

const Context = React.createContext('english');

// Export LanguageStore as 'named' export. 
// When we try to import we will have to use curly braces.
export class LanguageStore extends React.Component {
  state = { language: 'english'};

  onLanguageChange = (language) => {
    this.setState({ language });
  }

  render() {
    return (
      <Context.Provider value={{ ...this.state, onLanguageChange: this.onLanguageChange }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
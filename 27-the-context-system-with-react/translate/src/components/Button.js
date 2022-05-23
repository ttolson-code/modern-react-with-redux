import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Button extends React.Component {
  // In order to hook up a context object to a class components, 
  // call 'static contextType'.

  // contextType is a special property name inside of React.
  // Must use this name for context to work.

  // 'static contextType' adds a property to the class itself.
  static contextType = LanguageContext;

  
  render() {
    const text = this.context === 'english' ? 'Submit' : 'Voorleggen';

    return <button className="ui button primary">{text}</button>
  }
}
// Below is same as using 'static contextType'
// Button.contextType = LanguageContext;

// Can write out either 'static contextType' inside of the class declaration
// or after creating the class by writing out the class name and 
// attaching property.

export default Button;
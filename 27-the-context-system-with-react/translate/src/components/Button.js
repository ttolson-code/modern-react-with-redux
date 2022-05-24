import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
  // In order to hook up a context object to a class components, 
  // call 'static contextType'.

  // contextType is a special property name inside of React.
  // Must use this name for context to work.

  // 'static contextType' adds a property to the class itself.
  // static contextType = LanguageContext;

  // When using a consumer you do not have to specify
  // a contextType. contextType is only required when we want 
  // to get data assigned to this.context property.

  // Declare helper function to clean up code.
  renderSubmit(value) {
    return value === 'english' ? 'Submit' : 'Voorleggen';
  }

  renderButton(color) {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {(value) => this.renderSubmit(value)}
        </LanguageContext.Consumer>
      </button>
    );
  }

  render() {
    // Commented below line to refactor to use Consumer component instead of this.context.
    // const text = this.context === 'english' ? 'Submit' : 'Voorleggen';

    // Whenever a Consumer component is used, we always provide
    // one argument, or child that we pass into the consumer.
    // This one child is always going to be a function. We are providing
    // a function as a child to a React component. That component is going to take
    // the function and automatically invoke it. The 'value' is going to be
    // whatever is currently inside of the context pipe.

    return (
      <ColorContext.Consumer>
      {(color) => this.renderButton(color)}
      </ColorContext.Consumer>
    );
  }
}
// Below is same as using 'static contextType'
// Button.contextType = LanguageContext;

// Can write out either 'static contextType' inside of the class declaration
// or after creating the class by writing out the class name and 
// attaching property.

export default Button;
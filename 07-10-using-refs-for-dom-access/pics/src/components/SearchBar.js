import React from 'react';

class SearchBar extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.onFormSubmit = this.onFormSubmit.bind(this);
  // }
  
  state = { text: '' };

  // Creat event handler function that is called everytime 
  // the user inputs text into the search bar.
  // onInputChange(event) {
  //   console.log(event.target.value);
  // }
  
  // Arrow functions automatically bind the
  // value of 'this' for all the code inside of the function.
  // If we do no use an arrow function that we must define a constructor
  // function and bind the onFormSubmit function.
  // We could alternatively add an arrow function to the onSubmit callback function.
  onFormSubmit = (event)  => {
    // Prevent page from refreshing on submit.
    event.preventDefault();
    
    this.props.onSubmit(this.state.text);
  }

  // Example without using arrow function:
  // onFormSubmit(event) {
  //   event.preventDefault();
  //   console.log(this.state.text);
  // }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search:</label>
            {/* Do no use () on this.onInputChange, 
            need to pass reference to the function to be called sometime in the future. */}
            <input 
              type="text"
              value={this.state.text} 
              // onChange={this.onInputChange}
              onChange={(event) => this.setState({ text: event.target.value })} 
            />
          </div>
        </form>
      </div>
    ); 
  }
}

export default SearchBar;

// onClick -> User clicks something.
// onChange -> User changes text in an input.
// onSubmit -> User submits a form.

// Controlled Component Flow:
// 1. User types in input field
// 2. onChange callback gets invoked
// 3. setState gets called and passed new value
// 4. Component rerenders
// 5. Input is told what its value is (coming from state)
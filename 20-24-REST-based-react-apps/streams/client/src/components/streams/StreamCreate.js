import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createStream } from '../../actions';


/* Whenever a user tries to submit the form, we're going to validate the inputs.
If the inputs are valid, we will call onSubmit function which calls our action creator createStream.
That's going to run the createStream 'action'.
Then we're going to attempt to make a request to our API server and create a new stream.
We know that this is going to create a stream because we are following RESTful conventions.
We are making a POST request to /streams. */

class StreamCreate extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }
  
  // 'meta' argument comes from reduxForms
  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : '' }`
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} />
        {this.renderError(meta)}
      </div>
    );
  }
  
  // When a user submits our form from the stream create component, 
  // we attempt to make a request to our API server. 
  // We're going to first define an action creator.
  // Then wire up that action creator to our component through the Connect Helper.
  // We're going to call the action creator from onSubmit function.
  // The action creator is going to use Axios to make a network request over to our API.
  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  }

  render() {
    return (
      // this.props.handleSubmit() is callback function provided by redux-forms
      // pass our onSubmit method as argument
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
        <Field name="title" component={this.renderInput} label="Enter Title"/>
        <Field name="description" component={this.renderInput} label="Enter Description" />
        <button type="submit" className="ui button primary">Submit</button>
      </form>
    );
  }
};

// Error object property values must match form field 'name'
const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    errors.title = 'You must enter a title';
  }

  if (!formValues.description) {
    errors.description = 'You must enter a description'
  }

  return errors;
};

// Form wrapped version of our StreamCreate component.
const formWrapped = reduxForm({
  form: 'streamCreate',
  validate
})(StreamCreate);

export default connect(null, { createStream })(formWrapped);
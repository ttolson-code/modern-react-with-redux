import React from 'react';
import { Form, Field } from 'react-final-form';

// Whenever a user submits the form, we're going to validate the inputs.
// If the inputs are valid, we will call the onSubmit helper function 
// that was passed by 'StreamCreate' or 'StreamEdit'. That's going to run the 
// createStream or editStream 'action' which will attempt to make a request to 
// our API server and create a new stream or edit an existing stream.

const StreamForm = (props) => {
  const renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  };
 
  const renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {renderError(meta)}
      </div>
    );
  };
 
  const onSubmit = (formValues) => {
    props.onSubmit(formValues);
  };
 
  return (
    <Form
      initialValues={props.initialValues}
      onSubmit={onSubmit}
      validate={(formValues) => {
        const errors = {};
 
        if (!formValues.title) {
          errors.title = "You must enter a title";
        }
 
        if (!formValues.description) {
          errors.description = "You must enter a description";
        }
 
        return errors;
      }}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className="ui form error">
          <Field name="title" component={renderInput} label="Enter Title" />
          <Field
            name="description"
            component={renderInput}
            label="Enter Description"
          />
          <button className="ui button primary">Submit</button>
        </form>
      )}
    />
  );
};
 
export default StreamForm;

// class StreamForm extends React.Component {
//   renderError({ error, touched }) {
//     if (touched && error) {
//       return (
//         <div className="ui error message">
//           <div className="header">{error}</div>
//         </div>
//       );
//     }
//   }
  
  // 'meta' argument comes from reduxForms.
  // renderInput = ({ input, label, meta }) => {
  //   const className = `field ${meta.error && meta.touched ? 'error' : '' }`
  //   return (
  //     <div className={className}>
  //       <label>{label}</label>
  //       <input {...input} />
  //       {this.renderError(meta)}
  //     </div>
  //   );
  // }
  
  // onFormSubmit = (formValues) => {
  //   this.props.onSubmit(formValues);
  // }

  // render() {
  //   return (
      // this.props.handleSubmit() is a callback function provided by redux-forms
      // pass our onSubmit method as argument
//       <form onSubmit={this.props.handleSubmit(this.onFormSubmit)} className="ui form error">
//         <Field name="title" component={this.renderInput} label="Enter Title"/>
//         <Field name="description" component={this.renderInput} label="Enter Description" />
//         <button type="submit" className="ui button primary">Submit</button>
//       </form>
//     );
//   }
// };

// Error object property values must match form field 'name'
// const validate = (formValues) => {
//   const errors = {};

//   if (!formValues.title) {
//     errors.title = 'You must enter a title';
//   }

//   if (!formValues.description) {
//     errors.description = 'You must enter a description'
//   }

//   return errors;
// };

// export default reduxForm({
//   form: 'streamForm',
//   validate
// })(StreamForm);

// Common alternative way to 'connect' an action creator and redux form to the same component.
// Form wrapped version of our StreamCreate component.
// const formWrapped = reduxForm({
//   form: 'streamForm',
//   validate
// })(StreamCreate);

// export default connect(null)(formWrapped);
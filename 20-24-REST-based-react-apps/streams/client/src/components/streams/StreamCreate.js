import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from './StreamForm';

/* Whenever a user tries to submit the form, we're going to validate the inputs.
If the inputs are valid, we will call onSubmit function which calls our action creator createStream.
That's going to run the createStream 'action'.
Then we're going to attempt to make a request to our API server and create a new stream.
We know that this is going to create a stream because we are following RESTful conventions.
We are making a POST request to /streams. */

class StreamCreate extends React.Component {
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
      <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
};

export default connect(null, { createStream })(StreamCreate);
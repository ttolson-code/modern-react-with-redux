import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  
  // 'onSubmit' callback function to be passed to StreamForm via props.
  onSubmit = (formValues) => {
    this.props.editStream(this.props.match.params.id, formValues);
  };

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    
    const { title, description } = this.props.stream;

    // 'initialValues' is a special prop that gets provided 
    // to ReduxForm and then passed to the StreamForm component.

    // We are passing an initial values prop down to StreamForm.
    // StreamForm is technically rendered or wrapped by ReduxForm.
    // ReduxForm sees the prop of 'initialValues',
    // it sees that it is an object with a title and description property.
    // When StreamForm is rendered there is a title and description field, 
    // so the appropriate initial values are used as the inital values for
    // the two fields.
    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm 
          initialValues={{ title, description }}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

// Anytime mapStateToProps is called two arguments are passed.
// The first is the state object out of the redux store.
// The second is the ownProps objet that is a reference to 
// the props object that shows up inside of our component.
const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);
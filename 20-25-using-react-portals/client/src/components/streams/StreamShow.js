import React from 'react';
import flv from 'flv.js';
import { connect } from 'react-redux'
import { fetchStream } from '../../actions';

// When our component first renders, attempt to build the player.
// If the component fetches the stream successfully at some point in the future
// and the component re-enders, componentDidUpdate() will be called 
// and we will attempt to call buildPlayer there as well. So essentially, 
// at any point that this component gets rendered, either the initial render 
// or any follow-up renders, we're always going to attempt to build the player. 
// But if we've already built the player or if we do not have the stream, 
// then we're not going to try to build it.

class StreamShow extends React.Component {
  constructor(props) {
    super(props);

    this.videoRef = React.createRef();
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    this.props.fetchStream(id);
    this.buildPlayer();
  }

  componentDidUpdate() {
    this.buildPlayer();
  }

  componentWillUnmount() {
    this.player.destroy();
  }

  buildPlayer() {
    if (this.player || !this.props.stream) {
      return;
    }

    const { id } = this.props.match.params;

    this.player = flv.createPlayer({
      type: 'flv',
      url: `http://localhost:8000/live/${id}.flv`
    });

    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();
  }

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }

    const { title, description } = this.props.stream;

    return (
      <div>
        <video ref={this.videoRef} style={{ width: '75%' }} controls />
        <h1>{title}</h1>
        <h5>{description}</h5>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchStream })(StreamShow);
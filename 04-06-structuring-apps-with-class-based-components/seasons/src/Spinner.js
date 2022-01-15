import React from 'react';

const Spinner = (props) => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">
        {props.message}
      </div>
    </div>
  );
};

// Sets default properties if none are passed in.
Spinner.defaultProps = {
  message: 'Loading...'
};

export default Spinner;
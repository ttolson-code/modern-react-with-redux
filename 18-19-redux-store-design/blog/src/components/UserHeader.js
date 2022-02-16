import React from 'react';
import { connect } from 'react-redux';
class UserHeader extends React.Component {
  render() {
    const { user } = this.props;
    
    if (!user) {
      return null;
    }

    return <div className="header">{user.name}</div>;
  }
}

// You can extract anything that is going to do some computation to state, 
// and the props coming into our component to the mapStateToProps function. 
const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find(user => user.id === ownProps.userId) };
};

export default connect(mapStateToProps)(UserHeader);
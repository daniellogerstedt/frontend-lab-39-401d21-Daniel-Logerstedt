import React from 'react';
import {tokenDelete} from '../../action/auth-actions';
import {connect} from 'react-redux';


class Dashboard extends React.Component {
  render () {
    return(
      <React.Fragment>
        <div>Welcome To The Dashboard</div>
        <button onClick={this.props.logout}>Signout</button>
      </React.Fragment>
    );
  }
}

let mapStateToProps = () => ({});
let mapDispatchToProps = dispatch => ({
  logout: () => dispatch(tokenDelete()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
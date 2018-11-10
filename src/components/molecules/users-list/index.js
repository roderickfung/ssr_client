import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsers } from 'src/actions';

class UsersList extends Component {
  // state = {
  //   mounted: false
  // };

  componentDidMount() {
    this.props.getUsers();
    // this.setState({ mounted: true });
  }

  renderUsers(users) {
    return users && users.map(user => <li key={user.id}>{user.name}</li>);
  }

  render() {
    return (
      <div>
        <div> List </div>
        <ul>{this.renderUsers(this.props.users)}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users
});

export default connect(
  mapStateToProps,
  { getUsers }
)(UsersList);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose as comp } from 'ramda';
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
    const { users } = this.props;

    return (
      <div>
        <div> List </div>
        <ul>{this.renderUsers(users)}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users
});

const mapDispatchToProps = dispatch => ({
  getUsers: comp(dispatch, getUsers)
});

const loadData = () => {
  console.log('load data attempt');
};

export { loadData };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersList);

import React from 'react';
import _ from 'lodash';
import EachUser from './EachUser';

export default class UserList extends React.Component {
  renderUsers() {
    // const props = _.omit(this.props, 'todos');
    return _.map(this.props.users, (user,index) => <EachUser id={index+1} name={user.name} email={user.email} key={index} />);
  }

  render() {
    return (
      <div>
        {this.renderUsers()}
      </div>
    );
  }
}

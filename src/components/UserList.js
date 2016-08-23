import React from 'react';
import _ from 'lodash';
import EachUser from './EachUser';

export default class UserList extends React.Component {
  delUser (id) {
    console.log(id);
     this.props.deleteUser(id);
  }

  renderUsers() {
    return _.map(this.props.users, (user,index) => <EachUser id={index+1} name={user.name} email={user.email}
                                                    deleteUser={this.delUser.bind(this)} key={index} />);
  }

  render() {
    return (
      <div>
        {this.renderUsers()}
      </div>
    );
  }
}

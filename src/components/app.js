import React from 'react';
import Navbar from './Navbar';
import AddUserForm from './AddUserForm';
import ListHeaders from './ListHeaders';
import UserList from './UserList';
import RenderForm from './RenderForm';

const users = [
    {
        "id": "1",
        "name": "John Smith",
        "email": "john.smith@email.com"
    },
    {
        "id": "2",
        "name": "Albert Einstein",
        "email": "albert.einstein@email.com"
    },
    {
        "id": "3",
        "name": "Mark Zuckerberg",
        "email": "mark.zuckerberg@email.com"
    },
    {
        "id": "4",
        "name": "Steve Jobs",
        "email": "steve.jobs@email.com"
    },
    {
        "id": "5",
        "name": "Bill Gates",
        "email": "bill.gates@email.com"
    },
    {
        "id": "6",
        "name": "James Hetfield",
        "email": "james.hetfield@email.com"
    },
    {
        "id": "7",
        "name": "Warren Buffet",
        "email": "warren.buffet@email.com"
    },
    {
        "id": "8",
        "name": "Neil DeGrasse Tyson",
        "email": "neil.tyson@email.com"
    },
    {
        "id": "9",
        "name": "Christopher Hitchens",
        "email": "chris.hitch@email.com"
    }
];

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users,
      showForm: false,
      error: false
    };
  }

  addUserButtonClick () {
    this.setState({ showForm: true })
  }

  addUser (name, email) {
    this.state.users.unshift({
      name,
      email
    });
    this.setState({ users: this.state.users, showForm: false });
  }

  validateEmail (email) {
      var emailPattern = /^([a-zA-Z0-9])+([a-zA-Z0-9._%+-])+@([a-zA-Z0-9_.-])+\.(([a-zA-Z]){2,6})$/;
      return emailPattern.test(email);
  }

  validateName (name) {
      var namePattern = /^([a-zA-Z ]){1,20}$/;
      return namePattern.test(name);
  }

  renderError() {
    this.setState({ error: true });
  }

  render() {
    return (
      <div>
      <Navbar />
      <div className="row">
        <div className="col-md-10 col-md-offset-1">
          <div className="main-container">
            <AddUserForm addUser={this.addUser.bind(this)} users={this.state.users} AddUserButtonClick={this.addUserButtonClick.bind(this)}
            showForm={this.state.showForm} validateName={this.validateName.bind(this)} validateEmail={this.validateEmail.bind(this)} renderError={this.renderError}  />
            <ListHeaders />
            <UserList users={this.state.users} />
          </div>
        </div>
      </div>

      </div>
    );
  }
}

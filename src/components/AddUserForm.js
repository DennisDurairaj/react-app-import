import React from 'react';
import RenderForm from './RenderForm';

export default class AddUserForm extends React.Component {
  constructor(props) {
    super(props);
    // this.resetMessage = this.resetMessage.bind(this);

    this.state = {
      error: null,
      addedUser: false,
      showReset: false
    };
  }

  successMessage() {
    if(this.state.addedUser)
    return (
      <span><i className="ion-checkmark success-glyph"></i><b> Successfully added user!</b></span>
    )
  }

  limitMessage() {
    if(this.props.users.length == 10)
    return (
      <span><span className="glyphicon glyphicon-exclamation-sign warn-glyph"></span><b> Cannot add more users, limit reached</b></span>
    )
  }

  resetMessage(e) {
    if(e.target.value != '') {
      this.setState({ showReset: true });
    }
    else {
      this.setState({ showReset: false});
    }
  }

  renderAddUserButton () {
    if(!this.props.showForm) {
      return (
        <span>
        <button onClick={this.props.AddUserButtonClick.bind(this)} disabled={this.props.users.length == 10} className="btn add-button"><i className="ion-plus-circled plus-sign"></i><span className="move-left"> Add User</span></button>
        {this.successMessage()}
        {this.limitMessage()}
        </span>
      );
    }
  }

  renderForm () {
    if(this.props.showForm) {
      return (
        <form onSubmit={this.handleSubmit.bind(this)} className="form-inline" name="userForm">
            <input onChange={this.resetMessage.bind(this)} autoFocus className='form-control input-spacing' type="text" name="name" placeholder="Name" ref="inputName"/>
            <input onChange={this.resetMessage.bind(this)} className='form-control input-spacing' type="text" name="email" placeholder="Email" ref="inputEmail" />
            <button className="btn submit-button"><span>Submit</span></button>
            {this.renderError()}
            {this.state.showReset ? <a href="#" className='reset-form' onClick={this.resetForm}>Reset fields</a> : null}
        </form>
      )
    }
  }

  handleSubmit (e) {
    e.preventDefault();
    const inputName = this.refs.inputName;
    const inputEmail = this.refs.inputEmail;
    var nameVal = inputName.value;
    var emailVal = inputEmail.value;
    const validateUser = this.validateUser(nameVal, emailVal);

    if (validateUser) {
      this.setState({ error: validateUser, addedUser: false });
      return;
    }
    this.setState({ error: null, addedUser: true });
    this.props.addUser(nameVal, emailVal);
    nameVal = '';
    emailVal = '';

  }

  renderError () {
    if (!this.state.error) {
      return null;
    }

    return <span className='error-message'><span className="glyphicon glyphicon-exclamation-sign"></span> {this.state.error}</span>
  }

  validateEmail (email) {
      const emailPattern = /^([a-zA-Z0-9])+([a-zA-Z0-9._%+-])+@([a-zA-Z0-9_.-])+\.(([a-zA-Z]){2,6})$/;
      return emailPattern.test(email);
  }

  validateName (name) {
      const namePattern = /^([a-zA-Z ]){1,20}$/;
      return namePattern.test(name);
  }

  validateUser(name, email) {
    const currentUserList = this.props.users;
    const nameCheck = this.validateName(name);
    const emailCheck = this.validateEmail(email);
    // const checkingEmailExists =  _.find(currentUserList, findEmail => findEmail.email == email);
    // console.log(checkingEmailExists);

    if(!nameCheck && !emailCheck) {
      return 'Invalid Name and Email';
      // return <span className='error-message'><span className="glyphicon glyphicon-exclamation-sign"></span> Invalid Name and Email</span>
      // return 'invalid name and email';
    }
    else if (!nameCheck && emailCheck) {
      return 'Invalid Name';
    }
    else if (nameCheck && !emailCheck) {
      return 'Invalid Email';
    }
    else if(_.find(currentUserList, findEmail => findEmail.email == email)) {
      return 'Email exists';
      // return <span className='error-message'><span className="glyphicon glyphicon-exclamation-sign"></span> Email already exists</span>
    }
    else {
      return null;
    }
  }

  render() {
    return (
      <div className="white-background">
        {this.renderAddUserButton()}
        {this.renderForm()}
      </div>
    );
  }
}

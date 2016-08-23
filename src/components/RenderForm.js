import React from 'react';
import _ from 'lodash';

export default class RenderForm extends React.Component {
  handleSubmit (e) {
    e.preventDefault();

    const inputName = this.refs.inputName;
    const inputEmail = this.refs.inputEmail;
    var nameVal = inputName.value;
    var emailVal = inputEmail.value;
    const validateUser = this.validateUser(nameVal, emailVal);

    if (validateUser == null) {
      // this.props.renderError();
      this.props.addUser(nameVal, emailVal);
      nameVal = '';
      emailVal = '';
    }
    else {
      this.renderError(validateUser);
    }

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
      return false;
      // return <span className='error-message'><span className="glyphicon glyphicon-exclamation-sign"></span> Invalid Name and Email</span>
      // return 'invalid name and email';
    }

    else if(_.find(currentUserList, findEmail => findEmail.email == email)) {
      return <span className='error-message'><span className="glyphicon glyphicon-exclamation-sign"></span> Email already exists</span>
    }

    else {
      return null;
    }
  }

  renderError(message) {
    // console.log("hi");
    return (<span className='error-message'><span className="glyphicon glyphicon-exclamation-sign"></span> Invalid Name and Email</span>);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)} className="form-inline" name="userForm">
          <input autoFocus className='form-control input-spacing' type="text" name="name" placeholder="Name" ref="inputName"/>
          <input className='form-control input-spacing' type="text" name="email" placeholder="Email" ref="inputEmail" />
          <button className="btn submit-button"><span>Submit</span></button>
          {this.renderError()}
      </form>
    );
  }
}

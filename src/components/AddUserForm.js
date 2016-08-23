import React from 'react';
import RenderForm from './RenderForm';
var validationHandler = require('../validationHandler');

export default class AddUserForm extends React.Component {
  constructor(props) {
    super(props);

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

  resetMessage() {
    if(this.refs.inputName.value != '' || this.refs.inputEmail.value != '') {
      this.setState({ showReset: true });
      this.props.toggleShowReset;
    }
    else {
      this.setState({ showReset: false});
      this.props.toggleShowReset;
    }
  }

  resetForm () {
    this.refs.inputName.value = '';
    this.refs.inputEmail.value = '';
    this.setState({ showReset: false, error: null });
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
            <input onChange={this.resetMessage.bind(this)} autoFocus className='form-control input-spacing form-control-warning' type="text" name="name" placeholder="Name" ref="inputName"/>
            <input onChange={this.resetMessage.bind(this)} className='form-control input-spacing form-control-warning' type="text" name="email" placeholder="Email" ref="inputEmail" />
            <button className="btn submit-button"><span>Submit</span></button>
            {this.renderError()}
            {this.state.showReset ? <a href="#" className='reset-form' onClick={this.resetForm.bind(this)}>Reset fields</a> : null}
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
    const validateUser = validationHandler.validateUser(nameVal, emailVal, this.props.users);

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

  render() {
    return (
      <div className="white-background">
        {this.renderAddUserButton()}
        {this.renderForm()}
      </div>
    );
  }
}

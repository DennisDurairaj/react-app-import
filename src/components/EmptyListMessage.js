import React from 'react';

export default class EmptyListMessage extends React.Component {
  renderEmptyListMessage () {
  if (this.props.users.length == 0)
    return (
      <div className='jumbotron'>
        <h1>The list is <span className="theme-color">empty!</span></h1>
        <p>Please add a user from above</p>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderEmptyListMessage()}
      </div>
    );
  }
}

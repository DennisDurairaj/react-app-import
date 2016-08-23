import React from 'react';

export default class EachUser extends React.Component {
  deleteUserFromList() {
      this.props.deleteUser(this.props.id);
  }

  render() {
    return (
      <div className= "user-styles">
        <div className="col-md-3">
          <span className="id-style center-text"><b>{this.props.id}</b></span>
        </div>
        <div className="col-md-3">
          {this.props.name}
        </div>
        <div className="col-md-6">
          {this.props.email}<a className="pull-right" href="#" onClick={this.deleteUserFromList.bind(this)}><i className="ion-close-round delete-glyph"></i></a>
        </div>
      </div>
    );
  }
}

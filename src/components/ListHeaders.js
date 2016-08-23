import React from 'react';

export default class ListHeaders extends React.Component {
  render() {
    return (
      <div className="col-heads">
          <div className="col-md-3"><span className="center-text"><b>LP</b></span></div>
          <div className="col-md-3"><b>User</b></div>
          <div className="col-md-6"><b>E-Mail</b></div>
      </div>
    );
  }
}

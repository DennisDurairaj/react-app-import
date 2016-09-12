import React from 'react';

export default class Navbar extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-top" role="navigation">
          <div className="col-md-10 col-md-offset-1">
            <div className="navbar-header logo-image">
              <a className="navbar-brand" href="#"><img src="img/logo.png" /></a>
            </div>

            <div className="collapse navbar-collapse">
              <ul className="nav navbar-nav pull-right">
                <li className="web-url"><a href="#">www.react-app-v2.com</a></li>
                </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

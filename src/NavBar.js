import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class NavBar extends Component {

    render(){
        return (
            <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
            <Link to="/" className="navbar-brand" >{this.props.brand}</Link>
            </div>
          </div>
        </nav>
        );
    }
}

export default NavBar;
import React, { Component } from "react";
import { Link } from "react-router-dom";
class Nav extends Component {
  render() {
    return (
      <div>
        <Link to="/listoffavorites">Favotite Games</Link>
        <Link to="/">Home</Link>
      </div>
    );
  }
}

export default Nav;

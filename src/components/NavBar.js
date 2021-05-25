import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Image } from "semantic-ui-react";

class NavBar extends Component {
  render() {


    return (
      <div className="ui fixed inverted menu">
        <div className="ui container">
          <div className="item" />
          <NavLink
            to="/"
            exact
            className="header item"
            activeClassName="active"
          >
            <Image
              src="/would-you-rather.png"
              style={{ width: "50px", marginRight: "5px" }}
            />
            Home
          </NavLink>
          <NavLink to="/add" exact className="item" activeClassName="active">
            New Question
          </NavLink>
          <NavLink
            to="/leaderboard"
            exact
            className="item"
            activeClassName="active"
          >
            Leader Board
          </NavLink>
          <div className="ui right floated item">
            <span style={{ marginRight: "10px" }}>Hello</span>
           {/*  <img className="ui avatar image" src={} alt="" /> */}
          </div>
          <NavLink to="/logout" exact className="item" activeClassName="active">
            Logout
          </NavLink>
        </div>
      </div>
    );
  }
}

export default NavBar;

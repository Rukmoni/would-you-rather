import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Image,Dropdown } from "semantic-ui-react";

class NavBar extends Component {
  render() {


    return (
      <div className="ui fixed inverted menu">
        <div className="ui container">
          <div className="item" />
          <Image
              src="/would-you-rather.png"
              style={{ width: "50px", marginRight: "5px" }}
            />
          <NavLink
            to="/"
            exact
            className="header item"
            activeClassName="active"
          >
           
            DashBoard
          </NavLink>
          <Dropdown text='Polls' pointing='down' className='link item'>
            <Dropdown.Menu>
            
              <Dropdown.Item>Add New Poll</Dropdown.Item>
              <Dropdown.Item>LeaderBoard</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
       
     
          <div className="ui right floated item">
          <Dropdown text='Profile' pointing='down' className='link item'>
            <Dropdown.Menu>
            
              <Dropdown.Item>Profile</Dropdown.Item>
              <Dropdown.Item>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          
           {/*  <img className="ui avatar image" src={} alt="" /> */}
          </div>
       
        </div>
      </div>
    );
  }
}

export default NavBar;

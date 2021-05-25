import React, { Component } from "react";
import { NavLink,useHistory } from "react-router-dom";
import { Image,Dropdown } from "semantic-ui-react";

const NavBar=()=> {
    let history = useHistory();
    const trigger = (
        <span style={{ marginTop: "2px" }}>
          <i aria-hidden="true" class="user big icon" size="big" />
          user
        </span>
      );
      const Polltrigger = (
        <span style={{ marginTop: "2px" }}>
          <i aria-hidden="true" class="edit outline icon" size="small" />
          Polls
        </span>
      );
    const options = [
        { key: "user", text: "Account", icon: "user", value: "/accounts" },
        { key: "settings", text: "Settings", icon: "settings", value: "/settings" },
        { key: "sign-out", text: "Sign Out", icon: "sign out", value: "/sign-out" }
      ];
      const move = (e, { value }) => {
       history.push(value)
      }

      const poll_options = [
        { key: "NewPoll", text: "New Poll", icon: "edit", value: "/newPoll" },
        { key: "LeaderBoard", text: "LeaderBoard", icon: "trophy", value: "/settings" },
      
      ];
     

    return (
      <div className="ui fixed inverted menu">
        <div className="ui container">
         
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
          <div className="ui  floated item">
          <Dropdown
          options={poll_options}
          trigger={Polltrigger}
          icon={null}
          onChange={move}
        />
        </div>
         
          <div className="ui right floated item">
          <Dropdown
          options={options}
          trigger={trigger}
          icon={null}
          onChange={move}
        />
          
           {/*  <img className="ui avatar image" src={} alt="" /> */}
          </div>
       
        </div>
      </div>
    );
  
}

export default NavBar;

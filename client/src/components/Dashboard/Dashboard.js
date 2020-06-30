import React from "react";
import { Button } from "react-bootstrap";

import API from "../../utils/API";

export class Dashboard extends React.Component {
  disconnect = () => {
    API.logout();
    window.location = "/";
  };
  render() {
      console.log(localStorage)
    return (
      <div className="Dashboard">
        <h1>Dashboard</h1>
    <h2>Bienvenue : {localStorage.user}</h2>
        <Button onClick={this.disconnect} block bsSize="large" type="submit">
          Se déconnecter
        </Button>
      </div>
    );
  }
}
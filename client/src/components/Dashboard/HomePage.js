import React from "react";
import { Button } from "react-bootstrap";

import API from "../../utils/API";

export class HomePage extends React.Component {
  disconnect = () => {
    API.logout();
    window.location = "/";
  };
  render() {
    return (
      <div className="Dashboard">
        <h1>Home</h1>
    <h2>Bienvenue : {localStorage.user}</h2>
        <Button onClick={this.disconnect} block bsSize="small" type="submit">
          Se déconnecter
        </Button>
      </div>
    );
  }
}
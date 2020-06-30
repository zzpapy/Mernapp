import React from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import API from "../../utils/API";

export class Login extends React.Component {
  state = {
    email: "",
    password: "",
    message:""
  };
  send = async () => {
    const { email, password } = this.state;
    if (!email || email.length === 0) {
      this.setState({...this.state,message:"toto"})
      window.location = "/dashboard";
      return;
    }
    if (!password || password.length === 0) {
      this.setState({...this.state,message:"test"})
      return;
    }
    try {
      const { data } = await API.login(email, password);
      // const { data1 } = await API.findAll();
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", data.user);
      // localStorage.setItem("users", data1);
      window.location = "/dashboard";
    } catch (error) {
      console.error(error);
    }
  };
  
  findAll = async () => {
    try {
      const { data } = await API.findAll();
      console.log(data)
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", data.user);
      window.location = "/dashboard";
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };
  render() {
    const { email, password } = this.state;
    return (
      <div className="Login">
        <a href="/signup">s'inscrire</a>
        <FormGroup controlId="email" bsSize="large">
          <ControlLabel>Email</ControlLabel>
          <FormControl
            autoFocus
            type="email"
            value={email}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <ControlLabel>Password</ControlLabel>
          <FormControl
            value={password}
            onChange={this.handleChange}
            type="password"
          />
        </FormGroup>
        <Button onClick={this.send} block bsSize="large" type="submit">
          Connexion
        </Button>
      </div>
    );
  }
}
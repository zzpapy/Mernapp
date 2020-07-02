import React from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import API from "../../utils/API";
import DragAndDrop from '../DragAndDrop/DragAndDrop.js'

export class Dashboard extends React.Component {
  state = {
    photo:"",
    selectedFile:null
  };
  
handleDrop = async (event) => {
    console.log(event.target)
    this.setState({
      selectedFile: event[0],
      loaded: 0,
    })
    const data = new FormData() 
    data.append('file', this.state.selectedFile)
    await API.upload(this.state.selectedFile);
  };
  disconnect = () => {
    API.logout();
    window.location = "/";
  };
  // handleDrop = (files) => {
  //   let fileList = this.state.files
  //   for (var i = 0; i < files.length; i++) {
  //     if (!files[i].name) return
  //     fileList.push(files[i].name)
  //   }
  //   this.setState({files: fileList})
  // }
 
  render() {
    const { photo } = this.state;
    return (
      <div className="Dashboard">
        <h1>Dashboard</h1>
    <h2>Bienvenue : {JSON.parse(localStorage.user).nom}</h2>
    <p>Votre email : {JSON.parse(localStorage.user).email}</p>
    <DragAndDrop handleDrop={this.handleDrop}>
        <div style={{height: 300, width: 250}}>
         
        </div>
      </DragAndDrop>
      <FormGroup controlId="password" bsSize="large">
        <input type="file" name="file" onChange={this.onChangeHandler}/>
        <Button onClick={this.handleDrop} block bsSize="large" type="submit">
         ok
        </Button> 
        </FormGroup>
        {/* <Button onClick={this.disconnect} block bsSize="large" type="submit">
          Se déconnecter
        </Button> */}
      </div>
    );
  }
}
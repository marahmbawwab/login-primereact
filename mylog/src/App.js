import React from 'react';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';

import './App.css';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { uname: "", pass: "" };
  }
  handleclick = () => {
    var str1 = "User Name:" + this.state.uname;
    var str2 = " , Password:" + this.state.pass;
    var res = str1.concat(str2);
    alert(res);
  }
  render() {
    return (
      <div style={{ height: "100vh", backgroundColor: "rgb(111,111,146)", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <p style={{ color: "rgb(255,226,226)", fontSize: "50px" }}><b>Welcome To our Website</b></p>
        <div style={{ borderRadius: "20px", width: "600px", height: "300px", backgroundColor: "white", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <img src={require('./rabbit.jpg')} alt="no-display" width="80px" height="80px" style={{ alignSelf: "center", borderRadius: "50%", marginTop: "20px" }} />
          <div style={{ display: "flex", padding: "10px", marginRight: "80px", marginTop: "20px" }}>
            <label htmlFor="username" style={{ width: "100px", height: "20px" }} ><b>UserName</b></label>
            <InputText id="username" name="usern" value={this.state.uname} onChange={(e) => this.setState({ uname: e.target.value })} />
          </div>

          <div style={{ display: "flex", padding: "10px", marginRight: "80px" }}>
            <label htmlFor="pass" style={{ width: "100px", height: "20px" }}><b>Password</b></label>
            <Password value={this.state.pass} name="pass" onChange={(e) => this.setState({ pass: e.target.value })} />
          </div>
          <div style={{ display: "flex", marginTop: "20px", marginBottom: "20px", marginLeft: "17px", width: "190px" }}>
            <Button label="LOGIN" onClick={this.handleclick} style={{ width: "100%" }} />
          </div>
        </div>
      </div>
    );
  }
}
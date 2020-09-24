import React from 'react';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import './Mydesign.css';
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
      <div className="Par">
        <p><b>Welcome To our Website</b></p>
        <div className="d2" >
          <img src={require('./rabbit.jpg')} alt="no-display" width="80px" height="80px" className="d3"/>
          <div className="d4">
            <label htmlFor="username" style={{ width: "100px", height: "20px" }} ><b>UserName</b></label>
            <InputText id="username" name="usern" value={this.state.uname} onChange={(e) => this.setState({ uname: e.target.value })} />
          </div>

          <div className="d5">
            <label htmlFor="pass" style={{ width: "100px", height: "20px" }}><b>Password</b></label>
            <Password value={this.state.pass} name="pass" onChange={(e) => this.setState({ pass: e.target.value })} />
          </div>
          <div  id="d6" >
            <Button className="p-button-rounded" label="LOGIN" onClick={this.handleclick} style={{ width: "100%" }} />
          </div>
        </div>
      </div>
    );
  }
}
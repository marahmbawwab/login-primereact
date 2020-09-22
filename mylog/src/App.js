import React from 'react';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import './App.css';


class App extends React.Component {
 constructor (){
 super();
 this.state={uname:null ,pass:null};
 this.handleclick=this.handleclick.bind(this);
 }
 handlechange =(event)=> {
 if (event.target.name==="usern"){
if(event.target.value!==""){
  this.setState({uname :event.target.value});
}
else {
  this.setState({uname :null});
 }
}
 else if (event.target.name==="pass") {
  if(event.target.value !==""){
    this.setState({pass :event.target.value});
  }
  else {
    this.setState({pass :null});
   }
 }
 }
 handleclick () {
  var str1 = "User Name:" + this.state.uname ;
  var str2 = " , Password:"+this.state.pass ;
  var res = str1.concat(str2);
  return alert (res);
 }
  render(){
    return (
     <div style={{height:"100vh", backgroundColor:"rgb(111,111,146)",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
      <p style={{color:"rgb(255,226,226)",fontSize:"50px"}}><b>Welcome To our Website</b></p>
      <div style={{borderRadius:"20px" ,width:"600px",height:"300px",backgroundColor:"white",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
      <img  src={require('./rabbit.jpg')}  alt="no-display" width="80px" height="80px" style={{alignSelf:"center",borderRadius:"50%"}}/>
         <div style={{display:"flex",padding:"10px",marginRight:"80px"}}>
        <label htmlFor="username" style={{width:"100px" ,height:"20px"}} ><b>UserName</b></label>
        <InputText id="username" name="usern" value={this.state.uname} onChange={this.handlechange}/>
        </div>
      
      <div style={{display:"flex",padding:"10px",marginRight:"80px"}}>
      <label htmlFor="pass"  style={{width:"100px" ,height:"20px"}}><b>Password</b></label>
        <div className="p-password-panel p-password-info">
        <Password value={this.state.pass} name="pass" onChange={this.handlechange}/>
          </div>
      </div>
      <div style={{display:"flex" ,margin:"20px",marginRight:"122px"}}>
      <Button label="LOGIN" onClick={this.handleclick} />
      </div>
      </div>
      </div>
    );
    }
}
export default App;

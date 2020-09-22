import React from 'react';
import { InputText } from 'primereact/inputtext';
import {Password} from 'primereact/password';
import './App.css';

function form() {
  return (
   <div className="p-d-flex p-dir-column">
   <div className="p-float-label">
    <label htmlhtmlFor="user">Username</label>
    <InputText />
</div>
<div className="p-password-panel">
    <label htmlhtmlFor="pass">password</label>
    <Password />
</div>
</div>
  );
}
function App() {
  return (
    
   <div className="p-d-flex p-dir-row">
   
     <p>Welcome To our Website</p>

   <div className="p-field">
  <label htmlFor="username" className="p-d-block">Username</label>
  <InputText id="username" aria-describedby="username1-help" className="p-d-block"/>
  </div>

<div className="p-password-panel">
    <label htmlhtmlFor="pass">password</label>
    <Password />
</div>
</div>
  );
}

export default App;

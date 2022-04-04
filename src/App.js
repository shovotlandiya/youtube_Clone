import React from "react";
import "./App.css";


import {Context } from './component/Context/Authentication'

import Authentication from "./component/AuthenticatedApp";
import Unauthentication from "./component/UnAuthenticatedApp";


function App() {

  const {token,setToken}=React.useContext(Context);
  

  if(token){
    return<Authentication/>
  }
  else{
    return<Unauthentication/>
  }
  return (
    <>
     
    </>
  );
}

export default App;

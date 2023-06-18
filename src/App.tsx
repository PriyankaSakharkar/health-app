import logo from "./logo.svg";
import "./App.css";
import MenuBar from "./MenuBar/MenuBar";
import { useState } from "react";
import AddHealthData from "./component/AddHealthData/AddHealthData";
import ShowHealthData from "./component/ShowHealthData/ShowHealthData";
import AnData from "./component/AnData/AnData";
import {MainContextWrapper} from "./Store/mainContext/mainContext";

function App(){
  const [loadComponent,setLoadComponent] = useState(<AddHealthData/>)
  const buttonArr = [
    {
      id :1,
      label : 'Add-HealthData',
      btFun : () => setLoadComponent(<AddHealthData/>)
    },
    {
      id :2,
      label : 'Show-HealthData',
      btFun : () => setLoadComponent(<ShowHealthData/>)
    },
    {
      id :3,
      label : 'AnalyticHealth',
      btFun : () => setLoadComponent(<AnData/>)
    }
  ];

  const loadComponentt = <AddHealthData/>
  return (
  <MainContextWrapper>
     <div>
       <MenuBar buttonArr={buttonArr}></MenuBar>
     {loadComponent}
    </div>

  </MainContextWrapper>
  )
};

  

export default App;

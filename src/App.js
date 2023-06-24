import logo from './logo.svg';
import'./App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
// import About from './components/About';
import React , { useState } from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";


function App() {
  const [mode,setmode]=useState('light');
  const [alert,setAlert]=useState('null');

  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type
      
    })
    setTimeout(()=>{
      setAlert(null);

    },1500)
  }
  const greenmode=()=>{
    if(mode==='light'){
      setmode('green')
      document.body.style.backgroundColor= 'green'
      showAlert("green mode has been enable","success")
    }
    else{
      setmode('light')
      document.body.style.backgroundColor= 'white'
      showAlert("light mode has been enable", "success")
    }
  }

  const togglemode=()=>{
    if(mode==='light'){
      setmode('dark')
      document.body.style.backgroundColor= 'blue'
      showAlert("dark mode has been enable","success")
    }
    else{
      setmode('light')
      document.body.style.backgroundColor= 'white'
      showAlert("light mode has been enable", "success")
    }

  }
  return (
    <>
    {/* <Router> */}
  
<Navbar title="textutils"  mode={mode} togglemode={togglemode} greenmode={greenmode} />
<Alert alert={alert} />
<div className="container my-3">
  
{/* <Routes> */}
          {/* <Route path="/about" element={<About/>}> */}
            
          {/* </Route> */}
      
          {/* <Route path="/" element= */}
          <Textform showAlert={showAlert} heading="enter the text to analyze" mode="mode"/>
          
          
          {/* </Route> */}
        {/* </Routes>/ */}
</div>
   
 {/* <Textform showAlert={showAlert} heading="enter the text to analyze" mode="mode"/> */}
 {/* <About/> */}
 </>




  );
}

export default App;

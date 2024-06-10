import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textbar from './components/Textbar';
import Alert from './components/Alert';
import About from './components/about';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState();

  const showAlert = (message, type) => {
    setalert({
      message: message,
      type: type
    }
    );
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }


  const togglemode = () => {
    if (mode === 'dark') {
      setmode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is Enable", "success");
    }
    else {
      setmode('dark');
      document.body.style.backgroundColor = "#36454f";
      showAlert("Dark mode is Enable", "success");
    }
  }
  return (
    <>
      <Router>
        <Navbar mode={mode} togglemode={togglemode} />
        <Alert alert={alert} />
        <Routes>
          <Route path="/about" element={<About />}>
          </Route>
          <Route path="/" element={<Textbar heading="Enter Text Here...." mode={mode} showAlert={showAlert} />}>  
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

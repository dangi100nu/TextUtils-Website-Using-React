import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'




function App() {

  const [mode, setmode] = useState("warning")
  const [alert, setAlert] = useState(null)

  const showAlert = (messege, type) => {
    setAlert({
      msg: messege,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }


  const togglebtn = () => {
    if (mode === "warning") {
      setmode("black")
      document.body.style.backgroundColor = "#080b1c"
      showAlert("dark mode successfully Enabled!!", "success")
      document.title = "textUtils-Dark mode"
      setInterval(() => {
        document.title = "TextUtils is amazing"
      }, 1500);
      setInterval(() => {
        document.title = "TextUtils awesome"
      }, 1000);
    }
    else {
      setmode("warning")
      document.body.style.backgroundColor = "#ece9e9"
      showAlert("light mode successfully Enabled!!", "white")
      document.title = "textUtils-Light mode"
    }
  }

  return (
    <>
      <Router>
        <Navbar title='TextUtils' aboutText={343} mode={mode} togglemode={togglebtn} />
        <Alert alert={alert} />
        <div className="container mt-5">
          <Routes>
            <Route exact path="/" element={<TextForm heading="Enter the text below to utilize" mode={mode} showAlert={showAlert} />
            } />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

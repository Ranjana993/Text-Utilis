import { useState } from 'react';
import './App.css';
import TextUtlis from './components/TextUtlis';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { About } from './components/About';

function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "#00475b"
      showAlert("dark mode enabled.....", "success")
    } else {
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert("light mode enabled.....", "success")
    }
  }

  
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} style={{ marginBottom: "2rem" }} />
        <Routes>
          <Route exact path="/" element={<TextUtlis showAlert={showAlert} mode={mode} />} />
          <Route exact path="/about" element={<About mode={mode}/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

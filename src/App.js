import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alerts from './components/Alerts';
import { useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
      }, 2000);
  }
  return (
    <>
    <Router>
    <Navbar title={"TextUtils"} />
    <Alerts alert={alert}/>
      <Routes>
        <Route path="/" element={<TextForm showAlert={showAlert} />} />
        <Route path="/about" element={<About/>} />
      </Routes>
  </Router>
  </>
  );
}

export default App;
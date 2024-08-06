import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alerts from './components/Alerts';

function App() {
  return (
    <>
  <Navbar title={"TextUtils"} />
  <TextForm heading={"Enter your text below"} />
  <About />
  <Alerts />
  </>
  );
}

export default App;
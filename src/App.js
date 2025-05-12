
import './App.css';
import Input from './components/Input';
import { BrowserRouter as Router,Route,Routes } from 'react-router';
import Verification from './components/Verification';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <Router>
    <div className="Main">
      <div className="logo">
        <img src="./new logo.png" alt="/" height="100%" width="100%"/>
      </div>
      <h1>Trained & Tuned'25</h1>
      <Routes>
      <Route path ="/" element={<Input/>}/>
       <Route path ="/Verify" element={ <Verification/>}/>
     
      </Routes>
       <ToastContainer position="top-right" autoClose={3000} />

    
    </div>
    </Router>
  );
}

export default App;

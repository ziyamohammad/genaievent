
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
        <div className="top-right">
          <img src="./top-right.png" alt=""  height="100%" width="100%"/>
        </div>
         <div className="bottom-right">
          <img src="./bottom-right.png" alt="" height="100%" width="100%" />
        </div>
        <div className="top-left">
          <img src="./top-left.png" alt="" height="100%" width="100%" />
        </div>
         <div className="top-left-ball">
          <img src="./top-left-ball.png" alt="" height="100%" width="100%" />
        </div>
        <div className="top-left-ball2">
          <img src="./top-left-ball2.png" alt="" height="100%" width="100%" />
        </div>
         <div className="bottom-left">
          <img src="./bottom-left.png" alt="" height="100%" width="100%" />
        </div>
         <div className="bottom-left-ball">
          <img src="./bottom-left-ball.png" alt="" height="100%" width="100%" />
        </div>
         <div className="bottom-left-ball2">
          <img src="./bottom-left-ball2.png" alt="" height="100%" width="100%" />
        </div>
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


import './App.css';
import Input from './components/Input';
import { BrowserRouter as Router,Route,Routes } from 'react-router';
import Verification from './components/Verification';

function App() {
  return (
    <Router>
    <div className="Main">
      <div className="logo">
        <img src="./logo.png" alt="/" height="100%" width="100%"/>
      </div>
      <h1>Trained & Tuned'25</h1>
      <Routes>
      <Route path ="/" element={<Input/>}/>
       <Route path ="verification" element={ <Verification/>}/>
     
      </Routes>
    
    </div>
    </Router>
  );
}

export default App;

import './App.css';
import SignUp from './pages/SignUp/signUp';
import Welcome from './pages/Welcome/welcome';
import Succeed from "./pages/Succeed/succeed";

import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {
  return (
    <div className="App">
    <div className='Container'>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Welcome/>} />
    <Route exact path="/signup" element={<SignUp />} />
    <Route  path='/Succeed'element= {<Succeed/>}/>
    </Routes>
    </BrowserRouter>
    </div>
    </div>
  );
}

export default App;

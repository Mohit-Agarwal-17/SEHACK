import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from './pages/LoginForm';
import Navbar from './components/Navbar';
import SignupForm from './pages/SignupForm';

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element= {< LoginForm/>} />
            <Route path="/signup" element= {< SignupForm/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

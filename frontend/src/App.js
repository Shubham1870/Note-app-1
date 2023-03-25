import './App.css';
import Login from './components/login/login';
import Signup from "./components/signup/signup"
import Landing from "./components/landingpage/landing"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Addnote from './components/addnote/addnote';
function App() {
  return (
    <>
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/home" element={<Landing/>}/>
    <Route path="/addnote" element={<Addnote/>}/>
  </Routes>
</BrowserRouter>
    </>
  );
}

export default App;

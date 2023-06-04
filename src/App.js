import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./views/Home";
import Login from "./views/Login";
import Registration from "./views/Registration";
import Dashboard from "./views/Dashboard";
import Sidebar from "./views/Sidebar";

function App() {
  return (
    <>
  <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/registration" element={<Registration/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/sidebar" element={<Sidebar/>} />

     </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
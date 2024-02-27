import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom';
import "./css/style.css"

// Importing pages components
import Home from "./pages/Home"
import About from './pages/about';
import Login from './pages/login';
import AdminDashboard from './pages/admin/board';
import ServiceSellerDashboard from './pages/serviceSeller/serviceSellerDashboard';

export default function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/pages/about' element={<About/>} />
        <Route path='/pages/login' element={<Login/>}></Route>
        <Route path='/admin' element={<AdminDashboard/>}></Route>
        <Route path='/serviceSeller' element={<ServiceSellerDashboard/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root
);

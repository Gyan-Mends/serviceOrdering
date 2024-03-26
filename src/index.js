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
import Tut from './pages/tut';
import Service from './pages/serviceSeller/services.';
import ServiceAdd from './pages/serviceSeller/serviceAdd';
import Registeration from './pages/registeration';

export default function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/pages/tut' element={<Tut/>} />
        <Route path='/' element={<Home/>} />
        <Route path='/pages/about' element={<About/>} />
        <Route path='/pages/login' element={<Login/>}></Route>
        <Route path='/admin' element={<AdminDashboard/>}></Route>
        <Route path='/serviceSeller' element={<ServiceSellerDashboard/>}></Route>
        <Route path='/serviceseller/services' element={<Service/>}></Route>
        <Route path='/serviceseller/serviceAdd' element={<ServiceAdd/>}></Route>
        <Route path='/registeration' element={<Registeration/>}> </Route>
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

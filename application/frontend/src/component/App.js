import React from 'react';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ClientList from './ClientList';
import ClientEdit from "./ClientEdit";
import '../static/styles/App.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/clients' element={<ClientList />}/>
        <Route path='/clients/:id' element={<ClientEdit />}/>
      </Routes>
    </Router>
  );
}

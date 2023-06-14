import React from 'react';
import { BrowserRouter, BrowserRouter as Router,  Route, Routes } from 'react-router-dom';
import { Home } from './Pages/home';
import Table from './Pages/table';



const App: React.FC = () => {
  return (
   <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home page="Home" componentPage={<Table />}/>} />
        
    </Routes></BrowserRouter>
  );
};

export default App;


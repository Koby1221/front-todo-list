import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './componnts/layout';
import List from './componnts/list/index';

function App() {
  return (
    <div className='App'>
      {/* Set up the BrowserRouter for routing */}
      <BrowserRouter>
        {/* Define the routes using the Routes component */}
        <Routes>
          {/* Route for the home page */}
          <Route path="/" element={<Layout />} />
          {/* Route for the list page */}
          <Route path="/list" element={<List />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Notes from './components/Notes';
import CreateNotes from './components/CreateNotes';


function App() {
  return (
    <div className='App'>
      <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/notes' element={<Notes />} />
          <Route path='/create' element={<CreateNotes />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

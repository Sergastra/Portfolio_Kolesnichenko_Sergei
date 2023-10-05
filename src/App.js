import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Layout from './components/Layout';
import NotFound404 from '../src/components/NotFound404';

import './App.scss';


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          
        </Route>
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </>
  )
}

export default App

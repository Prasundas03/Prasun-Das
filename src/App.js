// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import UpperPart from './UpperPart';
import MiddlePart from './MiddlePart';
import FooterPart from './Footer';


const App = () => {
  return (
    <>
      <Navbar />
      <UpperPart />
      <MiddlePart/>
      <FooterPart/>
    </>
  );
};

export default App;
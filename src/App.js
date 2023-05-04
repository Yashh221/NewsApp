import './App.css';
import Navbar from './component/navbar';
import React, { useState } from 'react';
import News from './component/new';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App=()=> {
  const pageSize=15;
  const apiKey= '8c726d4f15cb4c2aa61ba1d9d80ed62e';
  const[progress,setProgress]=useState(0)
    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
      />
        <Routes>
          <Route path="/" element={<News setProgress={setProgress} apikey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/>}/>
          <Route path="/business" element={<News setProgress={setProgress} apikey={apiKey} key="business" pageSize={pageSize} country="in" category="business"/>}/>
          <Route path="/entertainment" element={<News setProgress={setProgress} apikey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment"/>}/>
          <Route path="/health" element={<News setProgress={setProgress} apikey={apiKey} key="health" pageSize={pageSize} country="in" category="health"/>}/>
          <Route path="/science" element={<News setProgress={setProgress} apikey={apiKey} key="science" pageSize={pageSize} country="in" category="science"/>}/>
          <Route path="/sports" element={<News setProgress={setProgress} apikey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports"/>}/>
          <Route path="/technology" element={<News setProgress={setProgress} apikey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology"/>}/>
        </Routes>
        </Router>
      </div>
    );
  }

export default App;
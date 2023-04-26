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
  const pageSize=5;
  const apiKey=process.env.REACT_APP_NEWS_API
  const[progress,setProgress]=useState(0)
    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
        // onLoaderFinished={() => setProgress(0)}
      />
        {/* <News setProgress={setProgress} setProgress={setProgress} pageSize={pageSize} country="in" category="sports"/> */}
        <Routes>
          <Route exact path="/" element={()=>(<News setProgress={setProgress} apikey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/>)}></Route>
          <Route exact path="/business" element={()=>(<News setProgress={setProgress} apikey={apiKey} key="business" pageSize={pageSize} country="in" category="business"/>)}></Route>
          <Route exact path="/entertainment" element={()=>(<News setProgress={setProgress} apikey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment"/>)}></Route>
          <Route exact path="/health" element={()=>(<News setProgress={setProgress} apikey={apiKey} key="health" pageSize={pageSize} country="in" category="health"/>)}></Route>
          <Route exact path="/science" element={()=>(<News setProgress={setProgress} apikey={apiKey} key="science" pageSize={pageSize} country="in" category="science"/>)}></Route>
          <Route exact path="/sports" element={()=>(<News setProgress={setProgress} apikey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports"/>)}></Route>
          <Route exact path="/technology" element={()=>(<News setProgress={setProgress} apikey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology"/>)}></Route>
        </Routes>
        </Router>
      </div>
    );
  }

export default App;
// import './App.css';

// import React, { useState } from 'react'
// import NavBar from './component/navbar';
// import News from './component/new';
// import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
// import LoadingBar from 'react-top-loading-bar'

// const App = ()=> {
//   const pageSize = 5;
//   const apiKey = process.env.REACT_APP_NEWS_API
//   const [progress, setProgress] = useState(0)
 
//     return (
//       <div>
//         <Router>
//         <NavBar/> 
//         <LoadingBar
//         height={3}
//         color='#f11946'
//         progress={progress} 
//       />
//         <Routes>
//           <Route exact path="/"><News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/></Route> 
//           <Route exact path="/business"><News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business"/></Route> 
//           <Route exact path="/entertainment"><News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment"/></Route> 
//           <Route exact path="/general"><News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/></Route> 
//           <Route exact path="/health"><News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health"/></Route> 
//           <Route exact path="/science"><News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science"/></Route> 
//           <Route exact path="/sports"><News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports"/></Route> 
//           <Route exact path="/technology"><News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology"/></Route> 
//         </Routes>
//         </Router>
//       </div>
//     )
 
// }

// export default App;

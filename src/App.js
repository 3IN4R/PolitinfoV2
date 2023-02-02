import React from 'react';
//importing libraries to create webpages on the browser
import {Routes, Route} from 'react-router-dom';

import './App.css';
//importing components
import Home from './pages/home';
import Info from './pages/info';
import Landing from './pages/landing';

 function App() {
    
   return (
     <div className="App">
       <Routes>
      <Route path='/PolitinfoV2/' element={<Landing/>}/>
       <Route path="/home" element={<Home />} />
       <Route path="/info" element={<Info />} />
       
      </Routes>
     </div>
   );
 }

export default App;

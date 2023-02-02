import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import Info from './pages/info';
import Landing from './pages/landing';

 function App() {
   

    return(
      <div className='App'>
        <Routes>
     <Route path='/home' element={<Home/>}/>
     <Route path='/info' element={<Info/>}/>
    <Route path='/' element={<Landing/>}/>
     </Routes>
        </div>
      
    )
}

export default App;
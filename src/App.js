// import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News'
import LoadingBar from 'react-top-loading-bar';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const App =()=> {
  let ApiKey= process.env.REACT_APP_APIKEY;
  const [progress, setProgress] = useState(0);
    return (
      <div className='bg-dark'>
        <Router>
        <NavBar/>
        <LoadingBar
        color='#f11946'
        progress={progress}
      />
        <Routes>
        <Route exact path="/" element={<News setProgress ={setProgress} ApiKey={ApiKey} key  ="Home" PageSize={12} country='in'  category= 'general'/>}></Route>
         <Route exact path="/business"element={<News setProgress ={setProgress} ApiKey={ApiKey} key  ="business" PageSize={12} country='in'  category= 'business'/>}></Route>
         <Route exact path="/entertainment"element={<News setProgress ={setProgress} ApiKey={ApiKey} key  ="entertainment" PageSize={12} country='in'  category= 'entertainment'/>}></Route>
         <Route exact path="/general"element={<News setProgress ={setProgress} ApiKey={ApiKey} key  ="general" PageSize={12} country='in'  category= 'general'/>}></Route>
         <Route exact path="/health"element={<News setProgress ={setProgress} ApiKey={ApiKey} key  ="health" PageSize={12} country='in'  category= 'health'/>}></Route>
         <Route exact path="/science"element={<News setProgress ={setProgress} ApiKey={ApiKey} key  ="science" PageSize={12} country='in'  category= 'science'/>}></Route>
         <Route exact path="/sports"element={<News setProgress ={setProgress} ApiKey={ApiKey} key  ="sports" PageSize={12} country='in'  category= 'sports'/>}></Route>
         <Route exact path="/technology"element={<News setProgress ={setProgress} ApiKey={ApiKey} key  ="technology" PageSize={12} country='in'  category= 'technology'/>}></Route>
        </Routes>
        </Router>
      </div>
    )
  }



export default App;

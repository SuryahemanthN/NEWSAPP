import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Navbar from './Components/Navbar'
import News from './Components/News'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'
const App=()=> {
  const pageSize=5;
  const [progress,setProgress]= useState(0);
  //state={progress:0}
  // setProgress=(progress)=>{
  //   setProgress(progress);
  // }
 
    return( <>
    <BrowserRouter>
    <Navbar/>
    <LoadingBar
        color='#1f1ce6'
        progress={progress}
        height={3} // height of the load bar
        onLoaderFinished={() => setProgress(progress)}
      />
    <Routes>
      <Route  path='/' element={<News setProgress={setProgress} key='general' pagesize={5} country="in" category="general"/>}></Route>
      <Route   path='/business' element={<News setProgress={setProgress} key='business' pagesize={5} country="in" category="business"/>}></Route>
      <Route  path='/entertainment' element={<News setProgress={setProgress} key='entertainment' pagesize={5} country="in" category="entertainment"/>}></Route>
      <Route  path='/health' element={<News setProgress={setProgress} key='health' pagesize={5} country="in" category="health"/>}></Route>
      <Route  path='/science' element={<News setProgress={setProgress} key='science' pagesize={5} country="in" category="science"/>}></Route>
      <Route  path='/sports' element={<News setProgress={setProgress} key='sports' pagesize={5} country="in" category="sports"/>}></Route>
      <Route  path='/technology' element={<News setProgress={setProgress} key='technology' pagesize={5} country="in" category="technology"/>}></Route>
    </Routes>
    </BrowserRouter>
      {/* <Navbar/>
      <News setProgress={setProgress} pagesize={5} country="in" category="general"/> */}
    </>)
  
}

export default App;
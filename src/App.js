import React from 'react'
import './App.css'
import Menu from './components/Menu'
import Content from './components/Content'
import { BrowserRouter as Router } from  'react-router-dom'
import Navbar from './components/Navbar'

const App = props => {
  return(
    <div className="App">
      <Router>
        
        <Navbar/>
        <Menu/>
        <Content/>

      </Router>
    </div>
  )
  
}

export default App;

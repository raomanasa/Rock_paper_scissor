import React from "react"
import ReactDOM from "react-dom"
import Hello from "./Welcom"
import Header from "./Header"
import Footer from "./Footer"
import { BrowserRouter } from 'react-router-dom'
//import Projects from "./Projects"
import About from "./About"
import { Switch, Route } from 'react-router-dom'



const App = () => {
    return (
      <div>
        <Header />
        <Switch>
        <Route exact path='/' component={Hello}></Route>
        <Route exact path='/about' component={About}></Route>
      </Switch> 
       <Footer />
      </div >
    )
  };
  

ReactDOM.render((
  <BrowserRouter>
      <App />
  </BrowserRouter>
), document.getElementById('app'));

import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import Home from '../pages/home/Home'

const Routes = () => {
  return (
      <Router>
          <Header/>
          <Switch>
              <Route path="/" exact component={Home}/>
          </Switch>
          {/* <Footer/> */}
      </Router>
  )
}

export default Routes
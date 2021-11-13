import React from 'react' ;
import PageWrapper from './Component/PageWrapper'
import Home from './Component/Pages/Home'
import About from './Component/Pages/About'
import Services from './Component/Common/Services'
import Portfolio from './Component/Common/Portfolio';

import {BrowserRouter as Router, Route } from 'react-router-dom'
function App() {
  return (
    <div>
      <Router>
        <PageWrapper>
          <Route  path='/' component ={Home} exact={true } />
          <Route  path='/about' component ={About} exact={true } />
          <Route  path='/services' component ={Services} exact={true } />
          <Route  path='/portfolio' component ={Portfolio} exact={true } />
        </PageWrapper>
      </Router> 
    </div>
  )
}
export default App;
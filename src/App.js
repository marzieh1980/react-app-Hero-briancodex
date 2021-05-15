import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/HomePage/Home';
import Cassa from './components/pages/Cassa/Cassa';
import Agenda from './components/pages/Agenda/Agenda';
import Promozioni from './components/pages/Promozioni/Promozioni';
import Signup from './components/pages/Signup/Signup';
import Footer from './components/pages/Footer/Footer';

function App() {
  return (
    <Router>
      <Navbar/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/cassa' exact component={Cassa}/>
          <Route path='/agenda' exact component={Agenda}/>
          <Route path='/promozioni' exact component={Promozioni}/>
          <Route path='/sign-up' exact component={Signup}/> 
        </Switch>
      <Footer />
    </Router>
  );
}

export default App;

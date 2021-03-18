
import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Footer, Navbar} from './components';
import GlobalStyle from './globalStyles';
import Home from './pages/Homepage/Home';
// import Navbar from './components/Navbar/Navbar';
// import Footer from './components/Navbar/Navbar';
function App() {
  return (
    <Router>
      <GlobalStyle />  
    <Navbar />
    <Switch>
          <Route path="/" exact  component={Home} />
    </Switch>
    <Footer/>
    </Router>
  );
}

export default App;

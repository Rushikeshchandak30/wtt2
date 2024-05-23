import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './Componnents/Home';
import Login from './Componnents/Login';
import Registration from './Componnents/Regestration';
import Catalogue from './Componnents/catlogue';

const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/catalogue">Catalogue</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Registration} />
        <Route path="/catalogue" component={Catalogue} />
      </Routes>
    </div>
  );
};

export default App;

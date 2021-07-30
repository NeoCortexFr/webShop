import React from 'react';

// import reactLogo from './react-logo.svg'; <img src={reactLogo} alt="react logo" />
import './app.scss';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';

const App = () => (
  <div className="app">
    <Header />
    <Footer />
  </div>
);

export default App;

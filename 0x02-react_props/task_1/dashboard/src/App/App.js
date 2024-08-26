import React from 'react';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './App.css';

function App() {
  return (
    <>
      <div className='container'>
        <Notifications />
        <div className='App'>
          <Header />
          <Login />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;

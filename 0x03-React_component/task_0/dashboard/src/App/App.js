import React from 'react';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './App.css';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList';

const listCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 },
];

const listNotifications = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', value: 'New data available' },
];

class App extends React.Component {
  render() {
    const isLoggedIn = this.props.isLoggedIn;
    return (
      <>
        <div className='container'>
          <div className='App'>
            <div className='App-header'>
              <Header />
              <Notifications
                displayDrawer={false}
                notifications={listNotifications}
              />
            </div>
            {isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login />}
            <Footer />
          </div>
        </div>
      </>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

App.defaultProps = {
  isLoggedIn: false,
};

export default App;

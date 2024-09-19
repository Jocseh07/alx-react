import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer,
  loginRequest,
} from './uiActionCreators';
import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from './uiActionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('uiActionCreators', () => {
  it('should create an action to login', () => {
    const email = 'test@example.com';
    const password = 'password123';
    const expectedAction = {
      type: LOGIN,
      user: { email, password },
    };
    expect(login(email, password)).toEqual(expectedAction);
  });

  it('should create an action to logout', () => {
    const expectedAction = {
      type: LOGOUT,
    };
    expect(logout()).toEqual(expectedAction);
  });

  it('should create an action to display notification drawer', () => {
    const expectedAction = {
      type: DISPLAY_NOTIFICATION_DRAWER,
    };
    expect(displayNotificationDrawer()).toEqual(expectedAction);
  });

  it('should create an action to hide notification drawer', () => {
    const expectedAction = {
      type: HIDE_NOTIFICATION_DRAWER,
    };
    expect(hideNotificationDrawer()).toEqual(expectedAction);
  });
});

describe('loginRequest', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('should dispatch LOGIN and LOGIN_SUCCESS when API returns the right response', () => {
    fetchMock.getOnce('/login-success.json', {
      body: { success: true },
      headers: { 'content-type': 'application/json' },
    });

    const expectedActions = [
      {
        type: LOGIN,
        user: { email: 'test@example.com', password: 'password123' },
      },
      { type: LOGIN_SUCCESS },
    ];
    const store = mockStore({});

    return store
      .dispatch(loginRequest('test@example.com', 'password123'))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('should dispatch LOGIN and LOGIN_FAILURE when API query fails', () => {
    fetchMock.getOnce('/login-success.json', {
      throws: new Error('API query failed'),
    });

    const expectedActions = [
      {
        type: LOGIN,
        user: { email: 'test@example.com', password: 'password123' },
      },
      { type: LOGIN_FAILURE },
    ];
    const store = mockStore({});

    return store
      .dispatch(loginRequest('test@example.com', 'password123'))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('should dispatch LOGIN and LOGIN_FAILURE when API returns an error response', () => {
    fetchMock.getOnce('/login-success.json', {
      status: 400,
      body: { success: false },
      headers: { 'content-type': 'application/json' },
    });

    const expectedActions = [
      {
        type: LOGIN,
        user: { email: 'test@example.com', password: 'password123' },
      },
      { type: LOGIN_FAILURE },
    ];
    const store = mockStore({});

    return store
      .dispatch(loginRequest('test@example.com', 'password123'))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('should dispatch LOGIN and LOGIN_FAILURE when API returns a network error', () => {
    fetchMock.getOnce('/login-success.json', {
      throws: new TypeError('Network request failed'),
    });

    const expectedActions = [
      {
        type: LOGIN,
        user: { email: 'test@example.com', password: 'password123' },
      },
      { type: LOGIN_FAILURE },
    ];
    const store = mockStore({});

    return store
      .dispatch(loginRequest('test@example.com', 'password123'))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});

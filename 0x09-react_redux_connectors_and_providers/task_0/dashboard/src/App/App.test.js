import React from "react";
import App from "./App";
import { shallow } from "enzyme";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import CourseList from "../CourseList/CourseList";
import { fromJS } from "immutable";
import { mapStateToProps } from "./App";

describe("App component", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toBeDefined();
  });

  it("renders the Notifications component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Notifications)).toHaveLength(1);
  });

  it("renders the Header component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header)).toHaveLength(1);
  });

  it("renders the Login component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Login)).toHaveLength(1);
  });

  it("renders the Footer component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Footer)).toHaveLength(1);
  });

  it("does not render the CourseList component when isLoggedIn is false", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(CourseList)).toHaveLength(0);
  });

  it("has a default state for displayDrawer as false", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state("displayDrawer")).toBe(false);
  });

  it("updates state to true when handleDisplayDrawer is called", () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state("displayDrawer")).toBe(true);
  });

  it("updates state to false when handleHideDrawer is called", () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleDisplayDrawer(); // First set it to true
    wrapper.instance().handleHideDrawer();
    expect(wrapper.state("displayDrawer")).toBe(false);
  });

  it("marks a notification as read when markNotificationAsRead is called", () => {
    const wrapper = shallow(<App />);
    const mockNotifications = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
    ];
    wrapper.setState({ notifications: mockNotifications });
    wrapper.instance().markNotificationAsRead(1);
    expect(wrapper.state("notifications")).toEqual([
      { id: 2, type: "urgent", value: "New resume available" },
    ]);
  });
});

describe("when isLoggedIn is true", () => {
  it("does not render the Login component", () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.find(Login)).toHaveLength(0);
  });

  it("renders the CourseList component", () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.find(CourseList)).toHaveLength(1);
  });
});

global.alert = jest.fn();

describe("App component", () => {
  let wrapper;
  const logOutMock = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<App logOut={logOutMock} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("calls logOut and shows alert when Control and h keys are pressed", () => {
    const event = {
      ctrlKey: true,
      key: "h",
    };

    wrapper.instance().handleKeyDown(event);
    expect(global.alert).toHaveBeenCalledWith("Logging you out");
    expect(logOutMock).toHaveBeenCalled();
  });
});

describe("mapStateToProps", () => {
  it("should return the right object when passing the state", () => {
    let state = fromJS({
      uiReducer: {
        isUserLoggedIn: true,
      },
    });
    const expectedProps = { isLoggedIn: true };
    expect(mapStateToProps(state)).toEqual(expectedProps);
  });

  it("should return the right object when isUserLoggedIn is false", () => {
    let state = fromJS({
      uiReducer: {
        isUserLoggedIn: false,
      },
    });
    const expectedProps = { isLoggedIn: false };
    expect(mapStateToProps(state)).toEqual(expectedProps);
  });
});

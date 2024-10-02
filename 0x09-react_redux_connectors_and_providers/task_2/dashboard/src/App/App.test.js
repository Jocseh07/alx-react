import React from "react";
import App from "./App";
import { shallow } from "enzyme";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
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

  it("renders the Footer component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Footer)).toHaveLength(1);
  });

  it("does not render the CourseList component when isLoggedIn is false", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(CourseList)).toHaveLength(0);
  });
});

describe("when isLoggedIn is true", () => {
  it("renders the CourseList component", () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.find(CourseList)).toHaveLength(1);
  });
});

describe("mapStateToProps", () => {
  it("should return the right object when passing the state", () => {
    let state = fromJS({
      uiReducer: {
        isUserLoggedIn: true,
        displayDrawer: false,
      },
    });
    const expectedProps = { isLoggedIn: true, displayDrawer: false };
    expect(mapStateToProps(state)).toEqual(expectedProps);
  });

  it("should return the right object when isUserLoggedIn is false", () => {
    let state = fromJS({
      uiReducer: {
        isUserLoggedIn: false,
        displayDrawer: true,
      },
    });
    const expectedProps = { isLoggedIn: false, displayDrawer: true };
    expect(mapStateToProps(state)).toEqual(expectedProps);
  });
});

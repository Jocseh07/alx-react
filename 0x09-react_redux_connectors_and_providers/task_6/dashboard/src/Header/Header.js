import React from "react";
import { connect } from "react-redux";
import { logout } from "../actions/authActions";
import logo from "../assets/holberton-logo.jpg";
import { StyleSheet, css } from "aphrodite";

const Header = ({ user, logout }) => {
  return (
    <header className={css(styles.AppHeader)}>
      <img src={logo} className={css(styles.AppLogo)} alt="logo" />
      <h1>School dashboard</h1>
      {user && (
        <div>
          <p>Welcome, {user.name}</p>
          <button onClick={logout}>Logout</button>
        </div>
      )}
    </header>
  );
};

const styles = StyleSheet.create({
  AppHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  "AppHeader h1": {
    color: "#E0344B",
  },
  AppLogo: {
    height: "300px",
  },
});

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

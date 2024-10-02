import React from "react";
import { connect } from "react-redux";
import "./Footer.css";
import { getFooterCopy, getFullYear } from "../utils/utils";

const Footer = ({ user }) => {
  const year = getFullYear();
  const copy = getFooterCopy(true);
  const { isLoggedIn } = user;

  return (
    <footer className="App-footer">
      <p>
        Copyright {year} - {copy}
      </p>
      {isLoggedIn && (
        <p>
          <a href="/contact">Contact us</a>
        </p>
      )}
    </footer>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(Footer);

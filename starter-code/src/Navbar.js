import React, { Component } from "react";
import CoolButton from "./CoolButton.js";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar is-transparent">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              alt="Bulma: a modern CSS framework based on Flexbox"
              width="112"
              height="28"
            />
          </a>
          <div
            className="navbar-burger burger"
            data-target="navbarExampleTransparentExample"
          >
            <span />
            <span />
            <span />
          </div>
        </div>

        <div id="navbarExampleTransparentExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item" href="https://bulma.io/">
              Home
            </a>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field is-grouped">
                <CoolButton
                  isSmall
                  isDanger
                  className="is-rounded my-class control"
                  value="Login"
                >
                  <a
                    className="bd-tw-button button"
                    data-social-network="Twitter"
                    data-social-action="tweet"
                    data-social-target="http://localhost:4000"
                    target="_blank"
                    href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=http://localhost:4000&amp;via=jgthms"
                  >
                    <span className="icon">
                      <i className="fab fa-twitter" />
                    </span>
                    <span />
                  </a>
                </CoolButton>
                <CoolButton
                  isSmall
                  isDanger
                  className="is-rounded my-class control"
                  value="Sign-up"
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

<CoolButton isSmall isSuccess value="Button 2" />;

export default Navbar;

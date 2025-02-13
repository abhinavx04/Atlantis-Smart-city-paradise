import React from "react";
import "./css/landing.css";
import Login from './Login'
import Signup from './Signup'
import LandingVideo from "./Images/videos/landing-video.mp4"
import Logo from "./Logo"

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.handleRegisterClick = this.handleRegisterClick.bind(this);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoClick = this.handleLoginClick.bind(this);
    //specifies what to render on the right side of the screen
    this.state = { whatShow: 0 };
  }



  //alters state for render() - login
  handleLoginClick() {
    this.setState({ whatShow: 1 });
  }

  //alters state for render() - login
  handleRegisterClick() {
    this.setState({ whatShow: 2 });
  }

  render() {
    //value is 1 or 2 when the button is clicked. default is 0 (to render logo)
    const whatShow = this.state.whatShow;
    let rightElement;
    switch (whatShow) {
      case 1: case 2:
        //makes necessary changes for rendering the login / signup
        document.querySelector('html').style.animation = "shrink 1s forwards";
        document.querySelector('#right-section').style.backgroundColor = '#0f0f0f';
        break;
      //exceptional case
      default:
        rightElement = function () { return <div></div> }
    }

    switch (whatShow) {
      case 0:
        //renders logo
        rightElement = <Logo className="logo short-logo" />;
        break;
      //sets the rightElement to login / signup when button is clicked.
      case 1:
        rightElement = <Login />;
        break;
      case 2:
        rightElement = <Signup />;
        break;
      default:

    }

    return (
      <React.Fragment>
        <video src={LandingVideo} type="video/mp4" autoPlay muted loop id="landing-video" />
        <section className="flex-section">
          <div id="left-section">
            <div className="left-section-container">
              <p className="special-text" id="atlantis-header">Atlantis</p>
              <p className="special-text" id="tag-line">A Smart Paradise</p>
              <p className="special-text" id="desc-line">Redefining our future together <br /> One step at a time    </p>
              <div className="show-items">
                <div>
                  <button onClick={this.handleLoginClick} id='login-button' className="show-button">Login</button>
                </div>

                <div className="login-signup-div text-center">
                  <hr className="align-middle" id='left-hr' /> or <hr className="align-middle" id='right-hr' />
                </div>
                <div>
                  <button onClick={this.handleRegisterClick} id="register-button" className="show-button">Register</button>
                </div>
              </div>
            </div>
          </div>

          <div id="right-section">
            {rightElement}
          </div>

        </section>
      </React.Fragment >
    )
  }
}

export default Landing;
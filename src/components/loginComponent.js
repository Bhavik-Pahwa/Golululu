import React, { Component } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";

const CLIENT_ID =
  "726248721946-lglpeldjdjunlblp4hqlphidt40d760e.apps.googleusercontent.com";

class LoginComponent extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      userInfo: {
        name: "",
        emailId: "",
      },
    };
  }

  // Success Handler
  responseGoogleSuccess = (response) => {
    console.log();
    let userInfo = {
      name: response.profileObj.name,
      emailId: response.profileObj.email,
    };
    this.setState({ userInfo, isLoggedIn: true });
    alert(`Welcome ${userInfo.name}`)
  };

  // Error Handler
  responseGoogleError = (response) => {
    console.log(response);
  };

  // Logout Session and Update State
  logout = (response) => {
    console.log(response);
    let userInfo = {
      name: "",
      emailId: "",
    };
    this.setState({ userInfo, isLoggedIn: false });
  };

  render() {
    return (
        <div>
          {this.state.isLoggedIn ? (
              <GoogleLogout
                clientId={CLIENT_ID}
                render={renderProps => (
                  <a className="rightbtn login" onClick={renderProps.onClick}>Logout</a>
                )}
                onLogoutSuccess={this.logout}
              ></GoogleLogout>
          ) : (
            <GoogleLogin
              clientId={CLIENT_ID}
              render={renderProps => (
                <a className="rightbtn login" onClick={renderProps.onClick}><img src="https://img.icons8.com/color/40/000000/google-logo.png"/>Sign In</a>
              )}
              onSuccess={this.responseGoogleSuccess}
              onFailure={this.responseGoogleError}
              isSignedIn={true}
              cookiePolicy={"single_host_origin"}
            />
          )}
        </div>
    );
  }
}
export default LoginComponent;
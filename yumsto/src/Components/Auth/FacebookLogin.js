import React from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
// import FacebookLogin from "react-facebook-login";
import "./FacebookLogin.scss";
const Login = () => {
  const responseFacebook = (response) => {
    console.log(response);
  };

  return (
    <FacebookLogin
      appId="227822988925453"
      fields="name,email,picture"
      callback={responseFacebook}
      
  render={renderProps => (
    <button className="fbLogin" onClick={renderProps.onClick}> <i class="fab fa-facebook-f"></i> Login</button>
  )}
      
    />
  );
};

export default Login;

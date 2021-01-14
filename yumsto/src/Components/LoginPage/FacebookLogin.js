import React from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
// import FacebookLogin from "react-facebook-login";
import "./FacebookLogin.scss";

const Login = () => {
  const responseFacebook = (resp) => {
    if (!resp && !resp.accessToken) {
      console.log(resp);
      alert("login failed");
      return;
    } else {
      console.log(resp);
      var user_token = resp.accessToken;
      var user_Data = resp.name;

      sessionStorage.setItem("facebook_user_token", JSON.stringify(user_token));
      sessionStorage.setItem("facebook_user_obj", JSON.stringify(user_Data));
      //   sessionStorage.setItem("Guser_obj", JSON.stringify(user_Data));
      
    }
  };

  return (
    <FacebookLogin
      appId="227822988925453"
      fields="name,email,picture"
      callback={responseFacebook}
      autoLoad={true}
      
  render={renderProps => (
    <button className="fbLogin" onClick={renderProps.onClick}> <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50977H7.19795L6.80206 13.4901H9.19795V21.5Z"
      fill=" #5e5ea8"
    />
  </svg> Login</button>
  )}
      
    />
  );
};

export default Login;

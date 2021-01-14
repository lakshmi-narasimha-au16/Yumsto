import React from "react";
import ReactDOM from "react-dom";
import GoogleLogin from "react-google-login";
import "./GoogleLogin.scss"
const Login = () => {

   const responseGoogle=(response)=>{
        console.log(response);

    }


  return (
    <div>
      <GoogleLogin
        clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
        render={(renderProps) => (
          <button  className="glogin" onClick={renderProps.onClick} disabled={renderProps.disabled}>
           <i class="fab fa-google"></i> Login
          </button>
        )}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
};

export default Login;

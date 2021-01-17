import React from "react";
import GoogleLogin from "./GoogleLogin";
import FacebookLogin from "./FacebookLogin";
import "./LoginPage.scss";
import { userData, isAuthenticated, registration, signIn } from '../../Store/Actions/authActions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

// const RegUrl = "https://yumsjwt.herokuapp.com/register"
// const LoginUrl = "https://yumsjwt.herokuapp.com/auth/login"

class Details extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name:"",
      email:"",
      password:"",
      userNameError:"",
      passwordError:"",
      emailError:"",
      credentialsError:""
    }
  }

  nameChange = (e) => {
    this.setState({...this.state, name:e.target.value})
  }

  emailChange = (e) => {
    this.setState({...this.state, email:e.target.value})
  }

  passwordChange = (e) => {
    this.setState({...this.state, password:e.target.value})
  }

  registrationFormHandler = async (e)=>{
    e.preventDefault()
    const status = await registration(this.state)
    if(status!=="success"){
      this.setState({...this.state, error:status})
    }
    else{
      this.props.history.push('/login')
    }
  }
  

  loginFormHandler = async (e)=>{
    e.preventDefault()
    const userdata = await signIn(this.state)
    if(userdata ===undefined){
      this.props.dispatch(isAuthenticated(false))
      this.setState({...this.state, credentialsError:"Invalid email or Password"})
    }
    else{
      this.props.dispatch(userData(userdata))
      this.props.dispatch(isAuthenticated(true))
      this.props.history.push("/")
    }
  }

  render(){
    return (
    <div className="loginRow">
      <div className="col">
        <img src="https://www.wholesomeyum.com/wp-content/uploads/2019/09/wholesomeyum-keto-chaffles-recipe-sweet-savory-5-ways-24.jpg" alt="bgimg"/>
      </div>
      <div className="col loginCol">
        <div className="contentRow">
          <div className="content">
            <div className="regGrp">
              <h4
                className={`regtitle ${this.props.register && "extregtitle"}`}
                onClick={this.props.registerHandler}
              >
                REGISTER
              </h4>

              <h4
                className={`logtitle ${this.props.login && "extlogtitle"}`}
                onClick={this.props.loginHandler}
              >
                LOGIN
              </h4>
            </div>

            <div className="flip-container">
              <div className={`flipper ${this.props.login && "flip"} `} id="flipper">
                {this.props.register && (
                  <form className="register" onSubmit={this.registrationFormHandler}>
                    <div>
                      <label htmlFor="name">NAME</label>
                      <input type="text" name="name" onChange={this.nameChange} value = {this.state.name} />
                      <span>{this.state.usernameError}</span>
                    </div>
                    <div>
                      <label htmlFor="email">EMAIL</label>
                      <input type="email" name="email" onChange={this.emailChange} value = {this.state.email}/>
                      <span>{this.state.emailError}</span>
                    </div>
                    <div>
                      <label htmlFor="password">PASSWORD</label>
                      <input type="password" name="password" onChange={this.passwordChange} value = {this.state.password} />
                      <span>{this.state.passwordError}</span>
                    </div>

                    <button className="regbutt" value="submit">SIGN UP</button>
                  </form>
                )}

                {this.props.login && (
                  <form className="login" onSubmit={this.loginFormHandler}>
                    <div>
                      <label htmlFor="email">EMAIL</label>
                      <input type="email" name="email" onChange={this.emailChange} value = {this.state.email}/>
                    </div>
                    <div>
                      <label htmlFor="password" >PASSWORD</label>
                      <input type="password" name="password" onChange={this.passwordChange} value={this.state.password} />
                    </div>
                    <span>{this.state.credentialsError}</span>
                    <button className="logbutt" value="submit">SIGN IN</button>
                    
                    <p>
                      <center>OR</center>
                    </p>
                    <div className="gfbButtGrp">
                      <GoogleLogin className="googlelogin" />
                      <FacebookLogin className="facebooklogin" />
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  }                
};

// const mapStateToProps = (state) => {

// }

export default connect()(withRouter(Details));

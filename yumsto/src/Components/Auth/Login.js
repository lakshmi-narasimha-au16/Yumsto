import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import "./styles/login.scss"
import { userData, isAuthenticated } from '../../Store/Actions/authActions'

const loginUrl = "https://yumsjwt.herokuapp.com/auth/login"

class Login extends React.Component{
    constructor(){
        super()
        this.state = {
            email: "",
            password: "",
            error:""
        }
    }

    emailHandler= (e) => {
        this.setState({
            ...this.state,
            email:e.target.value
        })
    }
    passwordHandler= (e)=>{
        this.setState({
                ...this.state,
                password:e.target.value
            })
    }

    formsubmission = (e) => {
        e.preventDefault()
        const loginData = {email:this.state.email, password:this.state.password}
        fetch(loginUrl,{
            method: "post",
            body:JSON.stringify(loginData),
            headers:{
                "Content-Type":"application/json",
                "Access-Control-Allow-Origin": "*"
            }
        })
        .then(res=>res.json())
        .then(data=>{
            sessionStorage.setItem("_ltk", data.access_token)
            this.props.dispatch(userData(data.userdetails))
            this.props.dispatch(isAuthenticated(true))
        })
        .catch((err)=>{
            this.setState({...this.state, error:err})
            console.log(err)
        })
    }
    render(){
        return(
            <div className="loginContainer">
                <h1>Login Here</h1>
                <hr/>
                <form onSubmit={this.formsubmission} className="loginForm">
                    <div className="Fields">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" value={this.state.email} onChange={this.emailHandler}/>
                    </div>
                    <div className="Fields">
                        <label htmlFor="password" >Password</label>
                        <input type="password" name="password" value={this.state.password} onChange={this.passwordHandler}/>
                    </div>
                    <div className="Fields">
                        <button value="submit"className="loginBtn">Sign In</button>
                    </div>
                    
                </form>
                <hr/>
                <div>Already Have an Account! <small><Link>Sign In</Link></small></div>
            </div>
        )
    }
}
const mapStateToProps= (state)=>{
    return{}
}
export default connect(mapStateToProps)(Login)

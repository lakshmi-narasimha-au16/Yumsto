
import React from "react"
import Navigation from '../Navigation'

import LoginDetail from "./LoginPageDisplay"

class LoginPage extends React.Component{

    constructor(){
        super()
        this.state={
            login:true,
            register:false
        }
    }

    registerHandler=()=>{
        console.log("register")
        this.setState({
            ...this.state,
            register:true,
            login:false
        })
    }

    loginHandler=()=>{
        console.log("login")
        this.setState({
            ...this.state,
            register:false,
            login:true
        })
    }

    render(){
        return(
            <React.Fragment>
                <header>
                    <Navigation/>
                    <LoginDetail  
                    registerHandler={this.registerHandler}
                    loginHandler={this.loginHandler}
                    login={this.state.login}
                    register={this.state.register}
                    />
                </header>
                
            </React.Fragment>
        )
    }


}


export default LoginPage

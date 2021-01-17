import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import "./Navigation.scss"
import { connect } from "react-redux"
import { userData, isAuthenticated } from "../Store/Actions/authActions"

class Navigation extends React.Component{
    constructor(){
        super()
        this.state= {
            isOpen:true
        }
    }
   
    toggleMenu = () =>{
        if(this.state.isOpen===false){
            this.setState({isOpen:true})
        }
        else{
            this.setState({isOpen:false})
        }
    }

    logoutHandler= () => {
        sessionStorage.removeItem('_ltk')
        this.props.dispatch((userData({})))
        this.props.dispatch((isAuthenticated(false)))
    }

    conditionalRender = ()=>{
        const token = sessionStorage.getItem('_ltk')
        if(token==="undefined" || token==null || !this.props.isLogged){
            if(this.props.match.url==="/login"){
                return(
                    <></>
                )
            }
            else{
                return(
                <React.Fragment>
                    <li><Link to="/login" className="links">Login/Register</Link></li>
                </React.Fragment>
                )
            }
        }
        else{
            return (
                <React.Fragment>
                    <li>Welcome {this.props.username.name}</li>
                    <li><Link to="/mealplans" className="links">My Plans</Link></li>
                    <li><Link onClick={this.logoutHandler} className="links">Logout</Link></li>
                </React.Fragment>
            )
        }
    }
   
    render(){
        
        return(
        <nav className="navbar">
            <div className='logo'>
                <h1><Link to="/">YUMSTO</Link></h1>
            </div>
            <div className="hamburger" onClick={this.toggleMenu}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <ul className={this.state.isOpen?"nav-links":"nav-links open"}>
                {this.conditionalRender()}
            </ul>
        </nav>    
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        isLogged:state.auth_reducer.is_authenticated,
        username: state.auth_reducer.userdata
    }
}
export default connect(mapStateToProps)(withRouter(Navigation))
import React from 'react'
import { Link } from 'react-router-dom'
import "./Navigation.scss"
import { connect } from "react-redux"

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

    conditionalRender = ()=>{
        const token = sessionStorage.getItem('_ltk')
        if(token===undefined || token==null){
            return(
                <React.Fragment>
                    <li><Link to="/login" className="links">Login</Link></li>
                    <li><Link to="/login" className="links">Register</Link></li>
                </React.Fragment>
            )
        }
        else{
            return (
                <React.Fragment>
                    <li><Link className="links">Welcome {this.props.username.name}</Link></li>
                </React.Fragment>
            )
        }
    }
   
    render(){
        return(
        <nav class="navbar">
            <div className='logo'>
                <h1><Link to="/">YUMSTO</Link></h1>
            </div>
            <div class="hamburger" onClick={this.toggleMenu}>
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </div>
            <ul class={this.state.isOpen?"nav-links":"nav-links open"}>
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
export default connect(mapStateToProps)(Navigation)
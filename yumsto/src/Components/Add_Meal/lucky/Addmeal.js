import React from 'react'
import Navigation from '../../Navigation'
import axios from "axios"
import { apiKey1 } from "../../../Store/Actions/apikey"
import { addMealPlan, getMealPlans} from '../../../Store/Actions/addMealActions'
import { connect } from "react-redux"
import MealPlans from "./MealPlans.js"
import "./styles/Addmeal.scss"

const date = new Date()
const base_url = "https://api.spoonacular.com/"


class Addmeal extends React.Component{

    constructor(){
        super()
        this.state={
            stateDate:`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`,
            slot:"1",
            mealType:"recipes",
            searchMeal:"",
            suggestions:[],
            item:""
        }
    }

    componentDidMount = async ()=>{
        const spoonuserdata = this.props.userdata
        const spoonuser=spoonuserdata.spoonUserHash.username 
        const spoonhash = spoonuserdata.spoonUserHash.hash 
        let a = date.getDay()!==0 ? date.setDate(date.getDate()-date.getDay()): date;
        a = new Date(a)
        a = `${a.getFullYear()}-${a.getMonth()+1}-${a.getDate()}`
        console.log(a)
        await this.props.dispatch(getMealPlans(spoonuser, a, spoonhash))
    }

    setDate = (e) => {
        var myDate = e.target.value
        myDate = myDate.split("-");
        var timeStamp = new Date( myDate[0], myDate[1] - 1, myDate[2])
        this.setState({...this.state, stateDate:timeStamp})
    }

    slotHandler = (e) => {
        this.setState({...this.state, slot:e.target.value})
    }

    mealTypeHandler = (e) => {
        this.setState({...this.state, mealType:e.target.value})
    }

    searchHandler = async (e) => {
        await this.setState({...this.state, searchMeal:e.target.value})
        await this.searchSuggestions()
    }

    

    searchSuggestions = async() => {
        let url;
        if(this.state.mealType==="recipes"){
            url = `${base_url}recipes/complexSearch?query=${this.state.searchMeal}&apiKey=${apiKey1}&number=5`
        }
        else{
            url = `${base_url}food/${this.state.mealType}/search?query=${this.state.searchMeal}&apiKey=${apiKey1}&number=5`
        }
        const results = await axios.get(url).then(res=>{
            return res.data}
            )
        const mealtype = this.state.mealType
        if(mealtype==="recipes" || mealtype==="ingredients"){
            this.setState({...this.state, suggestions:await results.results})
        }
        else if(mealtype==="products"){
            this.setState({...this.state, suggestions:await results.products})
        }
        else if(mealtype==="menuItems"){
            this.setState({...this.state, suggestions:await results.menuItems})
        }
        
    }

    suggestionsRender = () => {
        return this.state.suggestions.map((item, idx) => {
            return (
                <li className="searchItem" key={item.id} value={idx}>
                    {item.title || item.name }
                </li>
            )
        })
    }

    listItemSelector = (e) => {
        this.setState({...this.state, searchMeal:this.state.suggestions[e.target.value].title || this.state.suggestions[e.target.value].name, item:this.state.suggestions[e.target.value],suggestions:[]})
    }

    addMealFormHandler = async (e) => {
        e.preventDefault()
        const formData = {...this.state}
        delete formData.suggestions 
        let MealType = this.state.mealType
        let MEALTYPE = MealType==="ingredients"?"INGREDIENTS":MealType==="recipes"?"RECIPE":MealType==="products"?"PRODUCT":"MENU_ITEM"
        const obj = {date:formData.stateDate, slot:formData.slot, position:0, type:MEALTYPE, value:this.state.item}
        const spoonuserdata = this.props.userdata
        const spoonuser=spoonuserdata.spoonUserHash.username 
        const spoonhash = spoonuserdata.spoonUserHash.hash
        const data = await addMealPlan(spoonuser, spoonhash, obj)
        let a = date.getDay()!==0 ? date.setDate(date.getDate()-date.getDay()): date;
        a = new Date(a)
        a = `${a.getFullYear()}-${a.getMonth()+1}-${a.getDate()}`
        await this.props.dispatch(getMealPlans(spoonuser, a, spoonhash))
        console.log(data)
    }

    render(){
        const bgStyle = { 
            backgroundImage: `url(${process.env.PUBLIC_URL + './images/mealpage/mealPageBg.jpg'})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            height: '50vh',
        }
        if(this.props.isLoggedIn !==true || this.props.isLoggedIn ===undefined){
            this.props.history.push("/login")
        }
        return(
            <React.Fragment>
                <header style={bgStyle}>
                    <Navigation />
                    <form className="mealPlanForm" onSubmit={this.addMealFormHandler}>
                        <div className="fields">
                            <label>Choose Date</label>
                            <input type="date" onChange={this.setDate} className="mealDateField" />
                        </div>
                        <div className="fields">
                            <label>Select Slot</label>
                            <select className="selectField" onChange={this.slotHandler} value={this.state.slot}>
                                <option value="1">Break Fast</option>
                                <option value="2">Lunch</option>
                                <option value="3">Dinner</option>
                            </select>
                        </div>
                        <div className="fields">
                            <label>Meal Type</label>
                            <select className="selectField" onChange={this.mealTypeHandler} value={this.state.mealType}>
                                <option value="recipes">Recipes</option>
                                <option value="ingredients">Ingredients</option>
                                <option value="products">Products</option>
                                <option value="menuItems">Menu Items</option>
                            </select>
                        </div>
                        <div className="fields">
                            <label>search meal</label>
                            <input type="text" className="searchMeal" value={this.state.searchMeal} onChange={this.searchHandler}/>
                            {(this.state.suggestions.length>0 ?
                            <ul className="mealSuggestions" onClick={this.listItemSelector}>
                                {this.suggestionsRender()}
                            </ul>
                                : 
                            <></>
                            ) }
                            
                        </div>
                        <div className="fields">
                            <button className="addMealButton" value="submit">Add Meal</button>
                        </div>
                    </form>
                </header>
                <main>
                    <h1>MEAL PLANS OF THIS WEEK</h1>
                    <MealPlans mealPlans = {this.props.mealPlans}/>
                </main>

            </React.Fragment>
            )
    }
}

const mapStateToProps =(state) => {
    return {
        mealPlans: state.mealPlanReducer.MealPlans,
        isLoggedIn: state.auth_reducer.is_authenticated,
        userdata: state.auth_reducer.userdata
    }
}

export default connect(mapStateToProps)(Addmeal)
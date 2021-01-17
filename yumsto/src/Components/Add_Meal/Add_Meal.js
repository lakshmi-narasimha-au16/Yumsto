import React from "react"
import axios from "axios"

import Details from "./Add_Meal_Display"

const url="https://api.spoonacular.com/recipes/complexSearch"
const key="97405f6dd7504936bc7cc61c0adbae96";
class AddingMeal extends React.Component{

    constructor(){
        super()
        this.state={
            apiData:"",
            searchInputVal:"",
            diet:"",
            choosenRecipe:"",
            imageId:""
        }
    }

    dietSelectHandler=(e)=>{
            this.setState({
                ...this.state,
                diet:e.target.value
            })
    }

    searchInputHandler=(e)=>{
        this.setState({
            ...this.state,
            searchInputVal:e.target.value
        })
    }

    searchClickHandler=()=>{
        axios.get(`${url}?diet=${this.state.diet}&query=${this.state.searchInputVal}&apiKey=${key}`)
        .then(resp=>{
            this.setState({
                ...this.state,
                searchInputVal:"",
                apiData:resp.data.results
            })
        })
    
    }

    RecipechooseHandler=(id,title)=>{
        this.setState({
            ...this.state,
            RecipeId:id,
            RecipeTitle:title,
            choosenRecipe:title,
            apiData:"",
        })
    }

    imageMouseOver = (id) => {
        this.setState({
          ...this.state,
          imageId: id,
        });
    };

    imageMouseLeave = () => {
    this.setState({
        ...this.state,
        imageId: "",
    });
    };

    render(){
        return(
            <div>
                <Details  
                dietSelectHandler={this.dietSelectHandler}
                apiData={this.state.apiData}
                searchInputVal={this.state.searchInputVal}
                searchInputHandler={this.searchInputHandler}
                searchClickHandler={this.searchClickHandler}
                RecipechooseHandler={this.RecipechooseHandler}
                choosenRecipe={this.state.choosenRecipe}
                imageMouseOver={this.imageMouseOver}
                imageMouseLeave={this.imageMouseLeave}
                imageId={this.state.imageId}
                />
            </div>
        )
    }
}
export default AddingMeal
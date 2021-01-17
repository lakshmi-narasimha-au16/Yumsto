import React from "react"
import {Link} from "react-router-dom"
import "./styles/SimilarRecipes.scss"


const Detail=(props)=>{

    const {similarRecipesApiData,dummystateupdate} = props

    const renderSimilarRecipes=()=>{
    if (similarRecipesApiData){
        if (similarRecipesApiData){
            return similarRecipesApiData.map((Recipe,idx)=>{
                return(
                    <Link style={{textDecoration:"none"}} to={`/details/${Recipe.id}`} key={idx}>
                    <div onClickCapture={dummystateupdate} className="similarRecipesCol">
                        <img src={`https://spoonacular.com/recipeImages/${Recipe.id}-240x150.jpg`} alt="recipe"/>
                        <p>{Recipe.title}</p>
                    </div>
                    </Link>
                )
            })
        }
    }
    }

    return(
        <div>
            <h2 className="similarRecipesTitle">Similar Recipes</h2>
            <div className="similarRecipesRow">
                {renderSimilarRecipes()}
            </div>
        </div>
    )
}

export default Detail
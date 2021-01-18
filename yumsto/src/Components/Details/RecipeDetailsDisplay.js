import React from "react";
import {Link} from "react-router-dom"
import "./styles/lucky/RecipeDetails.scss";
// import './styles/RecipeDetails.scss'


const Details = (props) => {
  const { infoApiData, nutritionApiData } = props;
  const cusines = () => {
    if (infoApiData.cuisines) {
      if (infoApiData.cuisines.length > 0) {
        return infoApiData.cuisines.map((cusine,idx) => {
          return (
            <React.Fragment key={idx}>
              {cusine}
            </React.Fragment>
          );
        })
      }
    }
  }
  const dishTypes = () => {
    if (infoApiData) {
      if (infoApiData.dishTypes.length > 0) {
        return infoApiData.dishTypes.map((dish,idx) => {
          return (
            <React.Fragment key={idx}>
              {dish}
            </React.Fragment>
          );
        });
      }
    }
  };
  const diets = () => {
    if (infoApiData) {
      if (infoApiData.diets.length > 0) {
        return infoApiData.diets.map((diet,idx) => {
          return (
            <React.Fragment key={idx}>
              {diet}
            </React.Fragment>
          );
        });
      }
    }
  };
  const occasions = () => {
    if (infoApiData) {
      console.log(infoApiData)
      if (infoApiData.occasions.length > 0) {
        return infoApiData.occasions.map((occasion,idx) => {
          return (
            <React.Fragment key={idx}>
              {occasion}
            </React.Fragment>
          );
        });
      }
    }
  };

  return (
    <div className="recipeDetailContainer">
      <h1 className="detailsTitle">{infoApiData && infoApiData.title}</h1>
      <div className="star">
        <span className="material-icons">star</span>
        <span className="material-icons">star</span>
        <span className="material-icons">star</span>
        <span className="material-icons">star</span>
        <span className="material-icons">star_half</span>
      </div>
      <p className="detailsPara">
        Made popular through Elvis Presley's film Blue Hawaiian, the Mai Tai is
        a classic tropical
      </p>
      <div className="recipeImgRow">
        <div className="recipeImgCol">
          <img src={infoApiData && infoApiData.image} alt="recipe"/>
        </div>

        <div className="recipeImgCol">
          <div className="tinyNutriInfo">
            <p>
              <strong>Health Score:</strong>{" "}
              {infoApiData && infoApiData.healthScore}
            </p>
            <p style={{position:"relative"}}>
              <strong style={{marginRight:"20px"}}>Prep<span style={{width:"30px", Top:"5px", position:"absolute"}} className="material-icons timer">
                  schedule
            </span></strong><strong> : </strong> {infoApiData && infoApiData.readyInMinutes}{" "}
              min
            </p>
            <p>
              <strong>Servings:</strong> {infoApiData && infoApiData.servings}
            </p>
            <p>
              <strong>Calories:</strong>{" "}
              {nutritionApiData && nutritionApiData.calories}
            </p>
            <p>
              <strong>Protein:</strong>{" "}
              {nutritionApiData && nutritionApiData.protein}
            </p>
            <p>
              <strong>Carbs:</strong>{" "}
              {nutritionApiData && nutritionApiData.carbs}
            </p>
            <p>
              <strong>Fat:</strong> {nutritionApiData && nutritionApiData.fat}
            </p>
            <a href="#godNutrients">
              <div className="morenutriInfo">
                More Nutrition Info
              </div>
            </a>
            
          </div>
        </div>
        <div className="recipeImgCol">
          <div className="varieties">
            <div>cuisines  {cusines()}</div>
            <div>dishTypes  {dishTypes()}</div>
            <div>diets  {diets()}</div>
            <div>occasions  {occasions()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;

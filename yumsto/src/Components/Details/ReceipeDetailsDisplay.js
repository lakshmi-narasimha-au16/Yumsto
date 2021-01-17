import React from "react";

import "./styles/ReceipeDetails.scss";
const Details = (props) => {
  const { infoApiData, nutritionApiData } = props;


  const cusines = () => {
    if (infoApiData) {
      if (infoApiData.cuisines.length > 0) {
        return infoApiData.cuisines.map((cusine,idx) => {
          return (
            <React.Fragment key={idx}>
              
              <p>{cusine}</p>
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
              
              <p>{dish}</p>
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
              
              <p>{diet}</p>
            </React.Fragment>
          );
        });
      }
    }
  };
  const occasions = () => {
    if (infoApiData) {
      if (infoApiData.occasions.length > 0) {
        return infoApiData.occasions.map((occasion,idx) => {
          return (
            <React.Fragment key={idx}>
              
              <p>{occasion}</p>
            </React.Fragment>
          );
        });
      }
    }
  };

  return (
    <div  >
      
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

      
      <div className="receipeImgRow">
        <div className="receipeImgCol">
          <img src={infoApiData && infoApiData.image} />
        </div>

        <div className="receipeImgCol">
          <div className="tinyNutriInfo">
            <p>
              <strong>Health Score:</strong>{" "}
              {infoApiData && infoApiData.healthScore}
            </p>
            <p>
              <strong>Prep:</strong> {infoApiData && infoApiData.readyInMinutes}{" "}
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
            <div className="morenutriInfo"><center>Nutrition Info</center></div></a>
            
                <span className="material-icons timer">
                  schedule
                  </span>
          </div>
        </div>
        <div className="receipeImgCol">
          <div className="varieties">
          <div>
          <p>cuisines</p>{cusines()}</div>
          <div><p>dishTypes</p>{dishTypes()}</div>
          <div><p>diets</p>{diets()}</div>
          <div><p>occasions</p>{occasions()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;

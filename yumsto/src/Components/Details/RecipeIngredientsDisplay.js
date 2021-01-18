import React from "react";
// import "./styles/RecipeIngredients.scss";
import "./styles/lucky/RecipeIngredients.scss";

const Detail = (props) => {
  const { ingredientsApiData, equipmentApiData,infoApiData,nutritionApiData,tasteWidgetApiData } = props;
  console.log(props);
  const renderIngredients = () => {
    if (ingredientsApiData.ingredients) {
      if (ingredientsApiData.ingredients) {
        return ingredientsApiData.ingredients.map((ingre, idx) => {
          return (
            <div className="ingreCol" key={idx}>
              <p className="val">
                {ingre.amount.us.value} {ingre.amount.us.unit}
              </p>
              <img
                src={`https://spoonacular.com/cdn/ingredients_100x100/${ingre.image}`}
              alt ="ingredient"/>
              <p>{ingre.name}</p>
            </div>
          );
        });
      } else {
        return <div>No Data Found</div>;
      }
    }
  };

  const renderEquipment = () => {
    if (equipmentApiData) {
      if (equipmentApiData.equipment) {
        return equipmentApiData.equipment.map((equip, idx) => {
          return (
            <div className="equipCol" key={idx}>
              <img
                src={`https://spoonacular.com/cdn/ingredients_100x100/${equip.image}`}
              alt="equip"/>

              <p>{equip.name}</p>
            </div>
          );
        });
      } else {
        return <div>No Data Found</div>;
      }
    }
  };

  const renderInstructions = () => {
    if (infoApiData) {
      
      if (infoApiData.analyzedInstructions) {
        if (infoApiData.analyzedInstructions[0].steps) {
          return infoApiData.analyzedInstructions[0].steps.map(
            (instruc, idx) => {
              return (
                <React.Fragment key={idx}>
                  <div className="instructionsCol">
                    <h3><span className="material-icons">check_circle </span>  Step {instruc.number}</h3>
                    <p>{instruc.step}</p>
                  </div>
                </React.Fragment>
              );
            }
          )
        }
      }
    }
  };


  const renderGoodNutrients=()=>{
    if (nutritionApiData){
      if (nutritionApiData.good){
        return nutritionApiData.good.map((good,idx)=>{
          return(
            <React.Fragment key={idx}>
              <p><strong>{good.title}:</strong> {good.amount}</p>
            </React.Fragment>
          )
        })
      }
    }
  }
 const renderBadNutrients=()=>{
    if (nutritionApiData){
      if (nutritionApiData.bad){
        return nutritionApiData.bad.map((bad,idx)=>{
          return(
            <React.Fragment key={idx}>
              <p><strong>{bad.title}:</strong> {bad.amount}</p>
            </React.Fragment>
          )
        })
      }
    }
  }

  const renderTasteReport=()=>{
    if (tasteWidgetApiData){
      return(
        <React.Fragment>
          <p><strong>Sweetness</strong>: {tasteWidgetApiData.sweetness}</p>
          <p><strong>Saltiness</strong>: {tasteWidgetApiData.saltiness}</p>
          <p><strong>Sourness</strong>: {tasteWidgetApiData.sourness}</p>
          <p><strong>Bitterness</strong>: {tasteWidgetApiData.bitterness}</p>
          <p><strong>Savoriness</strong>: {tasteWidgetApiData.savoriness}</p>
          <p><strong>Fattiness</strong>: {tasteWidgetApiData.fattiness}</p>
          <p><strong>Spiciness</strong>: {tasteWidgetApiData.spiciness}</p>
        </React.Fragment>
      )
    }
  }

  return (
    <div className="ingredientsContainer">
      <div className="ingredientsChild">
        <h2 className="ingreTitle">Ingredients</h2>
        <div className="ingreRow">{renderIngredients()}</div>
      </div>
      <div className="ingredientsChild">
        <h2 className="equipTitle">Equipment</h2>
        <div className="equipRow">{renderEquipment()}</div>
      </div>
      <div className="ingredientsChild">
        <h2 className="instrucTitle">Directions</h2>
        <div className="instructionsRow">{renderInstructions()}</div>
      </div>
      <div className="nutritionFullInfoRow" id="godNutrients">
        <div className="nutritionFullInfoCol">
          <h3  className="enough">Get Enough Of These</h3>
             {renderGoodNutrients()}
        </div>
        <div className="nutritionFullInfoCol">
          <h3 className="limit">Limit These</h3>
             {renderBadNutrients()}
        </div>
        <div className="nutritionFullInfoCol">
          <h3 className="report">Taste Report</h3>
             {renderTasteReport()}
        </div>
      </div>
    </div>
  );
};

export default Detail;

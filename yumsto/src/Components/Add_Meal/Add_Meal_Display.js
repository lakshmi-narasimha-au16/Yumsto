import React from "react";
import "./Add_Meal.scss"



const Details = (props) => {
  // console.log(props);
  const { dietSelectHandler, apiData,searchInputHandler,searchClickHandler,searchInputVal,receipechooseHandler,choosenReceipe } = props;
  
 const renderSearchResults = (apiData) => {
   
    if (apiData) {
      if (apiData.length > 0){

     
      
      const data = apiData.slice(0, 5);
      
      return data.map((filData) => {

        // console.log( "data",filData);
        return (
          <React.Fragment key={filData.id}>
            <div className="searchResults" onClick={()=>receipechooseHandler(filData.id,filData.title)}>
              <p>{filData.title}</p>
              <img className="searchImg" src={filData.image}  />
            </div>
            <img className="resultlargeImg" src={filData.image} />
          </React.Fragment>
        );
      });
    }else{
      <div>No Results Found</div>
    }
    }
  };

  return (
    <div className="addMealRow">
      

      <div className="col">

      <h1>Plan receipes that in your life</h1>
      <p>
        Decide when you would like to eat your recipes by placing them on your
        calendar
      </p>
      <div>
        <label htmlFor="mealBox">Choose Meal Box</label>
        <select id="mealBox" defaultValue="Choose">
          <option disabled>Choose</option>
          <option>Breakfast</option>
          <option>Lunch</option>
          <option>Dinner</option>
          <option>Snack</option>
        </select>
        <label htmlFor="diet">Choose Diet Plan</label>
        <select onChange={dietSelectHandler} id="diet" defaultValue="Choose">
          <option disabled>Choose</option>
          <option>Gluten Free</option>
          <option>Vegetarian</option>
          <option>Lacto-Vegetarian</option>
          <option>Vegan</option>
          <option>Ketogenic</option>
        </select>
        <input className="searchBar" value={searchInputVal} onChange={searchInputHandler} />
        <span className="searchIcon" onClick={searchClickHandler} className="material-icons">
            search
            </span>
        {renderSearchResults(apiData)}
        <label>Choosen Receipe</label>
  <h4>{choosenReceipe}</h4>

  <input type="date" />
  </div>
      </div>
    </div>
  );
};

export default Details;

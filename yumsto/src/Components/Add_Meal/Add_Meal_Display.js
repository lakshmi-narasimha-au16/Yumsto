import React from "react";
import "./styles/Add_Meal.scss";

const Details = (props) => {
  // console.log(props);
  const {
    dietSelectHandler,
    apiData,
    searchInputHandler,
    searchClickHandler,
    searchInputVal,
    RecipechooseHandler,
    choosenRecipe,
    imageMouseOver,
    imageMouseLeave,
    imageId,
  } = props;

  const renderHover = (imgUrl, passingId) => {
    if (passingId === imageId) {
      return <img className="resultlargeImg" src={imgUrl} alt="passedImg" />;
    }
  };

  const renderSearchResults = (apiData) => {
    if (apiData) {
      if (apiData.length > 0) {
        const data = apiData.slice(0, 5);
        return data.map((filData) => {
          return (
            <React.Fragment key={filData.id}>
              <div
                className="searchResults"
                onClick={() => RecipechooseHandler(filData.id, filData.title)}
                onMouseOver={() => imageMouseOver(filData.id)}
                onMouseLeave={imageMouseLeave}
              >
                <p>{filData.title}</p>

                {renderHover(filData.image, filData.id)}
              </div>
            </React.Fragment>
          );
        });
      } else {
        <div>No Results Found</div>;
      }
    }
  };

  return (
    <div className="addMealRow">
      <div className="mealcol">
        <h1 className="title">Plan Recipes that in your life</h1>
        <p className="para">
          Decide when you would like to eat your recipes by placing them on your
          calendar
        </p>
        
          <div>
            <label htmlFor="mealBox">Choose Meal Box</label>
            <select
              className="choosemealbox"
              id="mealBox"
              defaultValue="Choose"
            >
              <option disabled>Choose</option>
              <option>Breakfast</option>
              <option>Lunch</option>
              <option>Dinner</option>
              <option>Snack</option>
            </select>
          </div>
          <div>
            <label htmlFor="diet">Choose Diet Plan</label>
            <select
              className="dietplan"
              onChange={dietSelectHandler}
              id="diet"
              defaultValue="Choose"
            >
              <option disabled>Choose</option>
              <option>Gluten Free</option>
              <option>Vegetarian</option>
              <option>Lacto-Vegetarian</option>
              <option>Vegan</option>
              <option>Ketogenic</option>
            </select>
          </div>
          <label>Choose Date </label>
          <input type="date" className="date" />
          <div className="search">
            <input
              placeholder="Search Your Favorite food"
              className="searchBar"
              value={searchInputVal}
              onChange={searchInputHandler}
            />
            <span
              onClick={searchClickHandler}
              className="material-icons searchIcon"
            >
              search
            </span>
          </div>
          <div className="searchresultDiv">{renderSearchResults(apiData)}</div>
          
            <label className="choosenRecipe">
              <strong>Selected Recipe :</strong>
            </label>
            <h4 className="Recipe">{choosenRecipe}</h4>
          
        
      </div>
    </div>
  );
};

export default Details;

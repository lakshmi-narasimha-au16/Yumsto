import React from "react";
import { Link } from "react-router-dom";
import "./styles/Add_Meal.scss";

const Details = (props) => {
  // console.log(props);
  const {
    apiData,
    searchInputHandler,
    searchClickHandler,
    searchInputVal,
    receipechooseHandler,
    choosenReceipe,
    imageMouseOver,
    imageMouseLeave,
    imageId,
    mealboxHandler,
    DietHandler,
    dateHandler,
    addmealClickHandler,
    mealSelectionError,
    duplicateRecipe,
    viewMealsData,
    mealsApi,
    filterViewMealData,
    filterViewDietData,
    filterViewDateData,
    deleteRecipe,
  } = props;

  const renderHover = (imgUrl, passingId) => {
    if (passingId === imageId) {
      return <img className="resultlargeImg" src={imgUrl} alt="recipeHoverImage" />;
    }
  };

  const renderSearchResults = (apiData) => {
    if (apiData) {
      if (apiData.length > 0) {
        const data = apiData.slice(0, 5);

        return data.map((filData) => {
          // console.log( "data",filData);
          return (
            <React.Fragment key={filData.id}>
              <div
                className="searchResults"
                onClick={() => receipechooseHandler(filData.id, filData.title)}
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

  const renderViewMeals = () => {
    if (viewMealsData) {
      if (viewMealsData.length > 0) {
        return viewMealsData.map((meal, idx) => {
          return (
            <div key={idx} className="viewCol">
              <img src={meal.image} alt="recipeImage" />
              <p>{meal.title}</p>
              <Link to={`/details/${meal.id}`}>
                <button>MORE INFO</button>
              </Link>
              <div className="deletediv">
                <span
                  onClick={() => deleteRecipe(meal.id)}
                  className="material-icons"
                >
                  delete
                </span>
                <small className="small">delete recipe</small>
              </div>
            </div>
          );
        });
      }
    }
  };

  const renderdate = () => {
    if (mealsApi) {
      if (mealsApi.meals.length > 0) {
        return mealsApi.meals.map((meal, idx) => {
          return <option key={idx}>{meal.date}</option>;
        });
      }
    }
  };

  const checkingDuplicateRecipe = () => {
    let val = "";
    if (mealSelectionError || duplicateRecipe) {
      val = "";
    } else {
      val = "shopping-list";
    }

    return (
      <a style={{ textDecoration: "none" }} href={`#${val}`}>
        <button onClick={addmealClickHandler} className="addmealbutt">
          Add Meal
        </button>
      </a>
    );
  };

  return (
    <div>
      <div className="addMealRow">
        <div className="mealcol">
          <h1 className="title">Plan receipes that in your life</h1>
          <p className="para">
            Decide when you would like to eat your recipes by placing them on
            your calendar
          </p>

          <div>
            <label htmlFor="mealBox">Choose Meal Box</label>
            <select
              onChange={mealboxHandler}
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
              onChange={DietHandler}
              className="dietplan"
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
          <input onChange={dateHandler} type="date" className="dat" />

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

          <label className="choosenreceipe">
            <strong>Selected Receipe :</strong>
          </label>
          <h4 className="receipe">{choosenReceipe}</h4>
          <small style={{ display: "block", color: "yellow" }}>
              {mealSelectionError}
            </small>
          <h4 style={{ color: "yellow" }}>{duplicateRecipe}</h4>
         
          {checkingDuplicateRecipe()}
         
        </div>
      </div>

      <h2 className="shopping-list">Shopping List</h2>
      <div className="dataFilterRow">
        <div className="filterCol">
          <select onChange={filterViewMealData} defaultValue="Choose MealBox">
            <option disabled>Choose MealBox</option>
            <option disabled>Choose</option>
            <option>Breakfast</option>
            <option>Lunch</option>
            <option>Dinner</option>
            <option>Snack</option>
          </select>
        </div>
        <div className="filterCol">
          <select onChange={filterViewDietData} defaultValue="Choose Diet plan">
            <option disabled>Choose Diet plan</option>
            <option>Gluten Free</option>
            <option>Vegetarian</option>
            <option>Lacto-Vegetarian</option>
            <option>Vegan</option>
            <option>Ketogenic</option>
          </select>
        </div>
        <div className="filterCol">
          <select onChange={filterViewDateData} defaultValue="Choose Date">
            <option disabled>Choose Date</option>
            {renderdate()}
          </select>
        </div>
      </div>

      <div className="viewMealsrow">{renderViewMeals()}</div>
      <div id="shopping-list"></div>
    </div>
  );
};

export default Details;

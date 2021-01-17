import "./styles/Home_details1.scss"
import React from "react";
import { Link } from "react-router-dom";

const Display = (props) => {
  const {
    data,
    clickHandler,
    changeHandler,
    goHandler,
    imageMouseOver,
    imageMouseLeave,
    imageId,
    cusinesClickHandler,
    cusineClick,
    dietClickHandler,
    dietClick,
    mealClickHandler,
    mealClick,
    maxreadyClickHandler,
    maxreadyClick,
    calorieClickHandler,
    calorieClick,
    protienClickHandler,
    protienClick
  } = props;

  const hoverRender = (
    calorieVal,
    calorieUnit,
    proteinVal,
    proteinUnit,
    passId
  ) => {
    if (passId === imageId) {
      return (
        <div className="caloriValues">
          <div className="calorie">
            <span>Calories</span>
            <span>{`${Math.round(calorieVal)} ${calorieUnit}`}</span>
          </div>
          <div className="protein">
            <span>Proteins</span>
            <span>
              {`${Math.round(proteinVal)} 
              ${proteinUnit}`}
            </span>
          </div>
        </div>
      );
    }
  };

  const renderDetails = () => {
    if (data.results) {
      if (data.results.length) {
        return data.results.map((details) => {
          return (
            <React.Fragment key={details.id}>
              <Link
                style={{ textDecoration: "none" }}
                to={`/details/${details.id}`}
                className="col"
              >
                <img
                  onMouseOver={() => imageMouseOver(details.id)}
                  onMouseLeave={imageMouseLeave}
                  src={details.image} alt="item"
                />
                <p>{details.title}</p>

                {hoverRender(
                  details.nutrition.nutrients[0].amount,
                  details.nutrition.nutrients[0].unit,
                  details.nutrition.nutrients[1].amount,
                  details.nutrition.nutrients[1].unit,
                  details.id
                )}
              </Link>
            </React.Fragment>
          );
        });
      } else {
        return (
          <div className="nomatchingrow">
            <div className="nomatchingcol">No Matching Data Found</div>
          </div>
        );
      }
    } else {
      return (
        <div className="nodatarow">
          <div className="nodatacol">
            <img src="https://motiongraphicsphoebe.files.wordpress.com/2018/10/tumblr_nurhzkukqo1syz1nro1_500.gif" />
          </div>
        </div>
      );
    }
  };

  return (
      <div className="mainrow">
        <div className="Filtercol">
            <h3 className="filtersLabel">Filters</h3>
            <div className="filters">
              <div className="filtercol">
                <button className="btn" onClick={cusinesClickHandler}>
                Cusines <span className="material-icons"></span>
                </button>
              {cusineClick ? 
                <div className="cusine">
                  <input
                    onClick={clickHandler}
                    type="radio"
                    value="Indian"
                    name="cuisine"
                    id="ind"
                  />
                  <label htmlFor="ind" className="label">
                      Indian
                    </label>
                  
                    <input
                      onClick={clickHandler}
                      type="radio"
                      value="American"
                      name="cuisine"
                      id="ame"
                    />
                    <label htmlFor="ame">American</label>
                  
                  
                    <input
                      onClick={clickHandler}
                      type="radio"
                      value="Caribbean"
                      name="cuisine"
                      id="car"
                    />
                    <label htmlFor="car">Caribbean</label>
                  
                    <input
                      type="radio"
                      onClick={clickHandler}
                      value="Chinese"
                      name="cuisine"
                      id="chi"
                    />
                    <label htmlFor="chi">Chinese</label>

                  <div >
                    <input
                      onClick={clickHandler}
                      type="radio"
                      value="Southern"
                      name="cuisine"
                      id="sou"
                    />
                    <label htmlFor="sou">Southern</label>
                  </div>
                </div>
               : ""}
            </div>
              <div className="filtercol">
                <button className="btn" onClick={dietClickHandler}>
                  Diet Food <span className="material-icons"></span>
                </button>

                {dietClick ? (
                  <div>
                    <div className="diet">
                      <div className="option">
                        <input
                          onClick={clickHandler}
                          type="radio"
                          id="glu"
                          value="Gluten Free"
                          name="diet"
                        />
                        <label htmlFor="glu">Gluten Free</label>
                      </div>
                      <small>Avoid wheat,barley<br /> and other grain foods</small>
                    </div>
                    <div className="diet">
                      <div className="option">
                        <input
                          onClick={clickHandler}
                          type="radio"
                          id="vegi"
                          value="Vegetarian"
                          name="diet"
                        />
                        <label htmlFor="vegi">Vegetarian</label>
                      </div>
                      <small>Pure Veg</small>
                    </div>

                    <div className="diet">
                      <div className="option">
                        <input
                          onClick={clickHandler}
                          type="radio"
                          id="lact"
                          value="Lacto-Vegetarian"
                          name="diet"
                        />
                        <label htmlFor="lact">Lacto-Vegetarian</label>
                      </div>
                      <small>Avoid Egg</small>
                    </div>
                    <div className="diet">
                      <div className="option">
                        <input
                          onClick={clickHandler}
                          type="radio"
                          id="vegan"
                          value="Vegan"
                          name="diet"
                        />
                        <label htmlFor="vegan">Vegan</label>
                      </div>
                      <small>Avoid Meat</small>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="filtercol">
                <button className="btn" onClick={mealClickHandler}>
                  Meal Types <span className="material-icons"></span>
                </button>

                {mealClick ? (
                  <div className="cusine">
                    <input
                      onClick={clickHandler}
                      type="radio"
                      id="sidedish"
                      value="Side Dish"
                      name="mealType"
                    />
                    <label htmlFor="sidedish">Side Dish</label>
                    <input
                      onClick={clickHandler}
                      type="radio"
                      id="dessert"
                      value="Dessert"
                      name="mealType"
                    />
                    <label htmlFor="dessert">Dessert</label>
                    <input
                      onClick={clickHandler}
                      type="radio"
                      id="breakfast"
                      value="Breakfast"
                      name="mealType"
                    />
                    <label htmlFor="breakfast">Breakfast</label>
                    <input
                      onClick={clickHandler}
                      type="radio"
                      id="snack"
                      value="Snack"
                      name="mealType"
                    />
                    <label htmlFor="snack">Snack</label>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="filtercol">
                <button className="btn" onClick={maxreadyClickHandler}>
                  Max Ready Time<small>(in min)</small>{" "}
                  <span className="material-icons"></span>
                </button>
                {maxreadyClick ? (
                  <div className="cusine">
                    <div className="readytime">
                      <input
                        onClick={clickHandler}
                        type="radio"
                        id="40"
                        value="40"
                        name="readyTime"
                      />
                      <label htmlFor="40">40</label>
                    </div>
                    <div className="readytime">
                      <input
                        value="60"
                        onClick={clickHandler}
                        type="radio"
                        id="60"
                        name="readyTime"
                      />
                      <label htmlFor="60">60</label>
                    </div>
                    <div className="readytime">
                      <input
                        value="100"
                        onClick={clickHandler}
                        type="radio"
                        id="100"
                        name="readyTime"
                      />
                      <label htmlFor="100">100</label>
                    </div>
                    <div className="readytime">
                      <input
                        value="150"
                        onClick={clickHandler}
                        type="radio"
                        id="150"
                        name="readyTime"
                      />
                      <label htmlFor="150">150</label>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="filtercol">
                <button className="btn" onClick={calorieClickHandler}>
                  Calories <span className="material-icons"></span>
                </button>

                {calorieClick ? (
                  <div className="calories">
                    <div onChange={changeHandler}>
                      <input
                        placeholder="min 0"
                        type="number"
                        name="minCalories"
                      />
                      <input
                        placeholder="max 800"
                        type="number"
                        name="maxCalories"
                      />
                    </div>
                    <button onClick={goHandler}>Go</button>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="filtercol">
                <button className="btn" onClick={protienClickHandler}>
                Protiens <span className="material-icons"></span>
              </button>

              {protienClick ? (
                <div className="calories">
                  <div onChange={changeHandler}>
                    <input
                      placeholder="min 0"
                      type="number"
                      name="minProtein"
                    />
                    <input
                      placeholder="max 100"
                      type="number"
                      name="maxProtein"
                    />
                  </div>
                  <button onClick={goHandler}>Go</button>
                </div>
              ) : (
                ""
              )}
              </div>
              
            </div>
          </div>
        <div className="displaycol">
          {renderDetails()}
        </div>
      </div>
  );
};

export default Display;

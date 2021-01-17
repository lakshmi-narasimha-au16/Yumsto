import "./styles/Home_details.scss"
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
                  src={details.image}
                />
                <p>{details.title}</p>

                <button>MORE INFO</button>

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
    } 
  };

  return (
    <div>
      <div className="mainrow">
        <div className="maincol">
          <div className="filterrow">
            <div className="filtercol">
              <button className="butt" onClick={cusinesClickHandler}>
                Cusines <span className="material-icons">filter_list</span>
              </button>
              {cusineClick ? (
                <div>
                  <div className="cusine">
                    <input
                      onClick={clickHandler}
                      type="radio"
                      value="Indian"
                      name="cuisine"
                      id="ind"
                    />
                    <label style={{cursor:"pointer"}} htmlFor="ind" className="label">
                      Indian
                    </label>
                  </div>
                  <div className="cusine">
                    <input
                      onClick={clickHandler}
                      type="radio"
                      value="American"
                      name="cuisine"
                      id="ame"
                    />
                    <label style={{cursor:"pointer"}} htmlFor="ame">American</label>
                  </div>
                  <div className="cusine">
                    <input
                      onClick={clickHandler}
                      type="radio"
                      value="Caribbean"
                      name="cuisine"
                      id="car"
                    />
                    <label style={{cursor:"pointer"}} htmlFor="car">Caribbean</label>
                  </div>
                  <div className="cusine">
                    <input
                      type="radio"
                      onClick={clickHandler}
                      value="Chinese"
                      name="cuisine"
                      id="chi"
                    />
                    <label style={{cursor:"pointer"}} htmlFor="chi">Chinese</label>
                  </div>
                  <div className="cusine">
                    <input
                      onClick={clickHandler}
                      type="radio"
                      value="Southern"
                      name="cuisine"
                      id="sou"
                    />
                    <label style={{cursor:"pointer"}} htmlFor="sou">Southern</label>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="filtercol dietcol">
              <button className="butt" onClick={dietClickHandler}>
                Diet Food <span className="material-icons">filter_list</span>
              </button>

              {dietClick ? (
                <div>
                  <div className="diet">
                    <div>
                      <input
                        onClick={clickHandler}
                        type="radio"
                        id="glu"
                        value="Gluten Free"
                        name="diet"
                      />
                      <label style={{cursor:"pointer",padding:"15px 5px"}} htmlFor="glu">Gluten Free</label>
                    </div>
                    <small>Avoid wheat, barley and other grain foods</small>
                  </div>
                  <div className="diet">
                    <div>
                      <input
                        onClick={clickHandler}
                        type="radio"
                        id="vegi"
                        value="Vegetarian"
                        name="diet"
                      />
                      <label style={{cursor:"pointer",padding:"15px 5px"}} htmlFor="vegi">Vegetarian</label>
                    </div>
                    <small>Pure Veg</small>
                  </div>

                  <div className="diet">
                    <div>
                      <input
                        onClick={clickHandler}
                        type="radio"
                        id="lact"
                        value="Lacto-Vegetarian"
                        name="diet"
                      />
                      <label style={{cursor:"pointer",padding:"15px 5px"}} htmlFor="lact">Lacto-Vegetarian</label>
                    </div>
                    <small>Avoid Egg</small>
                  </div>
                  <div className="diet">
                    <div>
                      <input
                        onClick={clickHandler}
                        type="radio"
                        id="vegan"
                        value="Vegan"
                        name="diet"
                      />
                      <label style={{cursor:"pointer",padding:"15px 5px"}} htmlFor="vegan">Vegan</label>
                    </div>
                    <small>Avoid Meat</small>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="filtercol">
              <button className="butt" onClick={mealClickHandler}>
                Meal Types <span className="material-icons">filter_list</span>
              </button>

              {mealClick ? (
                <div>
                  <div className="meal">
                    <input
                      onClick={clickHandler}
                      type="radio"
                      id="sidedish"
                      value="Side Dish"
                      name="mealType"
                    />
                    <label style={{cursor:"pointer"}} htmlFor="sidedish">Side Dish</label>
                  </div>
                  <div className="meal">
                    <input
                      onClick={clickHandler}
                      type="radio"
                      id="dessert"
                      value="Dessert"
                      name="mealType"
                    />
                    <label style={{cursor:"pointer"}} htmlFor="dessert">Dessert</label>
                  </div>
                  <div className="meal">
                    <input
                      onClick={clickHandler}
                      type="radio"
                      id="breakfast"
                      value="Breakfast"
                      name="mealType"
                    />
                    <label  style={{cursor:"pointer"}} htmlFor="breakfast">Breakfast</label>
                  </div>
                  <div className="meal">
                    <input
                      onClick={clickHandler}
                      type="radio"
                      id="snack"
                      value="Snack"
                      name="mealType"
                    />
                    <label style={{cursor:"pointer"}} htmlFor="snack">Snack</label>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="filtercol">
              <button className="butt" onClick={maxreadyClickHandler}>
                Max Ready Time<small>(in min)</small>{" "}
                <span className="material-icons">filter_list</span>
              </button>
              {maxreadyClick ? (
                <div>
                  <div className="readytime">
                    <input
                      onClick={clickHandler}
                      type="radio"
                      id="40"
                      value="40"
                      name="readyTime"
                    />
                    <label style={{cursor:"pointer"}} htmlFor="40">40</label>
                  </div>
                  <div className="readytime">
                    <input
                      value="60"
                      onClick={clickHandler}
                      type="radio"
                      id="60"
                      name="readyTime"
                    />
                    <label style={{cursor:"pointer"}} htmlFor="60">60</label>
                  </div>
                  <div className="readytime">
                    <input
                      value="100"
                      onClick={clickHandler}
                      type="radio"
                      id="100"
                      name="readyTime"
                    />
                    <label style={{cursor:"pointer"}} htmlFor="100">100</label>
                  </div>
                  <div className="readytime">
                    <input
                      value="150"
                      onClick={clickHandler}
                      type="radio"
                      id="150"
                      name="readyTime"
                    />
                    <label style={{cursor:"pointer"}} htmlFor="150">150</label>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="filtercol">
              <button className="butt" onClick={calorieClickHandler}>
                Calories <span className="material-icons">filter_list</span>
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
            <div className="filtercol protienscol">
              <button className="butt" onClick={protienClickHandler}>
                Protiens <span className="material-icons">filter_list</span>
              </button>

              {protienClick ? (
                <div className="protiens">
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
        <div className="maincol">
          <div className="detailsRow">{renderDetails()}</div>
        </div>
      </div>
    </div>
  );
};

export default Display;

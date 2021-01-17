import React from "react";
import "./styles/Add_Meal1.scss"
import {
  MealsApiData,
  BulkInfo,
  fetchAgainMealsApiData,
  SearchApi,
} from "./Apifile";
import Details from "./Add_Meal_Display";
import { AddMeal } from "../../Store/Actions/addamealAction";
import { connect } from "react-redux";

class AddingMeal extends React.Component {
  constructor() {
    super();

    this.state = {
      apiData: "",
      searchInputVal: "",
      diet: "",
      choosenReceipe: "",
      imageId: "",
      mealSelectionError: "",
      mealsApi: "",
      dummy: "",
      didMountDummy: "",
      viewMealsData: "",
      mealsDataIdsArray: "",
      viewfilterMealType: "",
      viewfilterDietType: "",
      viewfilterDate: "",
      duplicateRecipe: "",
      mealsData: {
        mealBoxType: "",
        dietType: "",
        date: "",
        receipeId: "",
        receipeTitle: "",
        usermail: "",
      },
    };
  }

  async componentDidMount() {
    await this.props.dispatch(MealsApiData());
    const mealsData = this.state.mealsData;
    mealsData.usermail = JSON.parse(sessionStorage.getItem("email"));

    this.setState({
      ...this.state,
      didMountDummy: "some",
      mealsData,
    });
  }

  componentDidUpdate() {
    if (this.state.didMountDummy) {
      let array = [];

      for (var i = 0; i < this.props.mealsApi.meals.length; i++) {
        if (
          this.props.mealsApi.meals[i].usermail ===
          JSON.parse(sessionStorage.getItem("email"))
        ) {
          array.push(this.props.mealsApi.meals[i].receipeId);
        }
      }

      this.setState({
        ...this.state,
        didMountDummy: "",
        dummy: "some",
        mealsDataIdsArray: array,
      });
    }

    if (this.state.dummy) {
      if (this.state.mealsDataIdsArray.length > 0) {
        this.props.dispatch(BulkInfo(this.state.mealsDataIdsArray));
        this.setState({
          ...this.state,
          dummy: "",
        });
      }
    }
  }

  searchInputHandler = (e) => {
    this.setState({
      ...this.state,
      searchInputVal: e.target.value,
    });
  };

  searchClickHandler = () => {
    this.props.dispatch(SearchApi(this.state.diet, this.state.searchInputVal));
    this.setState({
      ...this.state,
      searchInputVal: "",
    });
  };

  receipechooseHandler = (id, title) => {
    const input = this.state.mealsData;
    input.receipeId = id;
    input.receipeTitle = title;

    this.setState({
      ...this.state,
      input,
      choosenReceipe: title,
    });

    this.props.dispatch({
      type: AddMeal.searchApi,
      payload: "",
    });
  };

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

  mealboxHandler = (e) => {
    const input = this.state.mealsData;
    input.mealBoxType = e.target.value;
    this.setState({
      ...this.state,
      input,
    });
  };
  DietHandler = (e) => {
    const input = this.state.mealsData;
    input.dietType = e.target.value;
    this.setState({
      ...this.state,
      input,
    });
  };
  dateHandler = (e) => {
    const input = this.state.mealsData;
    input.date = e.target.value;
    this.setState({
      ...this.state,
      input,
    });
  };

  addmealClickHandler = () => {
    let cnt = 0;
    for (var i = 0; i < this.props.mealsApi.meals.length; i++) {
      if (
        this.props.mealsApi.meals[i].receipeId ===
        this.state.mealsData.receipeId
      ) {
        console.log("inside loop");
        cnt += 1;
        break;
      }
    }

    if (!this.state.mealsData.receipeId || cnt > 0) {
      console.log("inside");
      if (!this.state.mealsData.receipeId) {
        this.setState({
          ...this.state,
          mealSelectionError: "Search and select your food",
        });
      }

      if (cnt > 0) {
        console.log("inside cond");
        this.setState({
          ...this.state,
          duplicateRecipe: "selected recepe already in list",
        });
      }
    } else {
      console.log("else");
      const val = this.props.mealsApi;
      const array = val.meals;
      const length = this.props.mealsApi.meals.length;
      array[length] = this.state.mealsData;

      this.props.dispatch({
        type: AddMeal.mealsApi,
        payload: val,
      });
      console.log("2");

      this.props.dispatch(fetchAgainMealsApiData(this.props.mealsApi));
      this.setState({
        ...this.state,
        mealSelectionError: "",
        duplicateRecipe: "",
        didMountDummy: "some",
      });
    }
  };

  filterViewMealData = (e) => {
    this.setState({
      ...this.state,
      viewfilterMealType: e.target.value,
      didMountDummy: "some",
    });
  };
  filterViewDietData = (e) => {
    this.setState({
      ...this.state,
      viewfilterDietType: e.target.value,
      didMountDummy: "some",
    });
  };
  filterViewDateData = (e) => {
    this.setState({
      ...this.state,
      viewfilterDate: e.target.value,
      didMountDummy: "some",
    });
  };

  deleteRecipe = (id) => {
    const val = this.props.mealsApi;
    const array = val.meals;
    let length = 0;
    for (var i = 0; i < this.props.mealsApi.meals.length; i++) {
      if (this.props.mealsApi.meals[i].receipeId === id) {
        length = i;
      }
    }

    array.splice(length, 1);

    this.props.dispatch({
      type: AddMeal.mealsApi,
      payload: val,
    });

    this.props.dispatch(fetchAgainMealsApiData(this.props.mealsApi));
    this.setState({
      ...this.state,

      didMountDummy: "some",
    });
  };

  render() {
    console.log(this.state);
    
      
        if (this.props.viewMealsData) {
          if (this.props.viewMealsData.status === "failure" ) {
        return (
          <div className="nodatarow">
            <div className="nodatacol">
              <img src="https://motiongraphicsphoebe.files.wordpress.com/2018/10/tumblr_nurhzkukqo1syz1nro1_500.gif" />
            </div>
          </div>
        );
      } else {
        return (
          <div>
          <Details
          dietSelectHandler={this.dietSelectHandler}
          apiData={this.props.apiData}
          searchInputVal={this.state.searchInputVal}
          searchInputHandler={this.searchInputHandler}
          searchClickHandler={this.searchClickHandler}
          receipechooseHandler={this.receipechooseHandler}
          choosenReceipe={this.state.choosenReceipe}
          imageMouseOver={this.imageMouseOver}
          imageMouseLeave={this.imageMouseLeave}
          imageId={this.state.imageId}
          mealboxHandler={this.mealboxHandler}
          DietHandler={this.DietHandler}
          dateHandler={this.dateHandler}
          addmealClickHandler={this.addmealClickHandler}
          mealSelectionError={this.state.mealSelectionError}
          viewMealsData={this.props.viewMealsData}
          mealsApi={this.props.mealsApi}
          filterViewMealData={this.filterViewMealData}
          filterViewDietData={this.filterViewDietData}
          filterViewDateData={this.filterViewDateData}
          deleteRecipe={this.deleteRecipe}
          duplicateRecipe={this.state.duplicateRecipe}
        />
          </div>
        )
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
  }

        
      
    
  }


const mapStateToProps = (state) => {
  console.log(state);
  return {
    mealsApi: state.addmeal_reducer.mealsApiS,
    viewMealsData: state.addmeal_reducer.viewMealsDataS,
    apiData: state.addmeal_reducer.searchApiS.results,
  };
};

export default connect(mapStateToProps)(AddingMeal);

import React from "react";

import {connect} from "react-redux"
import Detail from "./Home_Details_display";

import axios from "axios"
import {Home_details_action} from "../../Store/Actions/main_action"

let key = "97405f6dd7504936bc7cc61c0adbae96"


class Details extends React.Component {
  constructor() {
    super();
    this.state = {
      cuisine: "Indian",
      diet: "vegetarian",
      mealType: "desset",
      readyTime: "190",
      minCalories: "0",
      maxCalories: "800",
      minProtein: "0",
      maxProtein: "800",
      dummy: "",
      imageId: "",
      cusineClick: false,
      dietClick: false,
      mealClick: false,
      maxreadyClick: false,
      calorieClick: false,
      protienClick: false,
    };
  }

  Apicall=()=> {
    
    const url = `https://api.spoonacular.com/recipes/complexSearch?cuisine=${this.state.cuisine}&diet=${this.state.diet}&type=${this.state.mealType}&number=20&maxReadyTime=${this.state.readyTime}&minProtein=${this.state.minProtein}&minCalories=${this.state.minCalories}&maxCalories=${this.state.maxCalories}&maxProtein=${this.state.maxProtein}&apiKey=${key}`;

    axios.get(url).then((resp) => {
      this.props.dispatch({
        type:Home_details_action.home_details_api_action,
        payload:resp.data
      })
    });
  }


  componentDidMount() {
    this.Apicall()
   
  
  }

  componentDidUpdate() {
    if (this.state.dummy) {
      this.Apicall()
      this.setState({
        ...this.state,
        dummy: "",
      })

    }
  }

  clickHandler = (e) => {
    let val = e.target.name;
    this.setState({
      ...this.state,
      dummy: "some",
      [val]: e.target.value,
    });
  };

  goHandler = () => {
    if (!this.state.minCalories) {
      this.setState({
        ...this.state,
        minCalories: 0,
      });
    }
    if (!this.state.minProtein) {
      this.setState({
        ...this.state,
        minProtein: 0,
      });
    }
    if (!this.state.maxCalories) {
      this.setState({
        ...this.state,
        maxCalories: 800,
      });
    }
    if (!this.state.maxProtein) {
      this.setState({
        ...this.state,
        maxProtein: 800,
      });
    }

    this.setState({
      ...this.state,
      dummy: "some",
    });
  };

  changeHandler = (e) => {
    let val = e.target.name;

    this.setState({
      ...this.state,
      [val]: e.target.value,
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

  cusinesClickHandler = () => {
    if (this.state.cusineClick) {
      this.setState({
        ...this.state,
        cusineClick: false,
      });
    } else {
      this.setState({
        ...this.state,
        cusineClick: true,
      });
    }
  };

  dietClickHandler = () => {
    if (this.state.dietClick) {
      this.setState({
        ...this.state,
        dietClick: false,
      });
    } else {
      this.setState({
        ...this.state,
        dietClick: true,
      });
    }
  };

  mealClickHandler = () => {
    if (this.state.mealClick) {
      this.setState({
        ...this.state,
        mealClick: false,
      });
    } else {
      this.setState({
        ...this.state,
        mealClick: true,
      });
    }
  };

  maxreadyClickHandler = () => {
    if (this.state.maxreadyClick) {
      this.setState({
        ...this.state,
        maxreadyClick: false,
      });
    } else {
      this.setState({
        ...this.state,
        maxreadyClick: true,
      });
    }
  };

  calorieClickHandler = () => {
    if (this.state.calorieClick) {
      this.setState({
        ...this.state,
        calorieClick: false,
      });
    } else {
      this.setState({
        ...this.state,
        calorieClick: true,
      });
    }
  };

  protienClickHandler = () => {
    if (this.state.protienClick) {
      this.setState({
        ...this.state,
        protienClick: false,
      });
    } else {
      this.setState({
        ...this.state,
        protienClick: true,
      });
    }
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <Detail
          data={this.props.apiData}
          clickHandler={this.clickHandler}
          changeHandler={this.changeHandler}
          goHandler={this.goHandler}
          imageMouseOver={this.imageMouseOver}
          imageMouseLeave={this.imageMouseLeave}
          isHover={this.state.isHover}
          imageId={this.state.imageId}
          cusinesClickHandler={this.cusinesClickHandler}
          cusineClick={this.state.cusineClick}
          dietClickHandler={this.dietClickHandler}
          dietClick={this.state.dietClick}
          mealClickHandler={this.mealClickHandler}
          mealClick={this.state.mealClick}
          maxreadyClickHandler={this.maxreadyClickHandler}
          maxreadyClick={this.state.maxreadyClick}
          calorieClickHandler={this.calorieClickHandler}
          calorieClick={this.state.calorieClick}
          protienClickHandler={this.protienClickHandler}
          protienClick={this.state.protienClick}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  
  return {
      
    apiData:state.home_details_reducer.apiDataStore.results
  }
}

export default connect(mapStateToProps)(Details);

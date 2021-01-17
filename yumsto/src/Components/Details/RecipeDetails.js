import React from "react";
import { RecipeInfo, RecipeNutrition } from "../../Store/Actions/detailActions";
import "./styles/RecipeDetails1.scss";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Detail from "./RecipeDetailsDisplay";
import { Details } from "../../Store/Reducers/details_reducer";

class RecipeDetails extends React.Component {
  componentDidMount() {
    this.props.dispatch(RecipeInfo(this.props.match.params.id));
    this.props.dispatch(RecipeNutrition(this.props.match.params.id));
  }

  componentDidUpdate() {
    
  }

  render() {
    if (this.props.dummy1) {
      this.props.dispatch(RecipeInfo(this.props.match.params.id));
      this.props.dispatch(RecipeNutrition(this.props.match.params.id));
      this.props.dispatch({
        type: Details.dummy1,
        payload: "",
      });
    }
    if (this.props.infoApiData && this.props.nutritionApiData) {
      if (
        this.props.infoApiData.status === "failure" ||
        this.props.nutritionApiData.status === "failure"
      ) {
        return (
          <div className="nodatarow">
            <div className="nodatacol">
              <img src="https://motiongraphicsphoebe.files.wordpress.com/2018/10/tumblr_nurhzkukqo1syz1nro1_500.gif" alt="no-data"/>
            </div>
          </div>
        );
      } else {
        return (
          <div>
            <Detail
              infoApiData={this.props.infoApiData}
              nutritionApiData={this.props.nutritionApiData}
            />
          </div>
        );
      }
    } else {
      return (
        <div className="nodatarow">
          <div className="nodatacol">
            <img src="https://motiongraphicsphoebe.files.wordpress.com/2018/10/tumblr_nurhzkukqo1syz1nro1_500.gif" alt="no-data"/>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    infoApiData: state.details_reducer.infoApiS,
    nutritionApiData: state.details_reducer.nutritionApiS,
    dummy1: state.details_reducer.dummy1UpdateS,
  };
};

export default withRouter(connect(mapStateToProps)(RecipeDetails));

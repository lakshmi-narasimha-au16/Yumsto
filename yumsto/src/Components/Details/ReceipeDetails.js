import React from "react";
import { ReceipeInfo, ReceipeNutrition } from "./Apifile";
import "./styles/ReceipeDetails1.scss";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Detail from "./ReceipeDetailsDisplay";
import { Details } from "../../Store/Actions/detailsAction";
class ReceipeDetails extends React.Component {
  componentDidMount() {
    this.props.dispatch(ReceipeInfo(this.props.match.params.id));
    this.props.dispatch(ReceipeNutrition(this.props.match.params.id));
  }

  componentDidUpdate() {
    
  }

  render() {
    if (this.props.dummy1) {
      this.props.dispatch(ReceipeInfo(this.props.match.params.id));
      this.props.dispatch(ReceipeNutrition(this.props.match.params.id));
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
              <img src="https://motiongraphicsphoebe.files.wordpress.com/2018/10/tumblr_nurhzkukqo1syz1nro1_500.gif" />
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
            <img src="https://motiongraphicsphoebe.files.wordpress.com/2018/10/tumblr_nurhzkukqo1syz1nro1_500.gif" />
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

export default withRouter(connect(mapStateToProps)(ReceipeDetails));

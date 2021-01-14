import React from "react";
import { connect } from "react-redux";
import {
  ReceipeIngredients,
  ReceipeEquipment,
  ReceipeTasteWidget,
} from "./Apifile";
import { withRouter } from "react-router-dom";
import Detail from "./ReceipeIngredientsDisplay";
import "./styles/ReceipeIngredients1.scss";
import { Details } from "../../Store/Actions/detailsAction";
class Ingredients extends React.Component {
  componentDidMount() {
    this.props.dispatch(ReceipeIngredients(this.props.match.params.id));
    this.props.dispatch(ReceipeEquipment(this.props.match.params.id));
    this.props.dispatch(ReceipeTasteWidget(this.props.match.params.id));
  }

  componentDidUpdate() {
    
  }

  render() {
    
    if (this.props.dummy2) {
      this.props.dispatch(ReceipeIngredients(this.props.match.params.id));
      this.props.dispatch(ReceipeEquipment(this.props.match.params.id));
      this.props.dispatch(ReceipeTasteWidget(this.props.match.params.id));
      this.props.dispatch({
        type: Details.dummy2,
        payload: "",
      });
    }
    console.log(this.props);
    if (this.props.ingredientsApiData) {
      if (this.props.ingredientsApiData.status === "failure") {
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
              ingredientsApiData={this.props.ingredientsApiData}
              equipmentApiData={this.props.equipmentApiData}
              infoApiData={this.props.infoApiData}
              nutritionApiData={this.props.nutritionApiData}
              tasteWidgetApiData={this.props.tasteWidgetApiData}
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
    ingredientsApiData: state.details_reducer.ingredientsApiS,
    equipmentApiData: state.details_reducer.equipmentApiS,
    infoApiData: state.details_reducer.infoApiS,
    nutritionApiData: state.details_reducer.nutritionApiS,
    tasteWidgetApiData: state.details_reducer.tasteWidgetApiS,
    dummy2: state.details_reducer.dummy2UpdateS,
  };
};

export default withRouter(connect(mapStateToProps)(Ingredients));

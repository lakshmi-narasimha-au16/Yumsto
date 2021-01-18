import React from "react";
import { connect } from "react-redux";
import { RecipeIngredients,RecipeEquipment,RecipeTasteWidget } from "../../Store/Actions/detailActions";
import { withRouter } from "react-router-dom";
import Detail from "./RecipeIngredientsDisplay";
import "./styles/RecipeIngredients1.scss";
import { Details } from "../../Store/Reducers/details_reducer";


class Ingredients extends React.Component {
  
  componentDidMount() {
    this.props.dispatch(RecipeIngredients(this.props.match.params.id));
    this.props.dispatch(RecipeEquipment(this.props.match.params.id));
    this.props.dispatch(RecipeTasteWidget(this.props.match.params.id));
  }

  componentDidUpdate() {
    
  }

  render() {
    
    if (this.props.dummy2) {
      this.props.dispatch(RecipeIngredients(this.props.match.params.id));
      this.props.dispatch(RecipeEquipment(this.props.match.params.id));
      this.props.dispatch(RecipeTasteWidget(this.props.match.params.id));
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
              <img src="https://motiongraphicsphoebe.files.wordpress.com/2018/10/tumblr_nurhzkukqo1syz1nro1_500.gif" alt="loading"/>
            </div>
          </div>
        );
      } else {
        return (
          <>
            <Detail
              ingredientsApiData={this.props.ingredientsApiData}
              equipmentApiData={this.props.equipmentApiData}
              infoApiData={this.props.infoApiData}
              nutritionApiData={this.props.nutritionApiData}
              tasteWidgetApiData={this.props.tasteWidgetApiData}
            />
          </>
        );
      }
    } else {
      return (
        <div className="nodatarow">
          <div className="nodatacol">
            <img src="https://motiongraphicsphoebe.files.wordpress.com/2018/10/tumblr_nurhzkukqo1syz1nro1_500.gif" alt="loading"/>
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

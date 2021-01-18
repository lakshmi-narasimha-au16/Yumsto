import React from "react"
import { SimilarRecipe} from "../../Store/Actions/detailActions";
import Detail from "./SimilarRecipesDisplay"
import { connect } from "react-redux";
import {withRouter} from "react-router-dom"
import {Details} from "../../Store/Reducers/details_reducer"
class SimilarRecipes extends React.Component{

  constructor(){
    super()
    this.state={
      dummy:""
    }
  }

async componentDidMount(){
  await this.props.dispatch(SimilarRecipe(this.props.match.params.id))
}

componentDidUpdate(){
  if (this.props.dummyUpdate){
    console.log("render1");
    this.props.dispatch(SimilarRecipe(this.props.match.params.id))
    this.props.dispatch({
      type:Details.dummy,
      payload:""
    })
  }
}

dummystateupdate=()=>{
  console.log("render");
  this.props.dispatch({
    type:Details.dummy,
    payload:"some"
  })
  this.props.dispatch({
    type:Details.dummy1,
    payload:"some"
  })
  this.props.dispatch({
    type:Details.dummy2,
    payload:"some"
  })
}

    render(){
          if (this.props.similarRecipesApiData ) {
            if (
              this.props.similarRecipesApiData.status === "failure" 
            ) {
              console.log(this.props.similarRecipesApiData.status)
              return (
                <div className="nodatarow">
                  <div className="nodatacol">
                    <img src="https://motiongraphicsphoebe.files.wordpress.com/2018/10/tumblr_nurhzkukqo1syz1nro1_500.gif" alt="loading"/>
                  </div>
                </div>
              );
            } else {
              return (
                <div>
                  <Detail
                    similarRecipesApiData={this.props.similarRecipesApiData}
                    dummystateupdate={this.dummystateupdate}
                  />
                </div>
              );
            }
          } else {
            console.log(this.props.similarRecipesApiData)
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
        similarRecipesApiData: state.details_reducer.similarRecipesApiS,
        dummyUpdate: state.details_reducer.dummyUpdateS,
        dummy1Update: state.details_reducer.dummy1UpdateS,
        dummy2Update: state.details_reducer.dummy2UpdateS,
      
    };
  };
  
  export default withRouter (connect(mapStateToProps)(SimilarRecipes))
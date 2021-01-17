

import React from "react"
import { SimilarReceipe} from "./Apifile";
import Detail from "./SimilarReceipesDisplay"
import { connect } from "react-redux";
import {withRouter} from "react-router-dom"
import {Details} from "../../Store/Actions/detailsAction"
class SimilarReceipes extends React.Component{

  // constructor(){
  //   super()
  //   this.state={
  //     dummy:""
  //   }
  // }

componentDidMount(){

  this.props.dispatch(SimilarReceipe(this.props.match.params.id))
}

async componentDidUpdate(){
  
  if (this.props.dummyUpdate){
    console.log("render1");
   await this.props.dispatch(SimilarReceipe(this.props.match.params.id))
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

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
  

}

    render(){
          console.log(this.props);
          if (this.props.similarReceipesApiData ) {
            if (
              this.props.similarReceipesApiData.status === "failure" 
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
                    similarReceipesApiData={this.props.similarReceipesApiData}
                    dummystateupdate={this.dummystateupdate}
                    
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
        similarReceipesApiData: state.details_reducer.similarReceipesApiS,
        dummyUpdate: state.details_reducer.dummyUpdateS,
        dummy1Update: state.details_reducer.dummy1UpdateS,
        dummy2Update: state.details_reducer.dummy2UpdateS,
      
    };
  };
  
  export default withRouter (connect(mapStateToProps)(SimilarReceipes))

import React, { lazy, Suspense } from "react";

const ReceipeInfo = React.lazy(()=> import("../Components/Details/ReceipeDetails"))
const ReceipeIngredients = React.lazy(()=> import("../Components/Details/ReceipeIngredients"))
const Similarreceipe = React.lazy(()=> import("../Components/Details/SimilarReceipes"))



const Detail = () => {

  const Loader=()=>{
    return(
      <div className="nodatarow">
          <div className="nodatacol">
            <img src="https://motiongraphicsphoebe.files.wordpress.com/2018/10/tumblr_nurhzkukqo1syz1nro1_500.gif" />
          </div>
        </div>
    )
  }


  return (
    <div>
      <Suspense fallback={Loader()}>
      <ReceipeInfo />
      <ReceipeIngredients />
      <Similarreceipe />
      </Suspense>
    </div>
  );
};

export default Detail;

import React from "react";
import { Link } from "react-router-dom";
import "./styles/SimilarReceipes.scss";

const Detail = (props) => {
  const { similarReceipesApiData, dummystateupdate } = props;

  const renderSimilarReceipes = () => {
    if (similarReceipesApiData) {
      if (similarReceipesApiData.length > 0) {
        return similarReceipesApiData.map((receipe, idx) => {
          return (
            <Link
              style={{ textDecoration: "none" }}
              to={`/details/${receipe.id}`}
              key={idx}
            >
              <div onClick={dummystateupdate} className="similarReceipesCol">
                
                  <img
                    src={`https://spoonacular.com/recipeImages/${receipe.id}-240x150.jpg`}
                  />
                
                <p>{receipe.title}</p>
              </div>
            </Link>
          );
        });
      }
    }
  };

  return (
    <div>
      <h2 className="similarReceipesTitle">Similar receipes</h2>
      <div className="similarReceipesRow">{renderSimilarReceipes()}</div>
    </div>
  );
};

export default Detail;

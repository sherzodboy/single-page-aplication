import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getMealByID } from "../api";
import Loader from "../componenets/Loader";

export default function Recipe() {
  const [recipe, setRecipe] = useState([]);
  const [showRecipe, setShowRecipe] = useState(false);
  const { id } = useParams();
  const { goBack } = useHistory();

  const handleRecipeShow = () => {
    setShowRecipe(!showRecipe);
  };

  useEffect(() => {
    getMealByID(id).then((data) => setRecipe(data.meals[0]));
  });
  return (
    <>
      <button
        class="btn waves-effect waves-light"
        onClick={goBack}
        type="submit"
        name="action"
      >
        Go back
        <i class="material-icons right">send</i>
      </button>
      {!recipe.idMeal ? (
        <Loader />
      ) : (
        <div className="recipe">
          <img
            style={{
              width: "400px",
              borderRadius: "5px",
              border: "2px solid #DF696E",
              boxShadow: "9px 5px 35px #DF696E",
              marginTop: "1rem",
            }}
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
          />
          <h5
            style={{
              fontWeight: "800",
              fontFamily: "cursive",
              color: "#B15D03",
            }}
          >
            {recipe.strMeal}
          </h5>
          <h5
            style={{
              fontFamily: "cursive",
              color: "#262628",
            }}
          >
            <b>Category:</b> {recipe.strCategory}
          </h5>
          {recipe.srtArea ? <h6> {recipe.srtArea} </h6> : null}
          <p style={{ fontWeight: "700", color: "#6A3000" }}>
            {recipe.strInstructions}
          </p>
          <button onClick={handleRecipeShow} className="btn">
            Show Recipe
          </button>
          {showRecipe ? (
            <table>
              <thead>
                <tr>
                  <th>Ingredient</th>
                  <th>Measure</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(recipe).map((key) => {
                  if (key.includes("Ingredient") && recipe[key]) {
                    return (
                      <tr>
                        <td>{recipe[key]}</td>
                        <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                      </tr>
                    );
                  }
                })}
              </tbody>
            </table>
          ) : null}

          {recipe.strYoutube ? (
            <div className="row">
              <h5>Video Recipe</h5>
              <iframe
                src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(
                  -11
                )}`}
                allowFullScreen
                title={id}
              />
            </div>
          ) : null}
        </div>
      )}
    </>
  );
}

import React from "react";

import Recipe from "./happyRecipe";

import IngredientsList from "./ingredientsList";
import { getRecipeFromMistral } from "./ai";
// import { apiKey } from "./config";
const apiKey = "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";

export default function Main() {
  // const apiKey = import.meta.env.HF_ACCESS_TOKEN;
  const [ingredients, setIngredients] = React.useState([]);

  const [recipe, setRecipe] = React.useState("");

  async function getRecipe() {
    const recipeMarkdown = await getRecipeFromMistral(ingredients, apiKey);
    setRecipe(recipeMarkdown);
    // console.log(recipeMarkdown);
  }

  // use Ref wlal area
  const recipeSection = React.useRef(null);
  console.log(recipeSection);
  React.useEffect(() => {
    if (recipe !== "" && recipeSection !== null) {
      // const yOffset = -80; // header ya nav ka offset (optional)
      const y = recipeSection.current.getBoundingClientRect().top;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  }, [recipe]);

  function faram(sabji) {
    const newIngredient = sabji.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
    // console.log(ingredients);
  }

  return (
    <>
      {/* add ingredient form */}
      <form action={faram} className="daalo">
        <input
          name="ingredient"
          id="input"
          type="text"
          placeholder="e.g - cheese "
        />
        <button id="add">Add Ingredient</button>
      </form>
      {/* ingredient list */}
      {ingredients.length > 0 && (
        <IngredientsList
          ref={recipeSection}
          getRecipe={getRecipe}
          ingredients={ingredients}
        />
      )}
      {/* recipe section */}

      {recipe && <Recipe recipe={recipe} />}
    </>
  );
}

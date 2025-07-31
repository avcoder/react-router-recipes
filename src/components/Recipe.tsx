import { useState, useEffect } from "react";

// routing
import { useParams } from "react-router";

// components
import { Chip } from "primereact/chip";

const Recipe = () => {
  const [recipeDetails, setRecipeDetails] = useState({});

  const { recipeId } = useParams();

  useEffect(() => {
    const getRecipe = async () => {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`
      );
      const data = await res.json();
      console.log(data.meals[0]);
      setRecipeDetails(data.meals[0]);
    };

    getRecipe();
  }, [recipeId]);

  const arr1_20 = Array.from({ length: 20 }, (_, i) => i + 1);

  if (!recipeId) return null;

  return (
    <>
      <h1>{recipeDetails.strMeal}</h1>
      <Chip label={recipeDetails.strCategory} />
      <h2>Ingredients</h2>
      <ul>
        {arr1_20.map((x) => (
          <li>{recipeDetails[`strIngredient${x}`]}</li>
        ))}
      </ul>

      <h2>Instructions</h2>
      <pre>{recipeDetails.strInstructions}</pre>
    </>
  );
};

export default Recipe;

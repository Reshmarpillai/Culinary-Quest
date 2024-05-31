import { useState, useEffect } from "react";
import DOMPurify from "dompurify";
import parse from "html-react-parser";
import styles from "./css/Recipe.module.css";

export default function Recipe({ FoodId }) {
  const [recipe, setRecipe] = useState({});
  const RECIPE_URL = `https://api.spoonacular.com/recipes/${FoodId}/information`;
  const API_KEY = `29bb8341d6514063bf1b22646155408d`;

  useEffect(() => {
    async function fetchRecipe() {
      try {
        const res = await fetch(`${RECIPE_URL}?&apiKey=${API_KEY}`);

        // Check if the response is OK (status code 200-299)
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        // Check if the response is JSON
        const contentType = res.headers.get("content-type");
        if (contentType && contentType.indexOf("application/json") !== -1) {
          const data = await res.json();
          console.log(data);
          setRecipe(data);
        } else {
          const text = await res.text();
          throw new Error(`Unexpected response format: ${text}`);
        }
      } catch (error) {
        console.error("Fetch error:", error);
      }
    }
    fetchRecipe();
  }, [FoodId]);

  // Sanitize the HTML before rendering
  const sanitizedSummary = DOMPurify.sanitize(recipe.summary);

  return (
    <div>
      {/* recipe header  */}
      <div className={styles.header}>
        <div className={styles.imageHeader}>
          <img
            className={styles.recipeImage}
            src={recipe.image}
            alt="recipe_image"
          />
        </div>
        <h2>{recipe.title}</h2>
        <hr />
        <div className={styles.minutes}>
          <span>⏲️Ready In {recipe.readyInMinutes} Minutes</span>
          <span>🍽️Yield : {recipe.servings}</span>
        </div>
      </div>
      {/* recipe header ends here */}

      <div className={styles.info}>
        <span>🥕🫛Vegitarian</span>
        <span>☘️🌿Veegan</span>
      </div>

      <div>
        <h2>Flavor Profile</h2>
        {parse(sanitizedSummary)}
        <h2> Cooking Essentials</h2>
        <h2>How to Make</h2>
      </div>
    </div>
  );
}

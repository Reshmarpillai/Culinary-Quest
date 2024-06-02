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
          <span className={styles.fontstyle}>
            ⏲️Ready In {recipe.readyInMinutes} Minutes
          </span>
          <span className={styles.fontstyle}>🍽️Yield : {recipe.servings}</span>
        </div>
      </div>
      {/* recipe header ends here */}

      {/* info div */}
      <div className={styles.info}>
        <span className={styles.fontstyle}>
          {recipe.vegetarian ? "🥕🫛Vegetarian" : "🥩🍗Non-Vegetarian"}
        </span>
        <span className={styles.fontstyle}>
          {recipe.vegan ? "☘️🌿Vegan" : ""}
        </span>
        <span className={styles.fontstyle}>
          $ {recipe.pricePerServing / 100}
        </span>
      </div>
      {/* info div ends here ....*/}

      <div className={styles.recipeContainer}>
        {/* recipe summary */}
        <div className={styles.summary}>
          <h2>Flavor Profile</h2>
          <p>{parse(sanitizedSummary)}</p>
        </div>
        {/* recipe summary ends .... */}

        {/* ingredients div */}
        <div className={styles.ingredients}>
          {" "}
          <h2> Cooking Essentials</h2>
          <div className={styles.ingredientContainer}>
            {" "}
            {recipe.extendedIngredients &&
            recipe.extendedIngredients.length > 0 ? (
              recipe.extendedIngredients.map((item) => (
                <div className={styles.ingredient} key={item.id}>
                  <div>
                    <img
                      className={styles.ingredientImages}
                      src={
                        `https://spoonacular.com/cdn/ingredients_100x100/` +
                        item.image
                      }
                      alt={item.name}
                    />
                  </div>

                  <div className={styles.nameContainer}>
                    {" "}
                    <h4>{item.name}</h4>
                    <h4>
                      {item.amount}
                      {item.unit}
                    </h4>
                  </div>
                </div>
              ))
            ) : (
              <div >No ingredients available</div>
            )}
          </div>
        </div>
        {/* ingredients div ends... */}

        <div className={styles.making}>
          {" "}
          <h2>How to Make</h2>
          <div className={styles.makingInfo}>
            {recipe.analyzedInstructions &&
            recipe.analyzedInstructions.length > 0 &&
            recipe.analyzedInstructions[0].steps ? (
              recipe.analyzedInstructions[0].steps.map((step) => (
                <li key={step.number}>{step.step}</li>
              ))
            ) : (
              <div >No instructions available</div>
            )}
          </div>
        </div>
        {/* recipe making div  */}
      </div>
    </div>
  );
}

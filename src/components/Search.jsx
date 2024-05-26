// Imports
import { useEffect, useState } from "react";
import { URL, API_KEY } from "./config";
import styles from "./css/Search.module.css";

/**
 * Search component handles the input field for querying recipes.
 * It fetches recipe data from the Spoonacular API based on the user's input.
 *
 * @param {Array} foodData - Array of recipe data.
 * @param {Function} setFoodData - Function to update the foodData state in the parent component.
 */

export default function Search({ foodData, setFoodData }) {
  // State for storing the user's search query
  const [query, setQuery] = useState("Pasta");

  // useEffect Hook to fetch recipes whenever the query changes

  useEffect(() => {
    async function fetchRecipe() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data.results);
      setFoodData(data.results || []);
    }
    if (query) {
      fetchRecipe(); // Fetch recipes only if there's a query
    }
  }, [query, setFoodData]);

  /** An input field to capture the user's search query.
   * The value of the input field is controlled by the query state,
   * and changes to the input field update the query state.*/
  return (
    <div className={styles.wrapper}>
      <div className={styles.searchBar}>
        <input
          id="searchQueryInput"
          value={query}
          type="text"
          name="searchQueryInput"
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search here for recipes"
        />
        <button id="searchQuerySubmit" type="submit" name="searchQuerySubmit">
          <svg style={{ width: "24px", height: "24px" }} viewBox="0 0 24 24">
            <path
              fill="#666666"
              d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

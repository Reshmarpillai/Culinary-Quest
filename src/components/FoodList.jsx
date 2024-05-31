// Importing the FoodItem component
import FoodItem from "./FoodItem";

/**
 * FoodList component renders a list of FoodItem components.
 *
 * @param {Array} foodData - Array of recipe data to be displayed.
 * @returns {JSX.Element} - A div containing a list of FoodItem components.
 */

export default function FoodList({ foodData , setFoodId}) {
  return (
    <div>
      {/* Iterate over the foodData array and render a FoodItem for each food object */}
      {foodData.map((food) => (
        // Each FoodItem requires a unique key prop, here using food.id
        <FoodItem setFoodId={setFoodId} food={food} key={food.id} />
      ))}
    </div>
  );
}

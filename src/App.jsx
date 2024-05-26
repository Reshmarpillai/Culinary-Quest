// imports
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Search from "./components/search";
import FoodList from "./components/FoodList";
import Nav from "./components/Nav";
import "./app.css";

import Sloganbar from "./components/Sloganbar";

/**App component is the main component that manages state and integrates other components**/
function App() {
  // State to hold the array of fetched recipe data
  const [foodData, setFoodData] = useState([]);

  return (
    <div>
      <Router>
        <Nav />
        <Sloganbar />

        <Search foodData={foodData} setFoodData={setFoodData} />
        <FoodList foodData={foodData} />
      </Router>
    </div>
  );
}

export default App;

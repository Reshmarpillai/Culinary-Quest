// imports
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Nav from "./components/Nav";
import Sloganbar from "./components/Sloganbar";
import "./app.css";
import Container from "./components/Container";
import InnerContainer from "./components/InnerContainer";
import Recipe from "./components/Recipe";

/**App component is the main component that manages state and integrates other components**/
function App() {
  // State to hold the array of fetched recipe data
  const [foodData, setFoodData] = useState([]);
  const [FoodId, setFoodId] = useState("654959");

  return (
    <div>
      <Router>
        <Nav />
        <Sloganbar />

        <Search foodData={foodData} setFoodData={setFoodData} />
        <Container>
          <InnerContainer>
            <FoodList setFoodId={setFoodId} foodData={foodData} />
          </InnerContainer>
          <InnerContainer>
            <Recipe FoodId={FoodId} />
          </InnerContainer>
        </Container>
      </Router>
    </div>
  );
}

export default App;

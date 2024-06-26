﻿# Culinary-Quest

Culinary Quest is a React-based web application that allows users to explore various recipes, view detailed ingredients, and follow step-by-step cooking instructions. This app utilizes the Spoonacular API to fetch and display comprehensive recipe information.

Features
Browse and search for recipes by ID.
View detailed recipe information including title, image, summary, ingredients, and cooking instructions.
Clean and secure display of HTML content using DOMPurify and html-react-parser.
Responsive and user-friendly interface.
Installation
To set up the project locally, follow these steps:

Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/culinary-quest.git
cd culinary-quest
Install dependencies:

bash
Copy code
npm install
Add your Spoonacular API key:

Create a .env file in the root directory of the project.
Add your Spoonacular API key to the .env file:
makefile
Copy code
VITE_SPOONACULAR_API_KEY=your_api_key_here
Start the development server:

bash
Copy code
npm run dev
Usage
Search for a recipe:

Enter a recipe ID or recipe name to fetch and display the recipe information.
View recipe details:

The app displays the recipe title, image, summary, ingredients, and instructions.
Securely display HTML content:

The recipe summary is sanitized using DOMPurify and parsed with html-react-parser to ensure safe rendering.
Technologies Used
React
Vite
DOMPurify
html-react-parser
Spoonacular API
API Reference
This project uses the Spoonacular API to fetch recipe information.

Endpoint: https://api.spoonacular.com/recipes/{FoodId}/information
Parameters:
FoodId: The ID of the recipe.
apiKey: Your Spoonacular API key.
Example request:

javascript
Copy code
const RECIPE_URL = `https://api.spoonacular.com/recipes/${FoodId}/information`;
const API_KEY = `your_api_key_here`;

fetch(`${RECIPE_URL}?apiKey=${API_KEY}`)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.

Fork the repository
Create a feature branch
bash
Copy code
git checkout -b feature/your-feature-name
Commit your changes
bash
Copy code
git commit -m 'Add some feature'
Push to the branch
bash
Copy code
git push origin feature/your-feature-name
Create a pull request




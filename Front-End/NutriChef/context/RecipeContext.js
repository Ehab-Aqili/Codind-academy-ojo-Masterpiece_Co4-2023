import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from "axios" 
// Create the context
const RecipeContext = createContext();

// Create a custom hook to access the context
export const useRecipeContext = () => {
  return useContext(RecipeContext);
};

// Create the context provider component
export const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data and update the state
  const fetchData = async () => {
    try {
      const response = await axios.get(
        'https://master-piece.onrender.com/api/recipes/get-recipes'
      );
      setRecipes(response.data.recipes);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <RecipeContext.Provider value={{ recipes, loading }}>
      {children}
    </RecipeContext.Provider>
  );
};

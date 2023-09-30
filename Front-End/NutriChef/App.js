/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import AppNavigation from './Routes/AppNavigation';
import { RecipeProvider } from "./context/RecipeContext"
function App() {
  return (
    <RecipeProvider>
      <AppNavigation />
    </RecipeProvider>
  );
}

export default App;

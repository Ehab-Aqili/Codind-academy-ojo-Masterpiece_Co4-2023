/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import AppNavigation from './Routes/AppNavigation';
import {RecipeProvider} from './context/RecipeContext';
import {AuthProvider} from './context/AuthContext';
function App() {
  return (
    <AuthProvider>
      <RecipeProvider>
        <AppNavigation />
      </RecipeProvider>
    </AuthProvider>
  );
}

export default App;

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
import {LoginProvider} from './context/loginContext';
function App() {
  return (
    <LoginProvider>
      <AuthProvider>
        <RecipeProvider>
          <AppNavigation />
        </RecipeProvider>
      </AuthProvider>
    </LoginProvider>
  );
}

export default App;

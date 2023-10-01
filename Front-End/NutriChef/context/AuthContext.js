import {createContext, useContext, useState} from 'react';
import axios from 'axios';
const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  const signUp = async (username, email, password) => {
    try {
      const response = await axios.post(
        'https://master-piece.onrender.com/api/user/signup',
        {
          username: username,
          email: email,
          password: password,
          role: 'user',
        },
      );
      setUser(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const authContextValue = {
    user,
    signUp,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

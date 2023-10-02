import {createContext, useContext, useState} from 'react';
import axios from 'axios';
const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState();
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
      setUser(response.data.user);
      setToken(response.data.token);
      //   console.log(response.data.user);
    } catch (error) {
      console.error(error);
    }
  };

  console.log(user);
  // console.log(token);
  const authContextValue = {
    user,
    signUp,
    token,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

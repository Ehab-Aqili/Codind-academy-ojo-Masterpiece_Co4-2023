import {createContext, useContext, useState} from 'react';
import axios from 'axios';
const LoginContext = createContext();

export const useLoginContext = () => {
  return useContext(LoginContext);
};

export const LoginProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState();
  const login = async (email, password) => {
    try {
      const response = await axios.post(
        'https://master-piece.onrender.com/api/user/login',
        {
          email: email,
          password: password,
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
  const loginContextValue = {
    user,
    login,
    token,
  };

  return (
    <LoginContext.Provider value={loginContextValue}>
      {children}
    </LoginContext.Provider>
  );
};

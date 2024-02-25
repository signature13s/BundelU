import React, {useState, useEffect} from 'react';
const UserAuthContext = React.createContext();
import AsyncStorage from '@react-native-async-storage/async-storage';

const UserAuthContextProvider = ({children}) => {
  const [authenticated, setauthenticated] = useState(false);

  useEffect(() => {
    getUser();
  }, []);

  function getUser() {
    AsyncStorage.getItem('userId').then(value => {
      if (value == null) {
        setauthenticated(false);
      } else {
        setauthenticated(value);
      }
    });
  }

  const logout = async () => {
    await AsyncStorage.removeItem('userId');
    setauthenticated(false);
  };
  return (
    <UserAuthContext.Provider value={{authenticated, getUser, logout}}>
      {children}
    </UserAuthContext.Provider>
  );
};

export {UserAuthContext, UserAuthContextProvider};

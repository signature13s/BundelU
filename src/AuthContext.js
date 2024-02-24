import React, {useState, useEffect} from 'react';
const UserAuthContext = React.createContext();
import AsyncStorage from '@react-native-async-storage/async-storage';

const UserAuthContextProvider = ({children}) => {
  const [User, setUser] = useState('');
  const [userType, setuserType] = useState('student');

  useEffect(() => {
    getUser();
  }, []);

  function getUser() {
    AsyncStorage.getItem('userId').then(value => {
      setUser(value);
    });

    AsyncStorage.getItem('userType').then(value => {
      if (value == null) {
        setuserType('student');
      } else {
        setuserType(value);
      }
    });
  }

  const logout = async () => {
    await AsyncStorage.removeItem('userId');
    await AsyncStorage.removeItem('userType');
    setUser(null);
    setuserType('student');
  };
  return (
    <UserAuthContext.Provider
      value={{User, getUser, userType, logout, setuserType}}>
      {children}
    </UserAuthContext.Provider>
  );
};

export {UserAuthContext, UserAuthContextProvider};

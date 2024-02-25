import React, {useContext, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './Splash';
import Login from './Login';
import Register from './Register';
import Onboarding from './Onboarding';
import Forgot from './Forgot';
import Account from './Account';
import {UserAuthContext} from './AuthContext';
import Tabs from './Tabs';
import PdfViewer from './PdfViewer';
import Edit from './Edit';

const Route = () => {
  const Stack = createNativeStackNavigator();
  const [loading, setloading] = useState(true);
  const {authenticated} = useContext(UserAuthContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      setloading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Splash />;

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Onboarding"
        screenOptions={{
          headerShown: false,
        }}>
        {authenticated == false ? (
          <>
            <Stack.Screen name="Onboarding" component={Onboarding} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Forgot" component={Forgot} />
          </>
        ) : (
          <>
            <Stack.Screen name="Home" component={Tabs} />
            <Stack.Screen name="Account" component={Account} />
            <Stack.Screen name="PdfViewer" component={PdfViewer} />
            <Stack.Screen name="Edit" component={Edit} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Route;

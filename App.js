import {PermissionsAndroid, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {AlertNotificationRoot} from 'react-native-alert-notification';
import {UserAuthContextProvider} from './src/AuthContext';
import Route from './src/Route';

const App = () => {
  useEffect(() => {
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
    );
  }, []);

  return (
    <UserAuthContextProvider>
      <AlertNotificationRoot>
        <Route />
      </AlertNotificationRoot>
    </UserAuthContextProvider>
  );
};

export default App;

const styles = StyleSheet.create({});

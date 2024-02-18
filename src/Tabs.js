import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
import {
  HomeIcon,
  PencilSquareIcon,
  AcademicCapIcon,
  BellAlertIcon,
} from 'react-native-heroicons/solid';
import Notice from './Notice';
import Placements from './Placements';
import Notes from './Notes';
const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarInactiveTintColor: 'gray',
        tabBarActiveTintColor: '#7B61FF',
        tabBarStyle:50,
        headerShown:false
      }}>
      <Tab.Screen
        name="StudentHome"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => {
            return <HomeIcon color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="Notices"
        component={Notice}
        options={{
          tabBarIcon: ({color, size}) => {
            return <BellAlertIcon color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="Notes"
        component={Notes}
        options={{
          tabBarIcon: ({color, size}) => {
            return <PencilSquareIcon color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="Placements"
        component={Placements}
        options={{
          tabBarIcon: ({color, size}) => {
            return <AcademicCapIcon color={color} size={size} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({});

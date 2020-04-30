import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { FunctionComponent } from 'react';
import { StyleSheet, Alert, Platform } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Activity from '../components/Activity';
import AddPost from '../components/AddPost';
import Home from '../components/Home';
import Profile from '../components/Profile';
import Search from '../components/Search';

const Tab: FunctionComponent = () => {
  const Tabs: any = createBottomTabNavigator();

  return (
    <Tabs.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: 'red',
      }}
    >
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <Ionicons name={returnIconNameBasedOnPlatform('home')} size={20} />
          ),
        }}
      />
      <Tabs.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: () => (
            <Ionicons name={returnIconNameBasedOnPlatform('search')} size={20} />
          ),
        }}
      />
      <Tabs.Screen
        name="AddPost"
        component={AddPost}
        options={{
          tabBarLabel: 'AddPost',
          tabBarIcon: () => (
            <Ionicons name={returnIconNameBasedOnPlatform('add-circle')} size={20} />
          ),
        }}
      />
      <Tabs.Screen
        name="Activity"
        component={Activity}
        options={{
          tabBarLabel: 'Activity',
          tabBarIcon: () => (
            <Ionicons name={returnIconNameBasedOnPlatform('heart')} size={20} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: () => (
            <Ionicons name={returnIconNameBasedOnPlatform('person')} size={20} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

const returnIconNameBasedOnPlatform = (param: string) => {
  return Platform.OS === 'ios' ? `ios-${param}` : `md-${param}`;
}

const styles = StyleSheet.create({});

export default Tab;

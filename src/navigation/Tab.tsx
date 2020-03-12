import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { FunctionComponent } from 'react';
import { StyleSheet, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Activity from '../components/Activity';
import AddPost from '../components/AddPost';
import Home from '../components/Home';
import Profile from '../components/Profile';
import Search from '../components/Search';

const Tab: FunctionComponent = () => {
  const Tabs: any = createBottomTabNavigator();
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        screenOptions={({route}: any) => {
          return {
            tabBarIcon: ({focused, color, size}: any) => {
              let iconName: string = 'ios-information-circle';
              if (route.name === 'Home') {
                iconName = focused
                  ? 'ios-information-circle'
                  : 'ios-information-circle-outline';
              } else if (route.name === 'Settings') {
                iconName = focused ? 'ios-list-box' : 'ios-list';
              }
              // You can return any component that you like here!
              return (
                <Ionicons
                  name={iconName}
                />
              );
            },
          };
        }}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
        name="Home"
        component={Home}
      />
      <Tabs.Screen name="Search" component={Search} />
      <Tabs.Screen name="AddPost" component={AddPost} />
      <Tabs.Screen name="Activity" component={Activity} />
      <Tabs.Screen name="Profile" component={Profile} />
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({});

export default Tab;

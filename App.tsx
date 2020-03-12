import React, { FunctionComponent } from 'react';
import 'react-native-gesture-handler';
import {
  StyleSheet,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tab from './src/navigation/Tab';
import LoginScreen from './src/auth/Login';

const App: FunctionComponent = () => {

  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" >
          {props => <LoginScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Tabs" component={Tab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});

export default App;

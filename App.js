import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './screens/Login';
import Home from './screens/Home';
import Billing from './screens/Billing';
import OutletView from './screens/OutletView';
const Stack = createStackNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="home"
          screenOptions={{
            headerStyle: {backgroundColor: '#212529', elevation: 5},
            headerTitleStyle: {
              color: '#ffffff',
              fontSize: 30,
              fontFamily: 'OpenSans-Regular',
            },
            headerTintColor: '#ffffff',
          }}>
          <Stack.Screen
            name="login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="home"
            component={Home}
            options={{title: 'Hi Shubham'}}
          />
          <Stack.Screen
            name="billing"
            component={Billing}
            options={{title: 'Billing'}}
          />
          <Stack.Screen
            name="outletview"
            component={OutletView}
            options={{title: ''}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;

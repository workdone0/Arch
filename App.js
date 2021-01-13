import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {Easing} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  TransitionPresets,
  createStackNavigator,
  CardStyleInterpolators,
  TransitionSpecs,
} from '@react-navigation/stack';

import Login from './screens/Login';
import Home from './screens/Home';
import Billing from './screens/Billing';
import OutletView from './screens/OutletView';
import Invoice from './screens/Invoice';
const Stack = createStackNavigator();

const openConfig = {
  animation: 'timing',
  config: {
    duration: 400,
    easing: Easing.linear,
  },
};

const closeConfig = {
  animation: 'timing',
  config: {
    duration: 300,
    easing: Easing.linear,
  },
};

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="login"
          headerMode="float"
          screenOptions={{
            headerStyle: {backgroundColor: '#212529', elevation: 5},
            headerTitleStyle: {
              color: '#ffffff',
              fontSize: 30,
              fontFamily: 'OpenSans-Regular',
            },
            headerTintColor: '#ffffff',
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            transitionSpec: {
              open: openConfig,
              close: closeConfig,
            },
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
          <Stack.Screen
            name="invoice"
            component={Invoice}
            options={{title: 'Invoicing'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;

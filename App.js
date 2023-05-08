import React, {useEffect} from 'react';
import {CryptoDetail, Transaction} from './screens';
// import {createStackNavigator} from '@react-navigation/stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';

import Tabs from './navigation/tabs';
import {StatusBar} from 'react-native';
import {COLORS} from './constants';

// const Stack = createStackNavigator();
const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <StatusBar hidden={true} />
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={'Home'}>
        <Stack.Screen name="Home" component={Tabs} />
        <Stack.Screen name="CryptoDetail" component={CryptoDetail} />
        <Stack.Screen
          name="Transaction"
          component={Transaction}
          options={{
            headerShown: true,
            title: 'Back',
            headerStyle: {backgroundColor: COLORS.backgroundWhite},
            headerTintColor: COLORS.white,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

import React from 'react';
import {View, Image, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import LinearGradient from 'react-native-linear-gradient';

import {Home} from '../screens';
import {COLORS, FONTS, icons} from '../constants';

const Tab = createBottomTabNavigator();

const TabBarCustomButton = ({children, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        top: -30,
        justifyContent: 'center',
        alignItems: 'center',
        ...styles.shadow,
        //borderRadius: 35,
        //borderBottomColor: '#eee',
       // borderBottomWidth: 5,
        //borderLeftColor: '#eee',
        //borderLeftWidth: 5,
       // borderRightColor: '#eee',
        //borderRightWidth: 5,
      }}
      onPress={onPress}>
      <LinearGradient
        colors={[COLORS.primary, COLORS.secondary]}
        style={{width: 70, height: 70, borderRadius: 35}}>
        {children}
      </LinearGradient>
    </TouchableOpacity>
  );
};

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          display: 'flex',
          // bottom: 0,
          // left: 0,
          // right: 0,
          // top: 0,
          elevation: 0,
          backgroundColor: COLORS.backgroundWhite,
          borderTopColor: 'transparent',
          height: 60,
        },
      }}
      //   tabBarOptions={{
      //     showLabel: false,
      //     style: {
      //       //   position: 'absolute',
      //       //   bottom: 0,
      //       //   top: 0,
      //       //   left: 0,
      //       //   right: 0,
      //       //   elevation: 0,
      //       //   backgroundColor: COLORS.white,
      //       //   borderTopColor: 'transparent',
      //       //   height: 100,
      //     },
      //   }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={icons.home}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? COLORS.primary : COLORS.white,
                }}
              />
              <Text
                style={{
                  color: focused ? COLORS.primary : COLORS.black,
                  ...FONTS.body5,
                }}>
                HOME
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Portfolio"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={icons.pie_chart}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? COLORS.primary : COLORS.white,
                }}
              />
              <Text
                style={{
                  color: focused ? COLORS.primary : COLORS.white,
                  ...FONTS.body5,
                }}>
                PORTFOLIO
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Transaction"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={icons.transaction}
              resizeMode="contain"
              style={{width: 30, height: 30, tintColor: '#fff'}}
            />
          ),

          tabBarButton: props => <TabBarCustomButton {...props} />,
        }}
      />

      <Tab.Screen
        name="Prices"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={icons.line_graph}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? COLORS.primary : COLORS.white,
                }}
              />
              <Text
                style={{
                  color: focused ? COLORS.primary : COLORS.white,
                  ...FONTS.body5,
                }}>
                {' '}
                PRICES{' '}
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Settings"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={icons.settings}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? COLORS.primary : COLORS.white,
                }}
              />
              <Text
                style={{
                  color: focused ? COLORS.primary : COLORS.white,
                  ...FONTS.body5,
                }}>
                {' '}
                SETTINGS{' '}
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: COLORS.primary,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

export default Tabs;

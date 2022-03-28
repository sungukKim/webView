import React, {Component} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MyWebView from './src/component/MyWebView';
import MyCameraView from './src/component/MyCameraView';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="WebView">
        <Tab.Screen name="WebView" component={MyWebView} />
        <Tab.Screen name="CameraView" component={MyCameraView} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;

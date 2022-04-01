import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MyWebView from './src/component/MyWebView';
import MyCameraView from './src/component/MyCameraView';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WebView">
        <Stack.Screen name="WebView" component={MyWebView} />
        <Stack.Screen name="CameraView" component={MyCameraView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

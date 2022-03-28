import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {WebView} from 'react-native-webview';

const temp = () => {
  const USER_AGENT =
    'Mozilla/5.0 (Linux; Android 4.1.1; Galaxy Nexus Build/JRO03C) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166 Mobile Safari/535.19';
  const BASE_URL = 'http://my-identity.landingdist.com';
  return (
    <View style={{width: '100%', height: '100%'}}>
      <WebView
        userAgent={USER_AGENT}
        cacheEnabled={false}
        startInLoadingState={true}
        allowsBackForwardNavigationGestures={true}
        source={{uri: 'http://my-identity.landingdist.com'}}
        mixedContentMode={'compatibility'}
        overScrollMode={'never'}
        //   injectedJavaScript={` (function() { function wrap(fn) { return function wrapper() { var res = fn.apply(this, arguments); window.ReactNativeWebView.postMessage(window.location.href); return res; } } history.pushState = wrap(history.pushState); history.replaceState = wrap(history.replaceState); window.addEventListener('popstate', function() { window.ReactNativeWebView.postMessage(window.location.href); }); })(); true; `}
      />
    </View>
  );
};

export default temp;

const styles = StyleSheet.create({});

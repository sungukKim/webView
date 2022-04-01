import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import {WebView} from 'react-native-webview';
import RNFS from 'react-native-fs';

const MyWebView = () => {
  let myWebView;
  const navigation = useNavigation();
  const USER_AGENT =
    'Mozilla/5.0 (Linux; Android 4.1.1; Galaxy Nexus Build/JRO03C) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166 Mobile Safari/535.19';
  // const BASE_URL = 'http://my-identity.landingdist.com';
  const BASE_URL = '192.168.30.162';

  function handleOnMessage(event) {
    const webViewBridgeData = JSON.parse(event.nativeEvent.data); //JSON.parse();
    switch (webViewBridgeData.command) {
      case 'OPEN_CAMERA': {
        const params = {};
        params.orientation = webViewBridgeData.params.orientation;
        params.onTaken = handleOnTacken;
        navigation.push('CameraView', params);
        break;
      }
    }
  }
  function handleOnTacken(image) {
    const filePath = image.uri;
    RNFS.readFile(filePath, 'base64').then(res => {
      const msgData = {};
      msgData.command = 'onTaken';
      msgData.image = res;
      myWebView.postMessage(JSON.stringify(msgData));
    });
  }

  return (
    <View style={{width: '100%', height: '100%'}}>
      <WebView
        ref={webview => {
          myWebView = webview;
        }}
        userAgent={USER_AGENT}
        cacheEnabled={false}
        startInLoadingState={true}
        allowsBackForwardNavigationGestures={true}
        source={{uri: BASE_URL}}
        mixedContentMode={'compatibility'}
        overScrollMode={'never'}
        useWebKit={true}
        javaScriptEnabled={true}
        onMessage={handleOnMessage}
      />
    </View>
  );
};

export default MyWebView;

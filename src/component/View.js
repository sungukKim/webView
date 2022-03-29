import React from 'react';
import {View, Pressable, Button, StyleSheet} from 'react-native';
import {RNCamera} from 'react-native-camera';

const MyCameraView = () => {
  const cameraRef = React.useRef(null); // useRef로 camera를 위한 ref를 하나 만들어주고

  const takePhoto = async () => {
    console.log('cameraRef', cameraRef);
    if (cameraRef) {
      const data = await cameraRef.current.takePictureAsync({
        quality: 1,
        exif: true,
      });
      console.log('😻 data', data);
    }
  };

  return (
    <>
      <View style={{width: '100%', height: '80%', backgroundColor: 'red'}}>
        <RNCamera
          ref={cameraRef}
          style={{
            width: '100%',
            height: '80%',
          }}
          captureAudio={false}
          autoFocus={RNCamera.Constants.AutoFocus.on}
        />
      </View>
      <Button title={'사진'} onPress={takePhoto} />
    </>
  );
};

export default MyCameraView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

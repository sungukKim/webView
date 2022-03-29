import React, {useEffect, useState} from 'react';
import {View, Pressable, Button, StyleSheet} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {Dimensions} from 'react-native';

const MyCameraView = () => {
  const cameraRef = React.useRef(null); // useRef로 camera를 위한 ref를 하나 만들어주고

  const isPortrait = () => {
    const dim = Dimensions.get('screen');
    return dim.height >= dim.width;
  };

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
      <View style={{width: '100%', height: '90%', backgroundColor: 'red'}}>
        <RNCamera
          ref={cameraRef}
          style={{
            width: '100%',
            height: '100%',
          }}
          captureAudio={true}
          autoFocus={RNCamera.Constants.AutoFocus.on}
        />
      </View>
      <View style={styles.container}>
        <View style={styles.rectangle} />
      </View>
      <Button title={'사진촬영'} onPress={takePhoto} />
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
    position: 'relative',
  },
  rectangle: {
    borderColor: 'yellow',
    position: 'absolute',
    borderWidth: 7,
    bottom: 90,
    width: 650,
    height: 1000,
  },
});

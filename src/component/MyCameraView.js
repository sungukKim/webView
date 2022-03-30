import React, {useEffect, useState} from 'react';
import {View, Pressable, Button, StyleSheet} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {Dimensions} from 'react-native';
import {useOrientation} from './useOrientation';
import Orientation from 'react-native-orientation';

const MyCameraView = () => {
  const cameraRef = React.useRef(null); // useRef로 camera를 위한 ref를 하나 만들어주고
  const orientation = useOrientation();
  const initial = Orientation.getInitialOrientation();

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
      <View style={{width: '100%', height: '90%'}}>
        <RNCamera
          ref={cameraRef}
          style={{
            width: '100%',
            height: '100%',
          }}
          captureAudio={false}
          autoFocus={RNCamera.Constants.AutoFocus.on}
        />
      </View>
      <View
        Style={initial === 'PORTRAIT' ? styles.portrait : styles.landscape}
      />
      <View style={styles.container} />
      {/*  <View style={{color: orientation === 'PORTRAIT' ? 'red' : 'blue'}} /> */}
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
  portrait: {
    borderColor: 'yellow',
    position: 'absolute',
    borderWidth: 7,
    bottom: 10,
    width: 250,
    height: 450,
  },
  landscape: {
    borderColor: 'yellow',
    position: 'absolute',
    borderWidth: 7,
    bottom: 20,
    width: 650,
    height: 1050,
  },
});

import React from 'react';
import {View, StyleSheet, Button} from 'react-native';
import {RNCamera} from 'react-native-camera';

const MyCameraView = ({route}) => {
  const cameraRef = React.useRef(null); // useRef로 camera를 위한 ref를 하나 만들어주고
  const takePhoto = async () => {
    if (cameraRef) {
      const data = await cameraRef.current.takePictureAsync({
        quality: 1,
        exif: true,
      });

      route.params.onTaken && route.params.onTaken(data);
    }
  };

  return (
    <>
      <View style={{width: '100%', height: '100%'}}>
        <RNCamera
          ref={cameraRef}
          style={{width: '100%', height: '95%'}}
          captureAudio={false}
          autoFocus={RNCamera.Constants.AutoFocus.on}
          detectedImageInEvent={true}
        />
        <View style={styles.landscape} />
        <Button title={'사진촬영'} onPress={takePhoto} />
      </View>
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
    width: '80%',
    height: '80%',
    alignContent: 'center',
    alignItems: 'center',
    margin: '10%',
    // marginVertical: '10%',
    justifyContent: 'center',
  },
});

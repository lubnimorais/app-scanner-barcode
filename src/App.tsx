import {useEffect, useCallback} from 'react';
import {Alert} from 'react-native';

import {Camera} from 'react-native-vision-camera';

import {Home} from './Home';

const App = () => {
  const checkCameraPermission = useCallback(async () => {
    let status = await Camera.getCameraPermissionStatus();
    if (status !== 'authorized') {
      await Camera.requestCameraPermission();
      status = await Camera.getCameraPermissionStatus();
      if (status === 'denied') {
        Alert.alert(
          'You will not be able to scan if you do not allow camera access',
        );
      }
    }
  }, []);

  useEffect(() => {
    checkCameraPermission();
  }, [checkCameraPermission]);

  return <Home />;
};

export {App};

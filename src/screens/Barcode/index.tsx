import { useEffect, useCallback, useState } from 'react';
import { StyleSheet, Alert, StatusBar } from 'react-native';

import { useCameraDevices, Camera } from 'react-native-vision-camera';
import { useScanBarcodes, BarcodeFormat } from 'vision-camera-code-scanner';

import { Container, BoxCamera } from './styles';

const BarcodeScreen = () => {
  const devices = useCameraDevices();
  const device = devices.back;

  const [frameProcessor, barcodes] = useScanBarcodes([
    BarcodeFormat.ALL_FORMATS, // You can only specify a particular format
  ]);

  const [hasPermission, setHasPermission] = useState(false);
  const [isScanned, setIsScanned] = useState(false);

  const checkCameraPermission = useCallback(async () => {
    const status = await Camera.getCameraPermissionStatus();
    setHasPermission(status === 'authorized');
  }, []);

  const toggleActiveState = useCallback(async () => {
    if (barcodes && barcodes.length > 0 && isScanned === false) {
      setIsScanned(true);

      barcodes.forEach(async (scannedBarcode: any) => {
        if (scannedBarcode.rawValue !== '') {
          Alert.alert('Scanner', scannedBarcode.rawValue, [
            {
              text: 'Scan again',
              onPress: () => {
                setIsScanned(false);
              },
            },
          ]);
        }
      });
    }
  }, [barcodes]);

  useEffect(() => {
    checkCameraPermission();
  }, [checkCameraPermission]);

  useEffect(() => {
    toggleActiveState();
    return () => {
      barcodes;
    };
  }, [barcodes, toggleActiveState]);

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />

      {device && hasPermission && (
        <BoxCamera>
          <Camera
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={!isScanned}
            frameProcessor={frameProcessor}
            frameProcessorFps={5}
            audio={false}
          />
        </BoxCamera>
      )}
    </Container>
  );
};

export { BarcodeScreen };

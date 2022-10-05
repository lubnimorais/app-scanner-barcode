import {useEffect, useCallback, useState} from 'react';
import {View, StyleSheet, Alert, StatusBar} from 'react-native';

import {useCameraDevices, Camera} from 'react-native-vision-camera';
import {useScanBarcodes, BarcodeFormat} from 'vision-camera-code-scanner';
import {RNHoleView} from 'react-native-hole-view';

const Home = () => {
  const devices = useCameraDevices();
  const device = devices.back;

  const [frameProcessor, barcodes] = useScanBarcodes([
    BarcodeFormat.ALL_FORMATS, // You can only specify a particular format
  ]);
  const [barcode, setBarcode] = useState('');
  const [hasPermission, setHasPermission] = useState(false);
  const [isScanned, setIsScanned] = useState(false);

  const checkCameraPermission = useCallback(async () => {
    const status = await Camera.getCameraPermissionStatus();
    setHasPermission(status === 'authorized');
  }, []);

  const toggleActiveState = useCallback(async () => {
    if (barcodes && barcodes.length > 0 && isScanned === false) {
      setIsScanned(true);
      setBarcode('');
      barcodes.forEach(async (scannedBarcode: any) => {
        if (scannedBarcode.rawValue !== '') {
          setBarcode(scannedBarcode.rawValue);
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
    <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.5)'}}>
      {device && hasPermission && (
        <>
          <StatusBar barStyle="light-content" backgroundColor="#000000" />
          <View
            style={{
              position: 'absolute',
              width: '70%',
              height: '30%',
              alignSelf: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              top: '35%',
            }}>
            <Camera
              style={StyleSheet.absoluteFill}
              device={device}
              isActive={!isScanned}
              frameProcessor={frameProcessor}
              frameProcessorFps={5}
              audio={false}
            />
          </View>
        </>
      )}
    </View>
  );
};

export {Home};

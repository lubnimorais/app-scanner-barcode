import { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Container, NavigationButton, NavigationButtonText } from './styles';

const Home = () => {
  const navigation = useNavigation();

  const handleScannerQRCode = useCallback(() => {
    navigation.navigate('QRCodeScreen');
  }, [navigation]);

  const handleScannerBarcode = useCallback(() => {
    navigation.navigate('BarcodeScreen');
  }, [navigation]);

  return (
    <Container>
      <NavigationButton onPress={handleScannerQRCode}>
        <NavigationButtonText>QRCode</NavigationButtonText>
      </NavigationButton>

      <NavigationButton onPress={handleScannerBarcode}>
        <NavigationButtonText>Barcode</NavigationButtonText>
      </NavigationButton>
    </Container>
  );
};

export { Home };

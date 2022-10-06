import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { QRCodeScreen } from '../screens/QRCode';
import { BarcodeScreen } from '../screens/Barcode';

const StackNavigation = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <StackNavigation.Navigator>
        <StackNavigation.Screen
          name="Home"
          component={Home}
          options={{ title: 'Scanner React Native' }}
        />
        <StackNavigation.Screen
          name="QRCodeScreen"
          component={QRCodeScreen}
          options={{ title: 'QR Code' }}
        />
        <StackNavigation.Screen
          name="BarcodeScreen"
          component={BarcodeScreen}
          options={{ title: 'Barcode' }}
        />
      </StackNavigation.Navigator>
    </NavigationContainer>
  );
};

export { Routes };

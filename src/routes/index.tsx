import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../Home';
import { QRCodeScreen } from '../QRCode';
import { BarcodeScreen } from '../Barcode';

const StackNavigation = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <StackNavigation.Navigator>
        <StackNavigation.Screen name="Home" component={Home} />
        <StackNavigation.Screen name="QRCodeScreen" component={QRCodeScreen} />
        <StackNavigation.Screen
          name="BarcodeScreen"
          component={BarcodeScreen}
        />
      </StackNavigation.Navigator>
    </NavigationContainer>
  );
};

export { Routes };

import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const NavigationButton = styled(TouchableOpacity).attrs({
  activeOpacity: 0.7,
})`
  margin-bottom: 20px;
`;

export const NavigationButtonText = styled.Text`
  font-size: 20px;
`;

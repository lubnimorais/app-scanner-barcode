import styled from 'styled-components/native';
import { RFPercentage } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
`;

export const BoxCamera = styled.View`
  position: absolute;
  top: ${RFPercentage(30)}px;

  width: ${RFPercentage(30)}px;
  height: ${RFPercentage(30)}px;

  align-self: center;
  align-items: center;
  justify-content: center;
`;

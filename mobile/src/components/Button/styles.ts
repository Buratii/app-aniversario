import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  height: 60px;
  background: #6c62fe;
  border-radius: 10px;
  margin-top: 8px;

  justify-content: center;
  align-items: center;
`;
export const ButtonText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  color: #f5f5f5;
  font-size: 20px;
`;

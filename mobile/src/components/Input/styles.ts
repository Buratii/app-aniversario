import styled, { css } from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  border-radius: 10px;
  border-width: 2px;
  border-color: #6c62fe;
  margin-bottom: 8px;

  flex-direction: row;
  align-items: center;

  ${props => props.isErrored &&
    css`
      border-color: #fc7753;
    `}

  ${props => props.isFocused &&
    css`
      border-color: #05aa85;
    `}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #232129;
  font-size: 16px;
  font-family: 'RobotoSlab-Regular';
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;

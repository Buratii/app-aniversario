import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 24px 24px 0;
`;

export const HeaderView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderText = styled.Text`
  font-size: 20px;
  font-family: 'RobotoSlab-SemiBold';
  color: #333;
`;

export const DescText = styled.Text`
  font-size: 20px;
  font-family: 'RobotoSlab-Regular';
  line-height: 24px;
  margin: 24px 0 16px 0;
  color: #333;
`;

export const AddBirthdayButton = styled.TouchableOpacity`
  font-size: 20px;
  font-family: 'RobotoSlab-Regular';
  line-height: 24px;
  margin: 24px 0 16px 0;
  color: #333;
`;

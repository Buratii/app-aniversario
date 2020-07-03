import styled from 'styled-components/native';

export const Container = styled.View`
  height: 150px;
  background: #f5f5f5;
  border-radius: 10px;
  margin-top: 20px;
  elevation: 3;

  justify-content: center;
`;

export const ColoredView = styled.Text`
  position: absolute;
  top: 187px;
  left: 24px;
  padding: 10px 5px 122px;
  background: #05aa85;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  elevation: 3;
`;

export const DateText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  color: #333;
  font-size: 30px;
  margin-left: 25px;
`;

export const TimeText = styled.Text`
  font-family: 'RobotoSlab-Regular';
  color: #333;
  font-size: 18px;
  margin: 2px 0 0 25px;
`;

export const LocalizationText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  color: #333;
  font-size: 18px;
  margin: 2px 0 0 25px;
`;

export const GiftText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  color: #333;
  font-size: 18px;
  margin: 2px 0 0 25px;
`;

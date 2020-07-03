import React from 'react';

import {
  Container,
  DateText,
  TimeText,
  LocalizationText,
  GiftText,
  ColoredView,
} from './styles';

const Birthdays: React.FC = () => (
  <>
    <Container>
      <DateText>27/07/2020</DateText>
      <TimeText>20:00</TimeText>
      <LocalizationText>Rua Paraíba, 180, Criciúma-SC</LocalizationText>
      <GiftText>Carrinho</GiftText>
    </Container>
    <ColoredView />
  </>
);

export default Birthdays;

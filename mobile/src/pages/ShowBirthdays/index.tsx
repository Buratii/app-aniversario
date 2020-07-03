import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { useNavigation } from '@react-navigation/native';

import ViewBirthdays from '../../components/Birthdays';
// import api from '../../services/api';

import logoImg from '../../assets/logo.png';

import {
  Container,
  HeaderView,
  HeaderText,
  DescText,
  AddBirthdayButton,
} from './styles';

const ShowBirthdays: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <Container>
            <HeaderView>
              <Image style={{ width: 110, height: 80 }} source={logoImg} />
              <HeaderText>Bem-vindo!</HeaderText>
            </HeaderView>
            <DescText>Abaixo estão suas datas agendadas</DescText>
            <ViewBirthdays />
          </Container>
          <AddBirthdayButton>
            <Icon name="plus" size={40} />
          </AddBirthdayButton>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default ShowBirthdays;

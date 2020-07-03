import React, { useRef, useCallback } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  View,
  Image,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import api from '../../services/api';

import getValidationErrors from '../../utils/getValidationErrors';
import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.png';

import {
  Container,
  Title,
  BackToLoginButton,
  BackToLoginButtonText,
} from './styles';

interface SiginUpFormData {
  date: Date;
  time: string;
  localization: string;
  gift: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const dateInputRef = useRef<TextInput>(null);
  const timeInputRef = useRef<TextInput>(null);
  const giftInputRef = useRef<TextInput>(null);

  const navigation = useNavigation();

  const handleSignUp = useCallback(async (birthdayData: SiginUpFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        date: Yup.date().required('data obrigatório'),
        time: Yup.string().required('horário obrigatório'),
        localization: Yup.string().required('local obrigatório'),
        gift: Yup.string().required('presente obrigatório'),
      });

      await schema.validate(birthdayData, { abortEarly: false });

      await api.post('/registerBirthday', birthdayData);

      Alert.alert('Data cadastrada com sucesso!');

      navigation.goBack();
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);

        return;
      }

      Alert.alert(
        'Erro ao adicionar nova data',
        'Ocorreu um erro ao fazer o cadastro de uma nova data.',
      );
    }
  }, []);

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
            <Image source={logoImg} />
            <View>
              <Title>Novo aniversário</Title>
            </View>

            <Form ref={formRef} onSubmit={handleSignUp}>
              <Input
                autoCapitalize="none"
                name="date"
                icon="calendar"
                placeholder="Data"
                returnKeyType="next"
                onSubmitEditing={() => dateInputRef.current?.focus()}
              />

              <Input
                ref={dateInputRef}
                autoCapitalize="none"
                name="time"
                icon="clock"
                placeholder="Horário"
                returnKeyType="next"
                onSubmitEditing={() => timeInputRef.current?.focus()}
              />

              <Input
                ref={timeInputRef}
                autoCorrect={false}
                autoCapitalize="none"
                name="localization"
                icon="map-pin"
                placeholder="Local"
                returnKeyType="next"
                onSubmitEditing={() => giftInputRef.current?.focus()}
              />

              <Input
                ref={giftInputRef}
                name="gift"
                icon="gift"
                placeholder="Presente"
                returnKeyType="send"
                onSubmitEditing={() => formRef.current?.submitForm()}
              />

              <Button onPress={() => formRef.current?.submitForm()}>
                Adicionar
              </Button>
            </Form>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <BackToLoginButton
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Icon name="arrow-left" size={20} color="#6C62FE" />
        <BackToLoginButtonText>Faça seu login!</BackToLoginButtonText>
      </BackToLoginButton>
    </>
  );
};

export default SignUp;

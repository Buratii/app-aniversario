import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SingIn from '../pages/SignIn';
import SingUp from '../pages/SignUp';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#f5f5f5' },
    }}
  >
    <Auth.Screen name="SignIn" component={SingIn} />
    <Auth.Screen name="SignUp" component={SingUp} />
  </Auth.Navigator>
);

export default AuthRoutes;

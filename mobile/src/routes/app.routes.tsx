import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AddNewBirthday from '../pages/AddNewBirthday';
import ShowBirthdays from '../pages/ShowBirthdays';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#f5f5f5' },
    }}
  >
    <App.Screen name="AddNewBirthday" component={AddNewBirthday} />
    <App.Screen name="ShowBirthdays" component={ShowBirthdays} />
  </App.Navigator>
);

export default AppRoutes;

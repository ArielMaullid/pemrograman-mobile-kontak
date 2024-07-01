// App.js or wherever your navigation is configured
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ContactsList from './components/ContactsList';
import ContactDetail from './components/ContactDetail';
import SmsPage from './components/SmsPage';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ContactsList">
        <Stack.Screen name="ContactsList" component={ContactsList} options={{ title: 'Contacts' }} />
        <Stack.Screen name="Detail" component={ContactDetail} options={{ title: 'Contact Detail' }} />
        <Stack.Screen name="Sms" component={SmsPage} options={{ title: 'Send SMS' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

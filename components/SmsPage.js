// SmsPage.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function SmsPage({ route, navigation }) {
  const { telepon } = route.params;
  const [message, setMessage] = useState('');

  const sendWhatsAppMessage = () => {
    const url = `https://wa.me/${telepon}?text=${encodeURIComponent(message)}`;
    Linking.openURL(url).catch(error => {
      console.error('Failed to send WhatsApp message', error);
      Alert.alert('Error', 'Failed to send WhatsApp message');
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Send WhatsApp Message to {telepon}</Text>
      <TextInput
        style={styles.input}
        placeholder="Type your message here"
        multiline
        value={message}
        onChangeText={setMessage}
      />
      <TouchableOpacity style={styles.button} onPress={sendWhatsAppMessage}>
        <Icon name="send" size={20} color="#fff" />
        <Text style={styles.buttonText}>Send</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  backButtonText: {
    marginLeft: 5,
    color: '#007AFF',
    fontSize: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#007AFF',
  },
  input: {
    height: 150,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
    textAlignVertical: 'top',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 30,
  },
  buttonText: {
    color: '#fff',
    marginLeft: 10,
    fontSize: 18,
    fontWeight: '600',
  },
});

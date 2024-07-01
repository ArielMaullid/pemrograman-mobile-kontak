import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Linking, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ContactDetail({ route, navigation }) {
  const { contact } = route.params;

  const makeWhatsAppCall = () => {
    const url = `https://wa.me/${contact.telepon}`;
    Linking.openURL(url).catch(console.error);
  };

  const sendText = () => {
    navigation.navigate('Sms', { telepon: contact.telepon });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={contact.gambar} style={styles.image} />
      <Text style={styles.title}>{contact.judul}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.callButton]} onPress={makeWhatsAppCall}>
          <Icon name="phone" size={20} color="#fff" />
          <Text style={styles.buttonText}>Call</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.smsButton]} onPress={sendText}>
          <Icon name="envelope" size={20} color="#fff" />
          <Text style={styles.buttonText}>SMS</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Nama:</Text>
          <Text style={styles.info}>{contact.judul}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Telepon:</Text>
          <Text style={styles.info}>{contact.telepon}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.info}>{contact.email}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Alamat:</Text>
          <Text style={styles.info}>{contact.alamat}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Asal Sekolah:</Text>
          <Text style={styles.info}>{contact.asalSekolah}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Kelas:</Text>
          <Text style={styles.info}>{contact.kelas}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
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
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
    borderColor: '#007AFF',
    borderWidth: 2,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginVertical: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    marginLeft: 10,
    fontSize: 18,
    fontWeight: '600',
  },
  callButton: {
    backgroundColor: '#34C759',
    flex: 1,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  smsButton: {
    backgroundColor: '#007AFF',
    flex: 1,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoContainer: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  info: {
    fontSize: 16,
    color: 'gray',
    marginLeft: 10,
  },
});
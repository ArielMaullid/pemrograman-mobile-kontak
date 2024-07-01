import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Animated, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Contact({ gambar, judul, telepon, email, alamat, asalSekolah, kelas, onPress, navigation }) {
  const scaleValue = new Animated.Value(1);

  const onPressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1,
      friction: 3,
      useNativeDriver: true,
    }).start();
  };

  const makeWhatsAppCall = (telepon) => {
    const url = `https://wa.me/${telepon}`;
    Linking.openURL(url).catch(console.error);
  };

  const animatedStyle = {
    transform: [{ scale: scaleValue }],
  };

  return (
    <Animated.View style={[styles.card, animatedStyle]}>
      <Image source={gambar} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{judul}</Text>
        <Text style={styles.subtitle}>{alamat}</Text>
        <Text style={styles.phone}>{telepon}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.button, styles.callButton]} onPress={() => makeWhatsAppCall(telepon)}>
            <Icon name="phone" size={20} color="#fff" />
            <Text style={styles.buttonText}>Call</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.smsButton]} onPress={() => navigation.navigate('Sms', { telepon })}>
            <Icon name="envelope" size={20} color="#fff" />
            <Text style={styles.buttonText}>SMS</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        style={styles.detailButton}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        onPress={() => onPress({ gambar, judul, telepon, email, alamat, asalSekolah, kelas })}
      >
        <Icon name="info-circle" size={25} color="#007AFF" />
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 15,
    marginVertical: 10,
    borderRadius: 15,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    position: 'relative',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 15,
  },
  textContainer: {
    justifyContent: 'center',
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    color: 'gray',
  },
  phone: {
    fontSize: 16,
    color: 'gray',
    marginTop: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginRight: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    marginLeft: 5,
  },
  callButton: {
    backgroundColor: '#34C759',
  },
  smsButton: {
    backgroundColor: '#007AFF',
  },
  detailButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});

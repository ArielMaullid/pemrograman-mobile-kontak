import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Contact from './Contact';

export default function ContactsList({ navigation }) {
  const contacts = [
    { id: 1, gambar: require('../assets/anime.jpg'), judul: 'Akeno', telepon: '+6289648129681', email: 'akeno@example.com', alamat: 'Tokyo, Japan', asalSekolah: 'Kuoh Academy', kelas: '2-B' },
    { id: 2, gambar: require('../assets/anime1.jpg'), judul: 'Gremory', telepon: '+6285720810696', email: 'gremory@example.com', alamat: 'Kyoto, Japan', asalSekolah: 'Kuoh Academy', kelas: '2-B' },
    { id: 3, gambar: require('../assets/anime2.jpg'), judul: 'Asuna Yuki', telepon: '+6281906771904', email: 'asuna@example.com', alamat: 'Saitama, Japan', asalSekolah: 'SAO High School', kelas: '3-A' },
    { id: 4, gambar: require('../assets/anime3.jpg'), judul: 'Erza Scarlet', telepon: '+628567655939', email: 'erza@example.com', alamat: 'Fairy Tail Guild', asalSekolah: 'Magnolia High', kelas: '3-A' },
    { id: 5, gambar: require('../assets/anime4.jpg'), judul: 'Rei Ayanami', telepon: '+6289514750080', email: 'rei@example.com', alamat: 'NERV HQ', asalSekolah: 'Tokyo-3 High', kelas: '2-A' },
    
  ];

  return (
    <ScrollView style={styles.container}>
      {contacts.map(contact => (
        <Contact 
          key={contact.id}
          gambar={contact.gambar} 
          judul={contact.judul}
          telepon={contact.telepon}
          email={contact.email}
          alamat={contact.alamat}
          asalSekolah={contact.asalSekolah}
          kelas={contact.kelas}
          onPress={() => navigation.navigate('Detail', { contact })}
          navigation={navigation}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
});

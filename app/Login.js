// app/index.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import { Link, useRouter } from 'expo-router';

export default function Login() {
  const router = useRouter();
  
  // State untuk menampung input user
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Simulasi login statis (Hardcoded logic)
    if (email === 'admin@mail.com' && password === '123456') {
      // router.replace digunakan agar user tidak bisa 'Back' ke Login lagi
      router.replace('/home'); 
    } else {
      Alert.alert(
        'Akses Ditolak!', 
        'Email atau Password lo salah, Bro! Coba cek lagi atau hubungi admin.'
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>MOBILE LAB UNPRI 🔐</Text>
      <Text style={styles.subtitle}>Silakan login untuk lanjut gaspol!</Text>
      
      <TextInput 
        style={styles.input} 
        placeholder="Email (admin@mail.com)" 
        keyboardType="email-address"
        autoCapitalize="none"
        value={email} 
        onChangeText={setEmail}
      />

      <TextInput 
        style={styles.input} 
        placeholder="Password (123456)" 
        secureTextEntry 
        value={password} 
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.btnLogin} onPress={handleLogin}>
        <Text style={styles.btnText}>LOGIN SEKARANG</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text>Belum punya akun? </Text>
        <Link href="/register" style={styles.link}>
          Daftar di sini
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 35, backgroundColor: '#fff' },
  logo: { fontSize: 28, fontWeight: 'bold', textAlign: 'center', color: '#d35400', marginBottom: 5 },
  subtitle: { textAlign: 'center', color: '#7f8c8d', marginBottom: 40 },
  input: { borderBottomWidth: 1, borderBottomColor: '#ddd', paddingVertical: 12, marginBottom: 25, fontSize: 16 },
  btnLogin: { backgroundColor: '#d35400', padding: 18, borderRadius: 12, alignItems: 'center', marginTop: 10 },
  btnText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  footer: { marginTop: 30, flexDirection: 'row', justifyContent: 'center' },
  link: { color: '#2980b9', fontWeight: 'bold' }
});
    
import React, { useState } from 'react';
import { 
  View, Text, TextInput, StyleSheet, TouchableOpacity, 
  KeyboardAvoidingView, Platform, TouchableWithoutFeedback, 
  Keyboard, Alert 
} from 'react-native';
import { useRouter } from 'expo-router'; // Navigasi antar halaman

export default function Register() {
  const router = useRouter();
  
  // State management (Controlled Components)
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // 1. Validasi Input Kosong
    if (!name || !email || !password) {
      return Alert.alert('Waduh Bro!', 'Isi semua datanya dulu dong.');
    }

    // 2. Validasi Format Email (RegEx)
    const emailPattern = /\S+@\S+\.\S+/;
    if (!emailPattern.test(email)) {
      return Alert.alert('Format Salah', 'Email lo kayaknya gak valid deh.');
    }

    // 3. Logic Sukses
    Alert.alert('Mantap!', 'Akun lo berhasil dibuat!');
    // Pindah ke halaman home sambil kirim data nama
    router.replace({ pathname: '/home', params: { userName: name } }); 
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Text style={styles.title}>Buat Akun Baru 🚀</Text>
          
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Nama Lengkap</Text>
            <TextInput 
              style={styles.input} 
              placeholder="Contoh: Budi Gaming" 
              value={name} 
              onChangeText={setName} 
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email Aktif</Text>
            <TextInput 
              style={styles.input} 
              placeholder="name@email.com" 
              keyboardType="email-address"
              autoCapitalize="none"
              value={email} 
              onChangeText={setEmail} 
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Password</Text>
            <TextInput 
              style={styles.input} 
              placeholder="Min. 6 Karakter" 
              secureTextEntry 
              value={password} 
              onChangeText={setPassword} 
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>Daftar Sekarang</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f6fa' },
  inner: { padding: 30, flex: 1, justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 30, textAlign: 'center', color: '#2f3640' },
  inputGroup: { marginBottom: 15 },
  label: { fontSize: 14, fontWeight: '600', marginBottom: 5, color: '#333' },
  input: { backgroundColor: '#fff', padding: 15, borderRadius: 10, borderWidth: 1, borderColor: '#dcdde1' },
  button: { backgroundColor: '#e67e22', padding: 18, borderRadius: 10, alignItems: 'center', marginTop: 10 },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 }
});
    
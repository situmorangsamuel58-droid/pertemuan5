// app/home.js
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();
  
  // Tangkap parameter 'userName' yang dikirim lewat router
  const params = useLocalSearchParams();
  
  // Kasih fallback (User) kalo datanya gak ada (biar gak error)
  const name = params.userName || "User UNPRI";

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.card}>
          <Text style={styles.welcome}>Selamat Datang,</Text>
          <Text style={styles.name}>{name}! ✨</Text>
          <Text style={styles.sub}>
            Lo udah berhasil masuk ke Dashboard aplikasi. 
            Data di atas dikirim secara aman lewat URL Params.
          </Text>
        </View>

        <TouchableOpacity 
          style={styles.btnLogout} 
          onPress={() => router.replace('/')} // Logout balik ke Login
        >
          <Text style={styles.btnText}>LOGOUT</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f6fa' },
  content: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 25 },
  card: { 
    backgroundColor: '#fff', 
    padding: 30, 
    borderRadius: 20, 
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    marginBottom: 40
  },
  welcome: { fontSize: 16, color: '#7f8c8d', textTransform: 'uppercase', letterSpacing: 1 },
  name: { fontSize: 32, fontWeight: 'bold', color: '#2c3e50', marginVertical: 10 },
  sub: { fontSize: 14, color: '#95a5a6', textAlign: 'center', lineHeight: 22 },
  btnLogout: { 
    borderColor: '#d35400', 
    borderWidth: 2, 
    paddingHorizontal: 40, 
    paddingVertical: 15, 
    borderRadius: 30 
  },
  btnText: { color: '#d35400', fontWeight: '800', fontSize: 14 }
});
    
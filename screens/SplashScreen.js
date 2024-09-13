import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 5000); // 5 segundos
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bienvenido a MiApp</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#307ecc',
  },
  text: {
    fontSize: 24,
    color: '#fff',
  },
});

export default SplashScreen;

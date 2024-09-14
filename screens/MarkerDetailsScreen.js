//****************** MarkerDetailsScreen.js *******************
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const MarkerDetailsScreen = ({ route, navigation }) => {
  const { marker } = route.params;

  return (
    <View style={styles.container}>
      {/* <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Detalles del Marcador</Text>
      </View> */}
      <View style={styles.content}>
        <Text>Latitud: {marker.coordinate.latitude.toFixed(6)}</Text>
        <Text>Longitud: {marker.coordinate.longitude.toFixed(6)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#f2f2f2',
  },
  backButton: {
    fontSize: 24,
    marginRight: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MarkerDetailsScreen;
//****************** Fin MarkerDetailsScreen.js *******************

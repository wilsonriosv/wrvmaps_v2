import React, { useState } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

const MapScreen = () => {
  const [markers, setMarkers] = useState([]);

  const addMarker = (event) => {
    const newMarker = {
      coordinate: event.nativeEvent.coordinate,
      key: Math.random().toString(),
    };
    setMarkers((prevMarkers) => [...prevMarkers, newMarker]);
  };

  const removeMarker = (key) => {
    setMarkers((prevMarkers) => prevMarkers.filter(marker => marker.key !== key));
  };

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: -34.6037,
          longitude: -58.3816,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onPress={addMarker}
      >
        {markers.map(marker => (
          <Marker
            key={marker.key}
            coordinate={marker.coordinate}
            onPress={() => removeMarker(marker.key)}
          />
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default MapScreen;


/* import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const MapScreen = () => {
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: -34.6037, // Cambia a la latitud deseada
          longitude: -58.3816, // Cambia a la longitud deseada
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default MapScreen; */


/* import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MapScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Mapa</Text>
    // Aquí puedes integrar Google Maps 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MapScreen;
 */
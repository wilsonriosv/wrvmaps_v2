import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MapScreen from './MapScreen'; // Crea este archivo más adelante
import EventsScreen from './EventsScreen'; // Crea este archivo más adelante
import NewsScreen from './NewsScreen'; // Crea este archivo más adelante

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Mapa" component={MapScreen} />
      <Tab.Screen name="Eventos" component={EventsScreen} />
      <Tab.Screen name="Noticias" component={NewsScreen} />
    </Tab.Navigator>
  );
};

export default HomeScreen;

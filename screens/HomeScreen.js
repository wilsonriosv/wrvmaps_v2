import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MapScreen from './MapScreen';
import EventsScreen from './EventsScreen';
import NewsScreen from './NewsScreen';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Mapa" component={MapScreen} options={{ headerShown: false }}/>
      <Tab.Screen name="Eventos" component={EventsScreen} options={{ headerShown: false }}/>
      <Tab.Screen name="Noticias" component={NewsScreen} options={{ headerShown: false }}/>
    </Tab.Navigator>
  );
};

export default HomeScreen;

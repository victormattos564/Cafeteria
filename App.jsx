import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Categorias from './src/screens/Categorias/index';
import Home from './src/screens/Home/index';
import Profile from './src/screens/Profile/index';
import Capuccino from './src/screens/Capuccino/index';
import Sabores from './src/screens/Sabores/index';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer Style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home}
          options={{
            title: "Cafeteria",
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerTintColor: "#000",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTitleAlign: "center"
          }} />
        <Stack.Screen name='Profile' component={Profile} />

        <Stack.Screen name='Categorias' component={Categorias} />

        <Stack.Screen name='Capuccino' component={Capuccino} />

        <Stack.Screen name='Sabores' component={Sabores} />

        {/* <Stack.Screen name='Descricao' component={Descricao} /> */}

      </Stack.Navigator>
      <StatusBar style='auto' />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
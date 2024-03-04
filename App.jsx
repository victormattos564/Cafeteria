import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import Categorias from "./src/screens/Categorias/index";
import Home from "./src/screens/Home/index";
import Profile from "./src/screens/Profile/index";
import Capuccino from "./src/screens/Capuccino/index";
import SaboresCappucino from "./src/screens/SaboresCappucino/index";
import DescricaoCappucino from "./src/screens/DescricaoCappucino";
import PrecoCappucino from "./src/screens/PrecoCappucino";
import CafeExpresso from "./src/components/CafeExpresso";
import CafeLeite from "./src/screens/CafeLeite";
import DescricaoExpresso from "./src/screens/DescricaoExpresso";
import DescricaoLeite from "./src/screens/DescricaoLeite";
import PrecoLeite from "./src/screens/PrecoLeite";
import PrecoExpresso from "./src/screens/PrecoExpresso";
import SaboresLeite from "./src/screens/SaboresLeite";
import SaboresExpresso from "./src/screens/SaboresExpresso";
export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer Style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Coffe Shop",
             
            headerStyle: {
              backgroundColor: "#855f30",
            },
            headerTintColor: "#000",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen name="Profile" component={Profile} />

        <Stack.Screen name="Categorias" component={Categorias} />

        <Stack.Screen name="Capuccino" component={Capuccino} />

        <Stack.Screen name="CafeExpresso" component={CafeExpresso} />

        <Stack.Screen name="CafeLeite" component={CafeLeite} />

        <Stack.Screen name="SaboresCappucino" component={SaboresCappucino} />

        <Stack.Screen name="SaboresLeite" component={SaboresLeite} />

        <Stack.Screen name="SaboresExpresso" component={SaboresExpresso} />

        <Stack.Screen name="DescricaoCappucino" component={DescricaoCappucino}/>

        <Stack.Screen name="PrecoCappucino" component={PrecoCappucino} />

        <Stack.Screen name="PrecoLeite" component={PrecoLeite} />

        <Stack.Screen name="PrecoExpresso" component={PrecoExpresso} />

        <Stack.Screen name="DescricaoExpresso" component={DescricaoExpresso} />

        <Stack.Screen name="DescricaoLeite" component={DescricaoLeite} />

      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

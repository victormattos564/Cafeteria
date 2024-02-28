import { View, Text, TouchableOpacity, Image } from "react-native";

import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        source={require("../cafe.png")}
        style={{ width: 300, height: 300 }}
        className="inline-block h-24 rounded-full ring-2 ring-white mb-4"
      />
      <Text style={styles.title}>CoffeShop</Text>
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate("Profile")}
      >
        <Text style={styles.navbottom}>Sobre mim</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Categoria</Text>
      
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate("Capuccino")}
      >
        <Text style={styles.navbottom}>Capuccino</Text>
      </TouchableOpacity>
     
    </View>
  );
}

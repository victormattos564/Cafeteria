import { View, Text, TouchableOpacity, Image } from "react-native";

import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <Image
        source={require("../java.png")}
        style={{ width: 200, height: 200 }}
        className="inline-block h-24 rounded-full ring-2 ring-white mb-4"
      />
      <Text style={styles.title}>DevCoffe</Text>
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate("Profile")}
      >
        <Text style={styles.navbottom}>Sobre mim</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate("Categorias")}
      >
        <Text style={styles.navbottom}>Categorias</Text>
      </TouchableOpacity>
    </View>
  );
}

import { View, Text, TouchableOpacity, Image } from "react-native";

import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

export default function Categorias() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        source={require("../../images/cafe.png")}
        style={{ width: 300, height: 300 }}
        className="inline-block h-24 rounded-full ring-2 ring-white mb-4"
      />
      <Text style={styles.title}>Categoria</Text>
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate("Capuccino")}
      >
        <Text style={styles.navbottom}>Capuccino</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate("CafeLeite")}
      >
        <Text style={styles.navbottom}>Café ao Leite</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate("CafeExpresso")}
      >
        <Text style={styles.navbottom}>Café Espresso</Text>
      </TouchableOpacity>
    </View>
  );
}

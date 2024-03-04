import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";

import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

export default function SaboresLeite() {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          source={require("../../images/cafe.png")}
          style={{ width: 200, height: 200 }}
          className="inline-block h-24 rounded-full ring-2 ring-white mb-4"
        />
        <Text style={styles.title2}>Sabores:</Text>

        <Text style={styles.title}>Vanilla Latte</Text>

        <Image
          source={require("../../images/Leite.png")}
          style={{ width: 170, height: 170 }}
          className="inline-block h-24 rounded-full ring-2 ring-white mb-4"
        />
        <Text style={styles.title}>Café ao Leite</Text>

        <Image
          source={require("../../images/leite2.png")}
          style={{ width: 170, height: 170 }}
          className="inline-block h-24 rounded-full ring-2 ring-white mb-4"
        />
        <Text style={styles.title}>Café Marata </Text>

        <Image
          source={require("../../images/leite3.png")}
          style={{ width: 170, height: 170 }}
          className="inline-block h-24 rounded-full ring-2 ring-white mb-4"
        />
      </View>
      <TouchableOpacity style={styles.navButton} onPress={()=> navigation.navigate("CafeLeite")}>
        <Text style={styles.navbottom}>Café Leite</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

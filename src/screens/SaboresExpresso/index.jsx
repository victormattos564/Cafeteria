import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";

import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

export default function SaboresExpresso() {
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

        <Text style={styles.title}>Café Expresso Supremo</Text>

        <Image
          source={require("../../images/expre.png")}
          style={{ width: 170, height: 170 }}
          className="inline-block h-24 rounded-full ring-2 ring-white mb-4"
        />
        <Text style={styles.title}>Café Expresso Pleno</Text>

        <Image
          source={require("../../images/expre2.png")}
          style={{ width: 170, height: 170 }}
          className="inline-block h-24 rounded-full ring-2 ring-white mb-4"
        />
        <Text style={styles.title}>Cappuccino Baunilha </Text>

        <Image
          source={require("../../images/expre3.png")}
          style={{ width: 170, height: 170 }}
          className="inline-block h-24 rounded-full ring-2 ring-white mb-4"
        />
      </View>
      <TouchableOpacity style={styles.navButton} onPress={()=> navigation.navigate("CafeExpresso")}>
        <Text style={styles.navbottom}>Cafe Expresso</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

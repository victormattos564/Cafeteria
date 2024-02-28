import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";

import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

export default function Sabores() {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          source={require("../cafe.png")}
          style={{ width: 200, height: 200 }}
          className="inline-block h-24 rounded-full ring-2 ring-white mb-4"
        />
        <Text style={styles.title2}>Sabores:</Text>

        <Text style={styles.title}>Cappuccino Chocolate</Text>

        <Image
          source={require("../cafe3.png")}
          style={{ width: 170, height: 170 }}
          className="inline-block h-24 rounded-full ring-2 ring-white mb-4"
        />
        <Text style={styles.title}>Cappuccino Balance</Text>

        <Image
          source={require("../cafe5.png")}
          style={{ width: 170, height: 170 }}
          className="inline-block h-24 rounded-full ring-2 ring-white mb-4"
        />
        <Text style={styles.title}>Cappuccino Baunilha </Text>

        <Image
          source={require("../cafe4.png")}
          style={{ width: 170, height: 170 }}
          className="inline-block h-24 rounded-full ring-2 ring-white mb-4"
        />
      </View>
    </ScrollView>
  );
}

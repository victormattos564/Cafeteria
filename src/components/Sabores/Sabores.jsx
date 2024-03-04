import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";

import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

export default function Sabores({ nome, img}) {
  const navigation = useNavigation();

  return (
      <View style={styles.container}>

        <Text style={styles.title}>{nome}</Text>

        <Image
          source={img}
          style={{ width: 170, height: 170 }}
          className="inline-block h-24 rounded-full ring-2 ring-white mb-4"
        />

      </View>
  );
}

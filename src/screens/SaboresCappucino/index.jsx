import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";

import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import Sabores from "../../components/Sabores/Sabores";

export default function SaboresCapuccino() {
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






        {/* <Text style={styles.title}></Text>

        <Image
          source={}
          style={{ width: 170, height: 170 }}
          className="inline-block h-24 rounded-full ring-2 ring-white mb-4"
        /> */}
        
        <Sabores nome={'Cappuccino Chocolate'} img={require('../../images/cafe3.png')} />

      







        <Text style={styles.title}>Cappuccino Balance</Text>

        <Image
          source={require("../../images/cafe5.png")}
          style={{ width: 170, height: 170 }}
          className="inline-block h-24 rounded-full ring-2 ring-white mb-4"
        />
        <Text style={styles.title}>Cappuccino Baunilha </Text>

        <Image
          source={require("../../images/cafe4.png")}
          style={{ width: 170, height: 170 }}
          className="inline-block h-24 rounded-full ring-2 ring-white mb-4"
        />
      </View>
      <TouchableOpacity style={styles.navButton} onPress={()=> navigation.navigate("Capuccino")}>
        <Text style={styles.navbottom}>Capuccino</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

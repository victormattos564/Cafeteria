import { View, Text, TouchableOpacity, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import styles from './styles';

export default function CafeLeite() {
  const navigation = useNavigation();


  return (
    <View style={styles.container}>
      <Image
        source={require("../../images/cafe.png")}
        style={{ width: 300, height: 300 }}
        className="inline-block h-24 rounded-full ring-2 ring-white mb-4"
      />
      <Text style={styles.title}>Café ao Leite</Text>
      <TouchableOpacity style={styles.navButton} onPress={()=> navigation.navigate("SaboresLeite")}>
        <Text style={styles.navbottom}>Sabores</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navButton} onPress={()=> navigation.navigate("DescricaoLeite")}>
        <Text style={styles.navbottom}>Descriçao</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navButton} onPress={()=> navigation.navigate("PrecoLeite")}>
        <Text style={styles.navbottom}>preço</Text>
      </TouchableOpacity>
      
    </View>
  )
}
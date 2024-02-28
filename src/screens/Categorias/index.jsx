import { View, Text, TouchableOpacity, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import styles from './styles';

export default function Contact() {
  const navigation = useNavigation();


  return (
    <View style={styles.container}>
      <Image
        source={require("../java.png")}
        style={{ width: 200, height: 200 }}
        className="inline-block h-24 rounded-full ring-2 ring-white mb-4"
      />
      <Text style={styles.title}>Categorias</Text>
      <TouchableOpacity style={styles.navButton} onPress={()=> navigation.navigate("Home")}>
        <Text style={styles.navbottom}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navButton} onPress={()=> navigation.navigate("Profile")}>
        <Text style={styles.navbottom}>Profile</Text>
      </TouchableOpacity>
      
    </View>
  )
}

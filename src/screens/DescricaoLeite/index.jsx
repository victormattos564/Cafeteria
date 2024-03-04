import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";

import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

export default function DescricaoLeite() {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          source={require("../cafe.png")}
          style={{ width: 300, height: 300 }}
          className="inline-block h-24 rounded-full ring-2 ring-white mb-4"
        />
        <Text style={styles.title}>Vanilla Latte</Text>
        <Text style={styles.Descricao}>
          Descriçao:Vanilla Latte Starbucks é um café instantâneo premium em
          sachês inspirado no clássico Vanilla Latte encontrado nas lojas da
          rede. Uma bebida cremosa com a combinação perfeita de café, leite e
          baunilha.
        </Text>
        <Text style={styles.title}>Café com leite </Text>
        <Text style={styles.Descricao}>
          Descriçao:Café com leite é a mistura entre duas bebidas famosas: café
          e o leite, sendo uma bebida típica de Portugal e Brasil. A mistura
          entre o café e o leite, em suas diversas variações, é uma das bebidas
          matinais mais consumidas do mundo. Entre suas variações está o
          cappuccino.
        </Text>
        <Text style={styles.title}>Café Marata</Text>
        <Text style={styles.Descricao}>
          Descriçao:Produzido com grãos selecionados, o Café Maratá a Vácuo 250g
          oferece um sabor encorpado e marcante, com notas sutis de chocolate e
          caramelo. Além disso, sua torra média proporciona um equilíbrio
          perfeito entre acidez e amargor, tornando-o ideal para ser apreciado a
          qualquer hora do dia.
        </Text>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate("CafeLeite")}
        >
          <Text style={styles.navbottom}>Café Leite</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

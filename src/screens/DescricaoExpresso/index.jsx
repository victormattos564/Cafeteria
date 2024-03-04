import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";

import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

export default function DescricaoExpresso() {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          source={require("../cafe.png")}
          style={{ width: 300, height: 300 }}
          className="inline-block h-24 rounded-full ring-2 ring-white mb-4"
        />
        <Text style={styles.title}>Café Expresso Supremo</Text>
        <Text style={styles.Descricao}>
          Descriçao:O café espresso nada mais é do que o café feito em uma
          máquina específica para ele. Nela, a água quente passa sob uma pressão
          quase 10 vezes maior que a normal pelo grão moído instantes antes de
          todo esse processo acontecer.
        </Text>
        <Text style={styles.title}>Capuccino Baunilha </Text>
        <Text style={styles.Descricao}>
          Descriçao:Sucesso no sachê individual, o Cappuccino Baunilha ganha
          agora sua versão pote com 200 g, concentrando ainda mais toda a
          gostosura do Cappuccino 3 Corações com um toque de baunilha. Mistura
          composta de leite em pó, café solúvel, cacau em pó, açúcar e outros
          ingredientes que após preparo com água quente resulta em bebida
          cremosa e espumante.
        </Text>
        <Text style={styles.title}>Capuccino Balance</Text>
        <Text style={styles.Descricao}>
          Descriçao:O Cappuccino Balance da 3 Corações tem zero adição de
          açúcar, zero lactose e ainda possui extrato de café verde em sua
          composição, mas ainda assim mantém o sabor e a cremosidade
          característicos da bebida. Experimente! Mistura composta de leite em
          pó sem lactose, maltodextrina, café solúvel, cacau em pó, canela em
          pó, edulcorantes, aromatizante extrato de café verde e outros
          ingredientes que após preparo com água quente resulta em bebida
          cremosa e espumante.{" "}
        </Text>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate("Capuccino")}
        >
          <Text style={styles.navbottom}>Capuccino</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

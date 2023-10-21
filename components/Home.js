import {Text, View, SafeAreaView, Image, ScrollView, StyleSheet} from 'react-native';

export default function Home(){
  return(
    <View style={styles.safe}>
    <View style={styles.c}>
    <Text style={styles.cap}>HOME ANIME DUAL</Text>
    </View>

    <View style={styles.subc}>
        <Text style={styles.subcap}> Os mais noltágicos de todos</Text>
    </View>

    <View style={styles.animeView}>
    <Image resizeMode="stretch" source={require('../assets/dbclassicoLogo.png')} style={styles.imgAnime} />

    <View style={styles.desc}>
      <Text style={styles.txtdesc}> "Dragon Ball Clássico" é a história de Goku, um jovem guerreiro em busca das Esferas do Dragão para realizar desejos, enfrentando desafios e inimigos pelo caminho.</Text>
    </View>
    </View>

      <View style={styles.animeView}>
    <Image resizeMode="stretch" source={require('../assets/narutinLogo.webp')} style={styles.imgAnime2} />

    <View style={styles.desc2}>
      <Text style={styles.txtdesc}> "Dragon Ball Clássico" é a história de Goku, um jovem guerreiro em busca das Esferas do Dragão para realizar desejos, enfrentando desafios e inimigos pelo caminho.</Text>
    </View>
    </View>

    </View>
        
  );
}

const styles = StyleSheet.create({
   safe:{
    backgroundColor: '#000'
  },
  c:{
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#FFD502',
    justifyContent: 'center',
    height: 80,
    borderBottomLeftRadius: 26,
    borderBottomRightRadius: 26,
  },
  cap: {
    fontWeight: 'bold',
    justifyContent: 'center',
    fontSize: 25,
    color: '#ffffff'
  },
  subc:{
    display: 'flex',
    alignItems: 'center',
    marginTop: 20
  },
  subcap:{
    fontSize: 20,
    marginBottom: 30,
    color:'white'
  },
  animeView:{
    alignItems: 'center',
  },
  imgAnime:{
    width: 300,
    height: 130
  },
  desc:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    padding: 10,
    borderColor: '#0014C0',
    borderRadius: 20,
    backgroundColor: 'E8E8E8',
    marginTop: 30
  },
    desc2:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    padding: 10,
    borderColor: '#FF50EC',
    borderRadius: 20,
    backgroundColor: 'E8E8E8',
    marginTop: 30,
    marginBottom: 25
  },
  txtdesc:{
    fontSize: 16,
    fontWeight: 350,
    color:'white'
  },
   imgAnime2:{
    width: 300,
    height: 130,
    marginTop: 38
  },

});
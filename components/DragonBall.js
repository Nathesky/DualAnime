import {Text, View, SafeAreaView, Image, ScrollView, StyleSheet} from 'react-native';

export default function DragonBall(){
  return(
    <ScrollView>
     <View style={styles.safe}>
    <View style={styles.c}>
    <Text style={styles.cap}> DRAGON BALL 1986 </Text>
    </View>

   

    <View style={styles.subc}>
        <Text style={styles.subcap}> Os principais persongens</Text>
    </View>

    <View style={styles.animeView}>
    <Image resizeMode="stretch" source={require('../assets/goku.png')} style={styles.imgAnime} />

    <View style={styles.desc}>
      <Text style={styles.txtdesc}>  SON GOKU</Text>
    </View>
    </View>

      <View style={styles.animeView}>
    <Image resizeMode="stretch" source={require('../assets/bulma.png')} style={styles.imgAnime2} />

     <View style={styles.desc2}>
      <Text style={styles.txtdesc2}> BULMA</Text>
    </View>
    </View>
    
     <View style={styles.animeView}>
    <Image resizeMode="stretch" source={require('../assets/Mestrekame.webp')} style={styles.imgAnime3} />

     <View style={styles.desc3}>
      <Text style={styles.txtdesc3}> MESTRE KAME</Text>
    </View>
    </View>

    <View style={styles.animeView}>
    <Image resizeMode="stretch" source={require('../assets/KrillinBU01.webp')} style={styles.imgAnime3} />

     <View style={styles.desc4}>
      <Text style={styles.txtdesc4}> KURIRIN</Text>
    </View>
    </View>

    </View>
  </ScrollView>
      
   
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
    height: 300
  },
  desc:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    padding: 10,
    borderColor: '#0014C0',
    borderRadius: 20,
    backgroundColor: '#F04C00',
    marginTop: 30
  },
  desc2:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    padding: 10,
    borderColor: '#0014C0',
    borderRadius: 20,
    backgroundColor: '#F607E0',
    marginTop: 30
  },
    txtdesc2:{
    fontSize: 20,
    fontWeight: 'bold',
    color:'white'
  },
  txtdesc:{
    fontSize: 20,
    fontWeight: 'bold',
    color:'white'
  },
   imgAnime2:{
    width: 300,
    height: 230,
    marginTop: 38
  },
   desc3:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    padding: 10,
    borderColor: '#150291',
    borderRadius: 20,
    backgroundColor: '#900C3F',
    marginTop: 30
  },
    txtdesc3:{
    fontSize: 20,
    fontWeight: 'bold',
    color:'white'
  },
     desc4:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    padding: 10,
    borderColor: '#150291',
    borderRadius: 20,
    backgroundColor: '#24ADDD',
    marginTop: 30
  },
    txtdesc4:{
    fontSize: 20,
    fontWeight: 'bold',
    color:'white'
  },
  imgAnime3:{
    width: 250,
    height: 230,
    marginTop: 38
  },

});
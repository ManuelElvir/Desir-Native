import React, { useState } from 'react'
import { ScrollView, StyleSheet, TouchableHighlight, Text, View } from 'react-native';

import { RootTabScreenProps } from '../../types';
import useColorScheme from '../../hooks/useColorScheme';
import Colors from '../../constants/Colors';
import Slider from '../../components/Carousel';
import { Feather, FontAwesome5, Fontisto, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {

  const colorScheme = useColorScheme();
  const [index, setindex] = useState(0)

  const onIndexChange = (index : number) => {
    setindex(index)
  }

  const SmallButton = ({ title, icon, color, onPress }: { title: string, icon: string, color: string, onPress: () => void }) => {
    return (
      <TouchableHighlight style={{ width: 160 }} onPress={(e) => { onPress() }}>
        <View style={{ flexDirection: 'row', justifyContent: "center", alignItems: 'center', backgroundColor: Colors[colorScheme].accent, paddingVertical: 6, borderRadius: 5 }}>
          <Ionicons name={icon as any} color={color} size={24} />
          <Text style={{ color: color, fontWeight: '600', fontSize: 16, marginStart: 10 }}>{title}</Text>
        </View>
      </TouchableHighlight>
    )
  }

  const LargeBox = ({title, icon, color,  onPress }: {title: string, icon:string, color: string, onPress : () => void}) => {
    return (
      <TouchableHighlight style={styles.largeContainer} onPress={onPress}>
        <View style={{ backgroundColor: `${color}33`, ...styles.largeCard }}>
          <Ionicons name={icon as any} size={45} color={color} />
          <Text style={{ color: color, textTransform: 'capitalize', fontWeight: '600' }}>{title}</Text>
        </View>
      </TouchableHighlight>
    )
  }

  const RoundBox = ({title, icon, color,  onPress }: {title: string, icon:any, color: string, onPress : () => void}) => {
    return (
      <TouchableOpacity style={styles.largeContainer} onPress={onPress}>
        <View style={{ backgroundColor: `${color}33`, justifyContent: "center", alignItems: 'center', ...styles.roundCard }}>
          {icon}
        </View>
          <Text style={{ color: Colors[colorScheme].text, textTransform: 'capitalize', fontWeight: '600' }}>{title}</Text>
      </TouchableOpacity>
    )
  }

  const cards = [{
    id: 1,
    title: 'Fun & Simple',
    name: 'Constantine Etot',
    number: '**** **** **** 4367',
    date: '12/23',
    amount: '2500',
    type: 'visa',
  },
  {
    id: 2,
    title: 'Abonements',
    name: 'Constantine Etot',
    number: '**** **** **** 2376',
    date: '05/24',
    amount: '2500',
    type: 'visa',
  },
  {
    id: 3,
    title: 'Course Maison',
    name: 'Constantine Etot',
    number: '**** **** **** 8789',
    date: '06/24',
    amount: '2500',
    type: 'mastercard',
  },
  {
    id: 4,
    title: 'Course Maison',
    name: 'Constantine Etot',
    number: '**** **** **** 9273',
    date: '06/24',
    amount: '2500',
    type: 'visa',
  },
  {
    id: 5,
    title: 'Test app',
    name: 'Constantine Etot',
    number: '**** **** **** 8932',
    date: '06/24',
    amount: '34 000',
    type: 'mastercard',
  }]

  console.log('cardIndex', index);

  return (
    <>
      <View style={{ backgroundColor: Colors[colorScheme].background3, height: 140 }} />
      <LinearGradient colors={[Colors[colorScheme].background3,Colors[colorScheme].background2]} start={{ x: 1, y: 0.69 }}
            end={{ x: 1, y: 0.7 }}
            style={{ height: '100%',width: '100%', borderRadius: 10, position: 'absolute', top: 0, left: 0, right: 0}} />
      <ScrollView style={{ backgroundColor: '#fff0', ...styles.container }} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
        
        <View style={styles.cardBox}>
          <Slider cards={cards} onIndexChange={onIndexChange} />

          <View style={styles.buttonRow}>
            <SmallButton title='Retirer' icon='arrow-down-circle' color={Colors[colorScheme].background} onPress={() => { alert('Recharger cette carte') }} />
            <SmallButton title='recharger' icon='add-circle' color={Colors[colorScheme].background} onPress={() => { alert('Retirer de l\'argent de cette carte') }} />
          </View>
        </View>
        <View style={{ backgroundColor: Colors[colorScheme].background2, ...styles.itemBox }}>

          <Text style={{ color: Colors[colorScheme].text, ...styles.title}}>Transferer de l'argent</Text>

          <View style={{ flexDirection: 'row', marginVertical: 20, justifyContent: 'space-evenly' }}>

          <LargeBox title='Envoi' icon='send-outline' color={Colors[colorScheme].accent2} onPress={() => {}} />
          <LargeBox title='Paiement' icon='bar-chart-outline' color={Colors[colorScheme].accent} onPress={() => {}} />
          <LargeBox title='épargne' icon='wallet-outline' color={Colors[colorScheme].accent3} onPress={() => {}} />

          </View>
          <View style={{ shadowColor: Colors[colorScheme].boxShadows, backgroundColor: Colors[colorScheme].background4, ...styles.shadowBox, marginHorizontal: 15, borderRadius: 10 }}>
            <Text style={{ color: Colors[colorScheme].text, ...styles.title}}>Services</Text>
            <View style={{ flexDirection: 'row', marginVertical: 20, justifyContent: 'space-evenly' }}>
              <RoundBox title='Ticket' icon={<Fontisto name="ticket-alt" size={45} color={Colors[colorScheme].accent4}  />} color={Colors[colorScheme].accent4} onPress={() => {}} />
              <RoundBox title='Tv' icon={<Feather name="tv" size={45} color={Colors[colorScheme].accent} />} color={Colors[colorScheme].accent} onPress={() => {}} />
              <RoundBox title='Eau' icon={<Ionicons name='water' size={45} color={Colors[colorScheme].accent2} />} color={Colors[colorScheme].accent2} onPress={() => {}} />
              <RoundBox title='Electricité' icon={<MaterialCommunityIcons name='lightning-bolt' size={45} color={Colors[colorScheme].accent3} />} color={Colors[colorScheme].accent3} onPress={() => {}} />

            </View>
            <View style={{ flexDirection: 'row', marginVertical: 20, justifyContent: 'space-evenly' }}>

              <RoundBox title='Super marché' icon={<Feather name="shopping-cart" size={45} color={Colors[colorScheme].accent2} />} color={Colors[colorScheme].accent2} onPress={() => {}} />
              <RoundBox title='Recharge' icon={<MaterialCommunityIcons name="cellphone" size={45} color={Colors[colorScheme].accent3} />} color={Colors[colorScheme].accent3} onPress={() => {}} />
              <RoundBox title='Assurance' icon={<MaterialCommunityIcons name="shield-half-full" size={45} color={Colors[colorScheme].accent4} />} color={Colors[colorScheme].accent4} onPress={() => {}} />
              <RoundBox title='Restaurant' icon={<Ionicons name="restaurant" size={45} color={Colors[colorScheme].accent} />} color={Colors[colorScheme].accent} onPress={() => {}} />

            </View>
          </View>
        </View>
      </ScrollView>
    </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardBox: {
    height: 300,
    marginTop: 10
  },
  buttonRow: { flexDirection: 'row', justifyContent: 'space-evenly', position: 'absolute', bottom: 30, width: '100%' },
  itemBox: {
    borderTopStartRadius: 35,
    borderTopEndRadius: 35,
    paddingBottom: 40
  },
  largeCard: {
    paddingHorizontal: 35,
    paddingVertical: 20, borderRadius: 10, alignItems: 'center'
  },
  largeContainer: {
    borderRadius: 10,
    alignItems: 'center'
  },
  title: {
    marginStart: 20, marginTop: 20, fontSize: 18, fontWeight : '700'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  shadowBox: {
    shadowOffset: {
      width: 1,
      height: 3
    },
    shadowOpacity: 0.25,
    textShadowRadius: 3.5,
    elevation: 5
  },
  roundCard: {
    width: 80,
    height: 80,
    borderRadius: 40,
  }
});

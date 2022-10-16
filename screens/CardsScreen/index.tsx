import React, {useState} from 'react'
import {Pressable, ScrollView, StyleSheet} from 'react-native'
import Slider from '../../components/Carousel'
import { Text, View } from 'react-native'

import useColorScheme from '../../hooks/useColorScheme';
import Colors from '../../constants/Colors';
import { AntDesign, Foundation, Ionicons, MaterialCommunityIcons, Octicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';


const cards = [{
    id: 1,
    title: 'Fun & Simple',
    name: 'Constantine Etot',
    number: '**** **** **** 4367',
    date: '12/23',
    amount: '73 000',
    type: 'visa',
  },
  {
    id: 2,
    title: 'Abonements',
    name: 'Constantine Etot',
    number: '**** **** **** 2376',
    date: '05/24',
    amount: '4 800',
    type: 'visa',
  },
  {
    id: 3,
    title: 'Course Maison',
    name: 'Constantine Etot',
    number: '**** **** **** 8789',
    date: '06/24',
    amount: '22 600',
    type: 'mastercard',
  },
  {
    id: 4,
    title: 'Course Maison',
    name: 'Constantine Etot',
    number: '**** **** **** 9273',
    date: '06/24',
    amount: '25 000',
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

const CardsScreen = () => {
    const colorScheme = useColorScheme();
    const [index, setindex] = useState(0)
    const [layout, setLayout] = useState('stack')

    const onIndexChange = (index : number) => {
      setindex(index)
    }

    const ItemAction = ({title, icon, onPress} :  {title: string, icon: any, onPress : () => void}) => {
        return(
            <TouchableOpacity style={{borderBottomWidth : 1, borderColor: Colors[colorScheme].background3, flexDirection: 'row', paddingVertical: 25, paddingStart: 40, paddingEnd: 20, width: '100%', justifyContent: 'flex-start', alignItems: 'center'}}>
                {icon}
                <Text style={{color: Colors[colorScheme].text, fontSize: 16, fontWeight: '500', marginStart: 15}} >{title}</Text>
            </TouchableOpacity>
        )
    }

    return(
        <View style={{backgroundColor: Colors[colorScheme].background3, ...styles.container}}>
            <View style={{ backgroundColor: Colors[colorScheme].background3, flexDirection: 'row', marginTop: 70 }} >
                <Text style={{flex: 0.7, color:Colors[colorScheme].text, justifyContent: 'flex-start', alignItems: 'center', marginStart: 20, fontSize: 16, fontWeight: '700' }}> Vos Cartes </Text>
                <View style={{flexDirection: 'row', flex: 0.3, justifyContent: 'space-evenly', alignItems: 'center'}}>
                    <Pressable onPress={() => setLayout(layout==='default'?'stack':'default')}><AntDesign name="windowso" size={24} color={Colors[colorScheme].textLight} /></Pressable>
                    <Pressable onPress={() => {alert('Ajouter une carte')}}><Ionicons name='add-circle' size={24} color={Colors[colorScheme].textLight} /></Pressable>
                </View>
            </View>

            <View style={styles.cardBox}>
                <Slider cards={cards} onIndexChange={onIndexChange} layout={layout} />
            </View>
          
            <ScrollView style={{ backgroundColor: Colors[colorScheme].background2, ...styles.container2 }} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
                <ItemAction title="Ajouter de l'argent" icon={<Ionicons name='add-circle' size={24} color={Colors[colorScheme].accent} />} onPress={() => {}} />
                <ItemAction title="Retirer l'argent" icon={<Ionicons name='wallet' size={24} color={Colors[colorScheme].accent} />} onPress={() => {}} />
                <ItemAction title='Regénérer le code' icon={<Foundation name='refresh' size={24} color={Colors[colorScheme].accent} />} onPress={() => {}} />
                <ItemAction title='Supprimer la carte' icon={<MaterialCommunityIcons name='credit-card-remove-outline' size={24} color={Colors[colorScheme].accent} />} onPress={() => {}} />
                <ItemAction title='Bloque la carte' icon={<Octicons name='stop' size={24} color={Colors[colorScheme].accent} />} onPress={() => {}} />
            </ScrollView>
        </View>
    )
}

export default CardsScreen

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container2 : {
        flex: 1,
        borderTopStartRadius: 20,
        borderTopEndRadius : 20,
        width: '100%',
    },
  cardBox: {
    height: 220,
    marginTop: 20,
  },
})
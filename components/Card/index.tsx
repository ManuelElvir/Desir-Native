import React from 'react'
import { Image, ImageBackground, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import useColorScheme from '../../hooks/useColorScheme';
import Colors from '../../constants/Colors';

export interface CardItem {
    id: number
    title: string
    name: string
    number: string
    date: string
    amount: string
    type: string
}

const Card = ({ card, index = 0 }: { card: CardItem, index: number }) => {

    const colorScheme = useColorScheme();

    const gradients = [
        ['#1ca4b4', '#1ca4b4', '#28d778', '#28d778'],
        ['#28d778', '#28d778', '#1ca4b4', '#1ca4b4'],
        ['#28d778',  '#28d778','#4cd4f4',  '#28d778'],
    ]
    return (
        <LinearGradient colors={gradients[index%3]} start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 1 }}
            style={{ height: 200, width: 345, borderRadius: 10, }}>
            <View style={{ width: 330, height: 130, borderRadius: 5, padding: 10 }} >
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View>
                        <Image source={ card.type==='mastercard'?require(`../../assets/images/mastercard.png`):require(`../../assets/images/visa.png`)} style={{ maxWidth: card.type==='mastercard'?50:60, height: card.type==='mastercard'?30:20 }} />
                    </View>

                    <View>
                        <Image source={require('../../assets/images/logo.png')} style={{ width: 28, height: 28 }} />
                    </View>
                </View>
                <Text style={{marginTop: 20, fontSize:25, color: '#eee', fontWeight: 'bold'}}> {card.number}</Text>
                <Text style={{marginTop: 10, fontSize:16, color: '#eee', fontWeight: '600'}}> {card.title}</Text>
            </View>

            <View style={{ flexDirection: 'row', height: 70, justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 10, backgroundColor: 'transparent', borderBottomStartRadius: 10, borderBottomEndRadius: 10 }}>
                <View>
                    <Text style={{ color: '#eee', fontSize: 18, fontWeight: '700' }}>{card.name}</Text>
                    <Text style={{ color: '#eee', marginTop: 5, fontWeight: '600' }}>EXP : {card.date}</Text>
                </View>
                <View style={{justifyContent: 'center'}}>
                    <Text style={{ color: '#eee' ,  fontWeight: '900', fontSize: 26, textAlign: 'right', marginRight: 30 }}>{card.amount}</Text>
                    <Text style={{ color: '#eee', position: 'absolute', right: 0, top: 0 }}>Fcfa</Text>
                </View>
            </View>
        </LinearGradient>
    )

}

export default Card
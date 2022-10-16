import { Ionicons, Octicons } from '@expo/vector-icons';
import React from 'react'
import { StyleSheet, Dimensions, Pressable, ScrollView, Image, Text, View } from 'react-native'
import { LineChart } from 'react-native-chart-kit'
import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';

const screenWidth = Dimensions.get("window").width;

interface Transaction {
    accountName: string
    amount: string
    date: string
}

const HistoryScreen = (props: any) => {
    const colorScheme = useColorScheme();

    const data = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
            {
                data: [20, 45, 28, 80, 99, 43],
                color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
                strokeWidth: 2 // optional
            }
        ],
        legend: ["Constantine Etot"] // optional
    }

    const transactions = [
        {
            "accountName": "Samuel Eto'o",
            "amount": "25 000",
            "date": "07 Jan 2022"
        },
        {
            "accountName": "foyet Michel",
            "amount": "18 500",
            "date": "19 dec 2019"
        },
        {
            "accountName": "aminou zahra",
            "amount": "6 000",
            "date": "01 avl 2021"
        },
        {
            "accountName": "chameni midrel",
            "amount": "500",
            "date": "29 fev 2020"
        },
        {
            "accountName": "marbel manchap",
            "amount": "25 050",
            "date": "14 juin 2022"
        },
        {
            "accountName": "abessolo fredy",
            "amount": "1 060",
            "date": "23 Jan 2020"
        },
        {
            "accountName": "youssoupha martin",
            "amount": "275",
            "date": "10 nov 2019"
        },
        {
            "accountName": "Samuel tomson",
            "amount": "29 450",
            "date": "27 Jan 2021"
        },
        {
            "accountName": "Simon pepito",
            "amount": "50 000",
            "date": "09 mars 2022"
        },
        {
            "accountName": "pavel dj",
            "amount": "80 000",
            "date": "06 mai 2020"
        }
    ]

    const chartConfig = {
        backgroundColor: "#f4949c",
        backgroundGradientFrom: "#077b00",
        backgroundGradientTo: "#13f202",
        decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
            borderRadius: 16
        },
        propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#f4949c",
            color: '#fff',
            backgroundColor: '#fff'
        }
    }

    console.log('colorschema', Colors[colorScheme]);


    const TransactionItem = ({ item }: { item: Transaction }) => {
        return (
            <View style={{ backgroundColor: Colors[colorScheme].background3, margin: 10, flexDirection: 'row', shadowColor: Colors[colorScheme].boxShadows, ...styles.shadowBox, padding: 20, borderRadius: 10 }}>
                <View style={{ backgroundColor: Colors[colorScheme].background2, borderRadius: 10, padding: 5, shadowColor: Colors[colorScheme].boxShadows, ...styles.shadowBox }}>
                    <Image source={require('../../assets/images/memoji2.png')} style={{ width: 35, height: 35 }} />
                </View>
                <View style={{ marginStart: 15 }}>
                    <Text style={{ color: Colors[colorScheme].text, fontSize: 16, fontWeight: '700', textTransform: 'capitalize' }}>{item.accountName}</Text>
                    <Text style={{ color: Colors[colorScheme].textLight, fontSize: 14, fontWeight: '500' }}>{item.date}</Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
                    <Text style={{ color: Colors[colorScheme].text, fontSize: 18, fontWeight: '800', textAlignVertical: 'center', textAlign: 'right' }}>{item.amount} CFA</Text>
                </View>
            </View>
        )
    }

    return (
        <View style={{ backgroundColor: Colors[colorScheme].background2, ...styles.container }}>
            <View style={{ backgroundColor: Colors[colorScheme].background2, flexDirection: 'row', marginTop: 70 }} >
                <View style={{ flexDirection: 'row', flex: 0.3, justifyContent: 'space-evenly', alignItems: 'center' }}>
                    <Pressable
                        onPress={() => (props.navigation as any).goBack()}
                        style={({ pressed }) => ({
                            opacity: pressed ? 0.5 : 1,
                            flexDirection: 'row',
                            marginHorizontal: 20
                        })}>
                        <Ionicons name='arrow-back' size={24} color={Colors[colorScheme].textLight}/>
                    </Pressable>
                </View>
                <Text style={{ flex: 0.7, color: Colors[colorScheme].text, textAlign: 'center', alignItems: 'center', marginStart: 20, fontSize: 16, fontWeight: '700' }}> Historiques </Text>
                <View style={{ flexDirection: 'row', flex: 0.3, justifyContent: 'space-evenly', alignItems: 'center' }}>
                    <Pressable onPress={() => { }}><Octicons name='graph' size={24} color={Colors[colorScheme].textLight} /></Pressable>
                </View>
            </View>
            <ScrollView style={{ backgroundColor: Colors[colorScheme].background2, paddingHorizontal: 10, marginTop: 15 }} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>

                <LineChart
                    data={data}
                    width={screenWidth - 30}
                    height={256}
                    verticalLabelRotation={30}
                    chartConfig={chartConfig}
                    bezier
                    style={{
                        marginVertical: 8,
                        borderRadius: 20,
                        marginTop: 10
                    }}
                />
                <View style={{ flexDirection: 'row', marginVertical: 20, width: '100%' }}>
                    <View style={{ flexDirection: 'row', marginEnd: 50, flex: 1 }}>
                        <View style={{ flex: 0.5, alignItems: 'center' }}>
                            <Pressable style={{ paddingHorizontal: 20, paddingVertical: 10, backgroundColor: Colors[colorScheme].accent, borderRadius: 6, width: 150 }}>
                                <Text style={{ color: Colors[colorScheme].text, textAlign: 'center', fontWeight: '600', fontSize: 16 }}>Envoi</Text>
                            </Pressable>
                        </View>
                        <View style={{ flex: 0.5, alignItems: 'center' }}>
                            <Pressable style={{ paddingHorizontal: 20, paddingVertical: 10, backgroundColor: Colors[colorScheme].accent, borderRadius: 6, width: 150 }}>
                                <Text style={{ color: Colors[colorScheme].text, textAlign: 'center', fontWeight: '600', fontSize: 16 }}>Reception</Text>
                            </Pressable>
                        </View>
                    </View>
                    <View style={{ position: 'absolute', right: 10, top: 0, bottom: 5, justifyContent: 'flex-end', alignItems: 'center' }}>
                        <Pressable>
                            <Ionicons name="swap-vertical" size={24} color={Colors[colorScheme].textLight} />
                        </Pressable>
                    </View>

                </View>
                {transactions.map((transaction: Transaction, index) => <TransactionItem key={`${index} ${transaction.accountName}`} item={transaction} />)}
            </ScrollView>
        </View>
    )
}

export default HistoryScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    shadowBox: {
        shadowOffset: {
            width: 4,
            height: 4
        },
        shadowOpacity: 0.25,
        textShadowRadius: 3.5,
        elevation: 5
    },
})
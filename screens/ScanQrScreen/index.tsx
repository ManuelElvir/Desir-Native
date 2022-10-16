import { FontAwesome, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import React, { useState, useEffect } from 'react'
import { StyleSheet, Button, Dimensions, View, Text, TouchableHighlight, Image, Pressable } from 'react-native'

import { BarCodeScanner } from 'expo-barcode-scanner';
import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';
import Scanner from '../../components/SVG/QrScanner';
import Border from '../../components/SVG/Border/BorderTopLeft';
import { BorderBottomLeft, BorderBottomRight, BorderTopLeft, BorderTopRight } from '../../components/SVG/Border';
// import { Button } from '../components/Button';

interface QRData {
    amount: string
    cardName: string
    cardNumber: string
}

const { width, height } = Dimensions.get("window")

const ScanQrScreen = () => {
    const colorScheme = useColorScheme();

    const [amount, setAmount] = useState('32,600')
    const [cardName, setCardName] = useState('M. Samuel Eto\'o')
    const [cardNumber, setCardNumber] = useState('**** **** **** 2567')
    const [hasPermission, setHasPermission] = useState(false);
    const [scanned, setScanned] = useState(false);
    const [showMore, setShowMore] = useState(false)

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({ type, data }: { type: string, data: string }) => {
        setScanned(true);
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
        // let jsonData = JSON.parse(data)
        // setAmount((jsonData as QRData).amount)
        // setCardName((jsonData as QRData).cardName)
    };

    function showData() {
        if (showMore)
            return (
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ backgroundColor: Colors[colorScheme].background2, borderRadius: 10, width: 40, height: 40, justifyContent: 'center', alignItems: 'center' }}>
                                <Image source={require('../../assets/images/memoji2.png')} style={{ width: 35, height: 35 }} />
                            </View>
                            <View style={{ flex: 0.8, marginStart: 15 }}>
                                <Text style={{ color: '#fff', fontWeight: '800', fontSize: 16 }}>{amount} Fcfa</Text>
                                <Text style={{ color: '#fff', fontWeight: '600', fontSize: 16 }}>{cardName}</Text>
                            </View>
                        </View>
                        <Pressable onPress={() => setShowMore(!showMore)} style={({ pressed }) => ({
                            opacity: pressed ? 0.5 : 1
                        })}>
                            <Ionicons name='chevron-up-circle' color='#eee' size={24} />
                        </Pressable>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 20 }}>
                        <Text style={{ color: '#fefefe', fontWeight: '500', fontSize: 16 }}>N° Carte : </Text>
                        <Text style={{ color: '#fff', fontWeight: '600', fontSize: 16 }}>{cardNumber}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 20 }}>
                        <Text style={{ color: '#fefefe', fontWeight: '500', fontSize: 16 }}>Pays : </Text>
                        <Text style={{ color: '#fff', fontWeight: '600', fontSize: 16 }}>Cameroun</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 20 }}>
                        <Text style={{ color: '#fefefe', fontWeight: '500', fontSize: 16 }}>Frais : </Text>
                        <Text style={{ color: '#fff', fontWeight: '600', fontSize: 16 }}>0 Fcfa</Text>
                    </View>
                </View>
            )
        else
            return (
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ backgroundColor: Colors[colorScheme].background2, borderRadius: 10, width: 40, height: 40, justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={require('../../assets/images/memoji2.png')} style={{ width: 35, height: 35 }} />
                        </View>
                        <View style={{ flex: 0.8, marginStart: 15 }}>
                            <Text style={{ color: '#fff', fontWeight: '700', fontSize: 16 }}>{amount} Fcfa</Text>
                            <Text style={{ color: '#fff', fontWeight: '500', fontSize: 16 }}>{cardName}</Text>
                        </View>
                    </View>
                    <Pressable onPress={() => setShowMore(!showMore)} style={({ pressed }) => ({
                        opacity: pressed ? 0.5 : 1
                    })}>
                        <Ionicons name='chevron-down-circle' color='#eee' size={24} />
                    </Pressable>
                </View>
            )
    }

    function showIndications() {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: '#eee', textAlign: 'center', fontSize: 16, fontWeight: '600' }}>Aucune donnée scanné!</Text>
                <Ionicons name='information-circle' size={24} color='#eee' style={{ marginStart: 10 }} />
            </View>
        )
    }

    const LargeBox = ({ title, icon, color, onPress }: { title: string, icon: string, color: string, onPress: () => void }) => {
        return (
            <TouchableHighlight style={{ shadowColor: Colors[colorScheme].boxShadows, ...styles.largeContainer }} onPress={onPress}>
                <View style={{ backgroundColor: Colors[colorScheme].background5, ...styles.largeCard }}>
                    <MaterialCommunityIcons name={icon as any} size={30} color={color} />
                    <Text style={{ color: color, textTransform: 'capitalize', fontWeight: '600', marginTop: 10 }}>{title}</Text>
                </View>
            </TouchableHighlight>
        )
    }

    return (
        <View style={{ backgroundColor: Colors[colorScheme].background2, ...styles.container }}>

            <View style={{ backgroundColor: Colors[colorScheme].accent, width: '100%', height: height / 2, borderBottomEndRadius: 40, borderBottomStartRadius: 40, paddingTop: 60, paddingHorizontal: 20 }}>
                <Text style={{ color: '#fff', fontWeight: '700', fontSize: 18, marginBottom: 20, textAlign: 'center' }} >Scanner un code QR</Text>
                <View style={{ backgroundColor: `${Colors[colorScheme].background5}33`, ...styles.containerInfo }}>
                    {!scanned ?
                        showIndications()
                        :
                        showData()
                    }
                </View>
            </View>
            <View style={{ flex: 1, justifyContent: 'flex-end', paddingBottom: 45 }}>
                <Text style={{ color: Colors[colorScheme].text, textAlign: 'center', fontSize: 16, fontWeight: '700', marginBottom: 30 }}>Placez le code QR à l'intérieur du cadre</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: '100%' }}>
                    <LargeBox title='Numero' icon='cellphone' color={Colors[colorScheme].accent} onPress={() => { }} />
                    <LargeBox title='Flash' icon='lightning-bolt' color={Colors[colorScheme].accent} onPress={() => { }} />
                    <LargeBox title='Importer' icon='file-import' color={Colors[colorScheme].accent} onPress={() => { }} />
                </View>
            </View>

            {!showMore ? 
            <View style={styles.qrBloc}>
                {(hasPermission === false) ?
                    <View style={{ backgroundColor: `${Colors[colorScheme].background3}77`, ...styles.qrBox }}>
                        <Text style={{ color: Colors[colorScheme].text, fontWeight: '700', fontSize: 18 }}>Pas d'acces à la Caméra</Text>
                        <Button title={'Autoriser l\'acces'} color={Colors[colorScheme].text} onPress={() => setScanned(false)} />
                    </View>
                    :
                    <View style={{ backgroundColor: `${Colors[colorScheme].background3}77`, ...styles.qrBox }}>
                        <BarCodeScanner
                            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                            style={{display: showMore?'none':'flex', ...StyleSheet.absoluteFillObject}}
                        />

                    </View>
                }
                <View style={styles.qrContainer}>
                    <Scanner width={width - 100} height={width + 100} />
                </View>
                <View style={{ position: 'absolute', top: -10, left: 39 }}>
                    <BorderTopLeft width={40} height={60} color={Colors[colorScheme].accent} />
                </View>
                <View style={{ position: 'absolute', top: -10, right: 39 }}>
                    <BorderTopRight width={40} height={60} color={Colors[colorScheme].accent} />
                </View>
                <View style={{ position: 'absolute', bottom: -10, right: 39 }}>
                    <BorderBottomRight width={40} height={60} color={Colors[colorScheme].background2} />
                </View>
                <View style={{ position: 'absolute', bottom: -10, left: 39 }}>
                    <BorderBottomLeft width={40} height={60} color={Colors[colorScheme].background2} />
                </View>
            </View>
            :
            <View  style={{ flexDirection: 'row', ...styles.actionBloc}}>
                <TouchableHighlight style={{ shadowColor: Colors[colorScheme].boxShadows, ...styles.largeContainer }} onPress={() => {setShowMore(!showMore); setScanned(!scanned)}}>
                    <View style={{ backgroundColor: Colors[colorScheme].background5, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', borderRadius: 10, paddingHorizontal: 40, paddingVertical: 40, maxHeight: 120, maxWidth:160 }}>
                        <MaterialCommunityIcons name='cancel' size={30} color='#fd4547' />
                        <Text style={{ color: '#fd4547', textTransform: 'capitalize', fontWeight: '800', fontSize: 16, marginStart: 10 }}>Annuler</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={{ shadowColor: Colors[colorScheme].boxShadows, ...styles.largeContainer }} onPress={() => {alert('Argent Envoyé')}}>
                    <View style={{ backgroundColor: Colors[colorScheme].background5, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', borderRadius: 10, paddingHorizontal: 40, paddingVertical: 40, maxHeight: 120, maxWidth:160 }}>
                        <FontAwesome name='send' size={30} color={Colors[colorScheme].accent} />
                        <Text style={{ color: Colors[colorScheme].accent, textTransform: 'capitalize', fontWeight: '800', fontSize: 16, marginStart: 10 }}>Envoyer</Text>
                    </View>
                </TouchableHighlight>
            </View>
            
            
            }

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    qrBox: {
        flex: 1,
        width: '80%',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    qrContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'transparent',
    },
    inputShow: {
        fontSize: 22,
        fontWeight: '700',
    },
    textInfo: {
        fontSize: 18, fontWeight: '600', textTransform: 'capitalize',
    },
    containerInfo: {
        width: '100%',
        padding: 15,
        borderRadius: 10
    },
    largeCard: {
        width: width / 4,
        maxWidth: 200,
        paddingVertical: 10,
        borderRadius: 10,
        alignItems: 'center'
    },
    largeContainer: {
        borderRadius: 10,
        alignItems: 'center',
        shadowOffset: {
            width: 1,
            height: 3
        },
        shadowOpacity: 0.25,
        textShadowRadius: 3.5,
        elevation: 5
    },
    qrBloc: {
        width: width - 20,
        height: width + 20,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: (height - width - 100) / 2,
        left: 5,
        right: 5,
        bottom: 0,
        backgroundColor: 'transparent',
    },
    actionBloc: {
        width: width - 20,
        height: width + 20,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        position: 'absolute',
        top: (height - width - 60) / 2,
        left: 5,
        right: 5,
        bottom: 0,
        backgroundColor: 'transparent',
    }
})

export default ScanQrScreen
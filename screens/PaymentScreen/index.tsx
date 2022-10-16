import React from 'react'
import {StyleSheet} from 'react-native'
import { Text, View } from '../../components/Themed'

const PaymentScreen = () => {
    return(
        <View style={styles.container}>
            <Text>Payment Screen</Text>
            <Text>Ici avec des options de payment</Text>
            <Text>Payer une personne ou un service</Text>
        </View>
    )
}

export default PaymentScreen

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
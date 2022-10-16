import React from 'react'
import {StyleSheet} from 'react-native'
import { Text, View } from '../../components/Themed'

const TransferScreen = () => {
    return(
        <View  style={styles.container}>
            <Text>Transfert Screen</Text>
        </View>
    )
}

export default TransferScreen

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
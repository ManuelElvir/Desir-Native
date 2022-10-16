import React from 'react'
import {StyleSheet} from 'react-native'
import { Text, View } from '../../components/Themed'

const SavingScreen = () => {
    return(
        <View style={styles.container}>
            <Text>Saving Screen</Text>
            <Text>Vue d'ensemble sur la balance du compte</Text>
        </View>
    )
}

export default SavingScreen

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
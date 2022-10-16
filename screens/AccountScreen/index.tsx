import React from 'react'
import {StyleSheet} from 'react-native'
import { Text, View } from '../../components/Themed'

const AccountScreen = () => {
    return(
        <View style={styles.container}>
            <Text>Account Screen</Text>
        </View>
    )
}

export default AccountScreen

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
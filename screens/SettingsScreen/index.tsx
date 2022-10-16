import React from 'react'
import {StyleSheet} from 'react-native'
import { Text, View } from '../../components/Themed'

const SettingScreen = () => {
    return(
        <View  style={styles.container}>
            <Text>Setting Screen</Text>
        </View>
    )
}

export default SettingScreen

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
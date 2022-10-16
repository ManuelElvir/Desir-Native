import React, { useContext, useState } from 'react'
import { Input, Button, Image } from 'react-native-elements';
import { Text, View } from '../../components/Themed';
import { RootStackScreenProps } from '../../types';
import { Ionicons, MaterialIcons, SimpleLineIcons } from '@expo/vector-icons';
import styles from './ForgotPasswordScreenStyle';
import Toast from 'react-native-toast-message';
import useColorScheme from '../../hooks/useColorScheme';
import Colors from '../../constants/Colors';
import { Pressable } from 'react-native';
import AuthentificationContext from '../../context/AuthentificationContext';

const ForgotPasswordScreen = ({ navigation }: RootStackScreenProps<'ForgotPassword'>) => {
    const colorScheme = useColorScheme();
    const { authData, setAuthData } = useContext(AuthentificationContext)
    const [email,setEmail] = useState('')
    const [emailSent,setEmailSent] = useState(false)
    const [loading,setLoading] = useState(false)

    function forgotPassword() {
        setLoading(true)
        setTimeout(() => {
            Toast.show({
                type: 'info',
                text1: "Mail Envoyé",
                text2: "Vérifiez votre boite mail.",
            })
            setLoading(false)
            navigation.navigate('ResetPassword')
        }, 3000)
    }

    function getImageForgotPassword() {
        if (colorScheme === "light")
            return require('../../assets/images/forgot_password.png')
        else
            return require('../../assets/images/forgot_password_dark.png')
    }

    return (
        <View style={styles.container}>
            <View>
                <Pressable onPress={() => {navigation.goBack()}} style={{height: 45, justifyContent: 'center', marginTop: 40}}>
                    <Ionicons name="arrow-back-outline" size={24} color={Colors[colorScheme].text} />
                </Pressable>
            </View>
            <View>
                <Image source={getImageForgotPassword()} containerStyle={styles.image} />
                <View style={{ width: '100%', marginTop: 10 }}>
                    <Text style={styles.title}>Forgot Password?</Text>
                </View>
                <Text style={{ width: '100%', fontSize: 16 }}>Don't worry! It happens. Please enter the address associated with your account.</Text>

                <Input
                    placeholder='Email / Mobile number'
                    inputStyle={{ fontSize: 16, color: Colors[colorScheme].textLight }}
                    containerStyle={{ marginVertical: 30 }}
                    value={email}
                    onEndEditing={(event) => { setEmail(event.nativeEvent.text) }}
                    onSubmitEditing={(event) => { setEmail(event.nativeEvent.text) }}
                    returnKeyType='done'
                    leftIcon={
                        <MaterialIcons name="alternate-email" size={24} color="gray" />
                    }
                />
                <Button
                    title={emailSent?'Resend mail':'Send mail'}
                    loading={loading}
                    onPress={forgotPassword}
                    buttonStyle={{
                        backgroundColor: Colors[colorScheme].tint,
                        borderRadius: 8,
                        paddingVertical: 10
                    }}
                    titleStyle={{
                        fontSize: 16,
                        fontWeight: '500'
                    }}
                    containerStyle={{
                        width: '100%',
                        paddingHorizontal: 20,
                        marginBottom: 80,
                    }}
                />
            </View>

        </View>
    );
}

export default ForgotPasswordScreen

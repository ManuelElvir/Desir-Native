import React, { useContext, useEffect, useState } from 'react'
import { Input, Button, Image } from 'react-native-elements';
import { Text, View } from '../../components/Themed';
import { RootStackScreenProps } from '../../types';
import { Ionicons, MaterialIcons, SimpleLineIcons } from '@expo/vector-icons';
import styles from './RegisterScreenStyle';
import Toast from 'react-native-toast-message';

import useColorScheme from '../../hooks/useColorScheme';
import Colors from '../../constants/Colors';
import AuthentificationContext from '../../context/AuthentificationContext';
import { Pressable, ScrollView } from 'react-native';

const LoginScreen = ({ navigation }: RootStackScreenProps<'Register'>) => {
    const { authData, setAuthData } = useContext(AuthentificationContext)
    const colorScheme = useColorScheme();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [loading, setLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [showPassword2, setShowPassword2] = useState(false)


    useEffect(() => {
        if (authData.token.access_token) {
            navigation.reset({
                index: 0,
                routes: [{ name: 'Root' }],
            })
        }
        return () => null
    }, [authData]);

    function signUp() {
        if(password==='' ||username===''){
            Toast.show({
                type: 'info',
                text1: 'Veuillez renseigner vos informations',
            })
            return
        }

        if(password!==password2){
            Toast.show({
                type: 'info',
                text1: 'Les mots de passe ne sont pas identiques',
                // text2: "Username or password incorrect"//error?.message
            })
            return
        }
        setLoading(true)
        setTimeout(() => {
            setAuthData({
                message: "",
                token: {
                    access_token: "xxxx-xxxx-xxxx-xxxx-xxxx",
                    token_type: "user"
                },
                user: {
                    uuid: "xxxx-xxxx-xxxx-xxxx-xxxx",
                    email: "john.doe@example.com",
                    firstname: "John",
                    phonenumber: "+237 xxx xxx xxx",
                    lastname: "Doe",
                    photo: null,
                    date_added: new Date(),
                    date_modified: new Date()
                }
            })
            setLoading(false)
        }, 3000)
    }

    function getImageSignUp() {
        if (colorScheme === "light")
            return require('../../assets/images/signin.png')
        else
            return require('../../assets/images/signin_dark.png')
    }

    return (
        <View style={{flex: 1}}>
            <ScrollView style={{width: '100%' }} contentContainerStyle={styles.container} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
            <Image source={getImageSignUp()} containerStyle={styles.image} />
            <Text style={styles.title}>Sign Up</Text>
            <Input
                placeholder='Email or PhoneNumber'
                inputStyle={{ fontSize: 16, color: Colors[colorScheme].textLight }}
                onEndEditing={(event) => { setUsername(event.nativeEvent.text) }}
                onSubmitEditing={(event) => { setUsername(event.nativeEvent.text) }}
                textContentType='username'
                returnKeyType='next'
                returnKeyLabel='Next'
                leftIcon={
                    <MaterialIcons name="alternate-email" size={24} color="gray" />
                }
            />
            <Input
                placeholder='Password'
                leftIcon={
                    <SimpleLineIcons name="lock" size={24} color="gray" />
                }
                inputStyle={{ fontSize: 16, color: Colors[colorScheme].textLight }}
                secureTextEntry={!showPassword}
                onEndEditing={(event) => { setPassword(event.nativeEvent.text) }}
                onSubmitEditing={(event) => { setPassword(event.nativeEvent.text) }}
                textContentType='password'
                returnKeyType='next'
                returnKeyLabel='Next'
                rightIcon={
                    <Pressable onPress={() => {setShowPassword(!showPassword)}}>
                        {
                            showPassword?
                            <Ionicons name="eye-off-outline" size={24} color="gray" />
                            :<Ionicons name="eye-outline" size={24} color="gray" />
                        }
                        
                    </Pressable>
                }
            />
            <Input
                placeholder='Repeat the password'
                leftIcon={
                    <Ionicons name="repeat-outline" size={24} color="gray" />
                }
                secureTextEntry={!showPassword2}
                onEndEditing={(event) => { setPassword2(event.nativeEvent.text) }}
                onSubmitEditing={(event) => { setPassword2(event.nativeEvent.text) }}
                textContentType='password'
                returnKeyType='done'
                returnKeyLabel='Sign Up'
                inputStyle={{ fontSize: 16, color: Colors[colorScheme].textLight }}
                rightIcon={
                    <Pressable onPress={() => {setShowPassword2(!showPassword2)}}>
                        {
                            showPassword2?
                            <Ionicons name="eye-off-outline" size={24} color="gray" />
                            :<Ionicons name="eye-outline" size={24} color="gray" />
                        }
                        
                    </Pressable>
                }
            />

            <View style={{ marginTop: 15, justifyContent: 'flex-start', width: '100%', ...styles.line }}>
                <Text style={{ fontSize: 14 }}>By signing up you're agree our</Text>
                <Button
                    title="Terms &amp; Conditions"
                    type="clear"
                    onPress={() => { navigation.navigate('TermsConditions') }}
                    titleStyle={{ color: Colors[colorScheme].tint, fontWeight: '500', fontSize: 14 }}
                />
            </View>

            <View style={{ marginTop: -10, marginBottom: 5, justifyContent: 'flex-start', width: '100%', ...styles.line }}>
                <Text style={{ fontSize: 14 }}>and</Text>
                <Button
                    title="Privacy Policy"
                    type="clear"
                    onPress={() => { navigation.navigate('PrivacyPolicy') }}
                    titleStyle={{ color: Colors[colorScheme].tint, fontWeight: '500', fontSize: 14 }}
                />
            </View>
            <Button
                title="Sign Up"
                onPress={signUp}
                loading={loading}
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
                    marginHorizontal: 50,
                    paddingHorizontal: 20,
                    marginVertical: 10,
                }}
            />
            <View style={{ marginTop: 20, ...styles.line }}>
                <Text style={{ fontSize: 16 }}>Joined us before?</Text>
                <Button
                    title="Login"
                    type="clear"
                    onPress={() => { navigation.goBack() }}
                    titleStyle={{ color: Colors[colorScheme].tint, fontWeight: '500', fontSize: 16 }}
                />
            </View>
            </ScrollView>
            
        </View>
    );
}

export default LoginScreen

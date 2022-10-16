import React, { useContext, useEffect, useState } from 'react'
import { Input, Button, Image } from 'react-native-elements';
import { Text, View } from '../../components/Themed';
import { RootStackScreenProps } from '../../types';
import { Ionicons, MaterialIcons, SimpleLineIcons } from '@expo/vector-icons';
import styles from './ResetPasswordScreenStyle';
import Toast from 'react-native-toast-message';
import useColorScheme from '../../hooks/useColorScheme';
import Colors from '../../constants/Colors';
import { Pressable } from 'react-native';
import AuthentificationContext from '../../context/AuthentificationContext';

const ResetPasswordScreen = ({ navigation }: RootStackScreenProps<'ResetPassword'>) => {
    const colorScheme = useColorScheme();
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [loading, setLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [showPassword2, setShowPassword2] = useState(false)
    const { authData, setAuthData } = useContext(AuthentificationContext)


    useEffect(() => {
        if (authData.token.access_token) {
            navigation.reset({
                index: 0,
                routes: [{ name: 'Root' }],
            })
        }
        return () => null
    }, [authData]);

    function resetPassword() {
        
        if(password==='' ){
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

    function getImageResetPassword() {
        if (colorScheme === "light")
            return require('../../assets/images/reset_password.png')
        else
            return require('../../assets/images/reset_password_dark.png')
    }

    return (
        <View style={styles.container}>
            <View>
                <Pressable onPress={() => {navigation.goBack()}} style={{height: 45, justifyContent: 'center', marginTop: 40}}>
                    <Ionicons name="arrow-back-outline" size={24} color={Colors[colorScheme].text} />
                </Pressable>
            </View>
            <View>
                <Image source={getImageResetPassword()} containerStyle={styles.image} />
                <View style={{ width: '100%', marginVertical: 10 }}>
                    <Text style={styles.title}>Reset Password</Text>
                </View>

               
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
                <Button
                    title="Submit"
                    onPress={resetPassword}
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
                        marginTop: 40
                    }}
                />
            </View>

        </View>
    );
}

export default ResetPasswordScreen

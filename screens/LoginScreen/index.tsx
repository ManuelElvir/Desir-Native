import React, { useContext, useEffect, useState } from 'react'
import { Input, Button, Image } from 'react-native-elements';
import { Text, View } from '../../components/Themed';
import { RootStackScreenProps } from '../../types';
import { MaterialIcons, SimpleLineIcons } from '@expo/vector-icons';
import styles from './LoginScreenStyle';
import Toast from 'react-native-toast-message';
import useColorScheme from '../../hooks/useColorScheme';
import Colors from '../../constants/Colors';
import AuthentificationContext from '../../context/AuthentificationContext';
import { Platform } from 'react-native';

const LoginScreen = ({ navigation }: RootStackScreenProps<'Login'>) => {
    const colorScheme = useColorScheme();
    const { authData, setAuthData } = useContext(AuthentificationContext)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (authData.token.access_token) {
            navigation.reset({
                index: 0,
                routes: [{ name: 'Root' }],
            })
        }
        return () => null
    }, [authData]);

    function login(userName=username, passWord=password, firstName='', lastName='', photo='') {
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

    function getImageLogin() {
        if (colorScheme === "light")
            return require('../../assets/images/login.png')
        else
            return require('../../assets/images/login_dark.png')
    }

    // GoogleSignin.configure({
    //     scopes: ['https://www.googleapis.com/auth/drive.readonly'],
    //     webClientId: '27257970262-ndhcbrm64fq972mt578ffqr4m95j0n4t.apps.googleusercontent.com',
    //     iosClientId: '27257970262-g1akssvl5q475pqvh4tiqq4pdi7fpv9n.apps.googleusercontent.com',
    //     // androidClientId: '27257970262-t9slnlbf47ddh67u1ed45ankkiv9uel2.apps.googleusercontent.com',
    //   });

    const signInWithGoogle = async () => {
        Toast.show({
            type: 'info',
            text1: "Cette option n'est pas encore disponible",
        })
    };

    return (
        <View style={styles.container}>
            <Image source={getImageLogin()} containerStyle={styles.image} />
            <Text style={styles.title}>Login</Text>
            <Input
                placeholder='Email / Mobile number'
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
                secureTextEntry={true}
                onEndEditing={(event) => { setPassword(event.nativeEvent.text) }}
                onSubmitEditing={(event) => { setPassword(event.nativeEvent.text) }}
                textContentType='password'
                returnKeyType='done'
                returnKeyLabel='Login'
                inputStyle={{ fontSize: 16, color: Colors[colorScheme].textLight }}
                rightIcon={
                    <Button
                        title="Forgot?"
                        type="clear"
                        onPress={() => { navigation.navigate('ForgotPassword') }}
                        titleStyle={{ color: Colors[colorScheme].tint, fontWeight: '500', fontSize: 16 }}
                    />
                }
            />
            <Button
                title="Login"
                loading={loading}
                // disabled={loading}
                onPress={()=>{login()}}
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
            <View style={styles.line2}>
                <View style={styles.bar} />
                <Text style={{ marginHorizontal: 5 }}>Or</Text>
                <View style={styles.bar} />
            </View>
            <Button
                title="Login With Google"
                onPress={signInWithGoogle}
                icon={<Image source={require('../../assets/images/google.png')} containerStyle={styles.icon} />}
                iconContainerStyle={{ marginRight: 10 }}
                titleStyle={{ fontWeight: '500', fontSize: 16, color: Colors[colorScheme].text2 }}
                buttonStyle={{
                    backgroundColor: '#f1f6f7',
                    paddingVertical: 10,
                    borderRadius: 8,
                }}
                containerStyle={{
                    width: '100%',
                    marginHorizontal: 50,
                    paddingHorizontal: 20,
                    marginVertical: 10,
                }}
            />
            <View style={{ marginTop: 50, ...styles.line }}>
                <Text style={{ fontSize: 16 }}>New to smartcope?</Text>
                <Button
                    title="Register"
                    type="clear"
                    onPress={() => { navigation.navigate('Register') }}
                    titleStyle={{ color: Colors[colorScheme].tint, fontWeight: '500', fontSize: 16 }}
                />
            </View>
        </View>
    );
}

export default LoginScreen

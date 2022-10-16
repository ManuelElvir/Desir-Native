/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome, Ionicons  } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { ColorSchemeName, Pressable, TouchableHighlight, StyleSheet, View, Text, Image } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import DrawerContent from './DrawerContent';
import AuthentificationContext from '../context/AuthentificationContext';
import {HomeScreen, SupportScreen, CardsScreen, ScanQrScreen, TransferScreen, PaymentScreen, SettingScreen, AccountScreen, HistoryScreen, LoginScreen, RegisterScreen, ForgotPasswordScreen, ResetPasswordScreen, NotFoundScreen, SavingScreen, PrivacyPolicyScreen, TermsConditionsScreen} from '../screens';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <DrawerNavigator colorScheme={colorScheme}/>
    </NavigationContainer>
  );
}

/**
 * A Drawer Navigator
 */

const Drawer = createDrawerNavigator();

function DrawerNavigator({ colorScheme }: { colorScheme: ColorSchemeName }) {

  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent colorScheme={colorScheme} navigation={props.navigation}/>}>
      <Drawer.Screen name="Main" component={RootNavigator} options={{ headerShown: false}} />
      <Drawer.Screen name="History" component={HistoryScreen} options={{ headerShown: false}} />
      <Drawer.Screen name="Payment" component={PaymentScreen} options={{ headerShown: false}} />
      <Drawer.Screen name="Saving" component={SavingScreen} options={{ headerShown: false}} />
      <Drawer.Screen name="Settings" component={SettingScreen} options={{ headerShown: false}} />
      <Drawer.Screen name="Account" component={AccountScreen} options={{ headerShown: false}} />
    </Drawer.Navigator>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  const {authData, setAuthData} = React.useContext(AuthentificationContext);
  if(authData.token.access_token)
    return BottomTabNavigator()
  else
    return (
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
        <Stack.Group screenOptions={{ presentation: 'modal' }}>
          <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} />
          <Stack.Screen name="TermsConditions" component={TermsConditionsScreen} />
        </Stack.Group>
        <Stack.Group screenOptions={{ headerShown: false }}>
          <Stack.Screen  name="Login" component={LoginScreen} options={{ title: 'Login' }} />
          <Stack.Screen  name="Register" component={RegisterScreen} options={{ title: 'Register' }} />
          <Stack.Screen  name="ForgotPassword" component={ForgotPasswordScreen} options={{ title: 'Forgot Password' }} />
          <Stack.Screen  name="ResetPassword" component={ResetPasswordScreen} options={{ title: 'Reset Password' }} />
        </Stack.Group>
      </Stack.Navigator>
    );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  const CustomTabBarButton = ({children, onPress} : {children : any, onPress : any}) => {
     return(
       <TouchableHighlight
          style={{
            top: -30,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius : 35,
            ...styles.shadow
          }}
          onPress={onPress}
       >
         <View
          style={{
            width: 70,
            height : 70,
            borderRadius : 35,
            backgroundColor : Colors[colorScheme].accent
          }} 
         >
           {children}
         </View>
       </TouchableHighlight>
     )
  }

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel : false,
        tabBarActiveTintColor: Colors[colorScheme].tint,
        tabBarStyle : {backgroundColor: Colors[colorScheme].background3}
      }}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }: RootTabScreenProps<'Home'>) => ({
          title: 'Home',
          tabBarIcon: ({ color }) => <TabBarIcon name="home-outline" color={color} />,
          headerTitle: '',
          headerTransparent: true,
          headerStyle: {
            height: 140,
            borderColor: 'transparent',
            borderWidth: 0

          },
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('TermsConditions')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
                flexDirection: 'row'
              })}>
              {/* <Ionicons name="search-outline" size={22} color={Colors[colorScheme].text} style={{ marginRight: 15 }} /> */}
              <Ionicons name="notifications-outline" size={22} color={Colors[colorScheme].text} style={{ marginRight: 15 }} />
              <Text style={{color:'#fd2547', fontSize: 22, fontWeight: '900', position: 'absolute', top: -10, left: 10}}>.</Text>
            </Pressable>
          ),
          headerLeft: () => (
            <Pressable
              onPress={() => (navigation as any).openDrawer()}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
                flexDirection: 'row'
              })}>
                <View style={{flex: 0.3, marginLeft: 15}}>
                  <Image source={require('../assets/images/memoji.png')} style={{width: 35, height: 35}} />
                </View>
                <View style={{flex: 0.7}}>
                    <Text style={{color: Colors[colorScheme].text, fontWeight: '700'}}>Hello👋</Text>
                    <Text style={{color: Colors[colorScheme].text, fontWeight: '700', fontSize: 16}}>Constantine</Text>
                </View>
            </Pressable>
          )
        })}
      />
      <BottomTab.Screen
        name="Transfers"
        component={TransferScreen}
        options={{
          title: 'Transfers',
          tabBarIcon: ({ color }) => <TabBarIcon name="swap-horizontal-outline" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="ScanQr"
        component={ScanQrScreen}
        options={({ navigation }: RootTabScreenProps<'ScanQr'>) => ({
          title: '',
          // headerShown: false,
          headerTransparent: true,
          tabBarStyle: {display: 'none'},
          tabBarIcon: ({ focused }) => <Ionicons name="scan" size={30} color={Colors[colorScheme].background} />,
          tabBarButton: (props) => (
            <CustomTabBarButton {...props} onPress={() => navigation.navigate('ScanQr')}/>
          ),
          headerLeft: () => (
            <Pressable
              onPress={() => (navigation as any).goBack()}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
                flexDirection: 'row',
                marginHorizontal: 20
              })}>
                <Ionicons name='arrow-back' size={24} color='#fff' />
            </Pressable>
          ),
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('TermsConditions')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
                flexDirection: 'row'
              })}>
              <Ionicons name="notifications-outline" size={22} color='#fff' style={{ marginRight: 15 }} />
              <Text style={{color:'#fd4547', fontSize: 22, fontWeight: '900', position: 'absolute', top: -10, left: 10}}>.</Text>
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="Cards"
        component={CardsScreen}
        options={{
          title: 'Cards',
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="card-outline" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Support"
        component={SupportScreen}
        options={{
          title: 'Support',
          tabBarIcon: ({ color }) => <TabBarIcon name="chatbubbles-outline" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>['name'];
  color: string;
}) {
  return <Ionicons size={25} style={{ marginBottom: -3 }} {...props} />;
}

const styles = StyleSheet.create({
  shadow : {
    shadowColor: '#157f51',
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.25,
    textShadowRadius: 3.5,
    elevation: 5
  }
})
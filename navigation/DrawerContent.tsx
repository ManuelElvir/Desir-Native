import { AntDesign, Fontisto, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import React, {useState} from 'react'
import { ColorSchemeName, View, StyleSheet, Text, TouchableOpacity, Image, Button, Switch } from 'react-native'
import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../constants/Colors';

const DrawerContent = ({ colorScheme = 'light', navigation }: { colorScheme: ColorSchemeName, navigation : any }) => {


    const [switchBio, setSwitchBio] = useState(false)
    const [switchTheme, setSwitchTheme] = useState(false)
    const [currentRoute, setCurrentRoute] = useState('Main')

    // console.log('navigation',navigation.getState().routeNames[0]);
    
    if(colorScheme===null || colorScheme===undefined)
        colorScheme='light'

    const styles = StyleSheet.create({
        container : {
            paddingTop : 100,
        },
        itemText : {
            color : Colors[colorScheme].text
        },
        button : {width: 180, backgroundColor: '#67C6E1', alignItems: 'center', paddingVertical: 10, borderRadius: 5},
        backgroundGradient: {
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: 200,
            transform: [
                { skewX: "90deg" }
            ]
        },
    })

    const routes = [
        {name : 'Main', title: 'Accueil', icon : 'home-outline'},
        {name : 'Payment', title: 'Paiement', icon : 'bar-chart-outline'},
        {name : 'Saving', title: 'Epargne', icon : 'wallet-outline'},
        {name : 'Account', title: 'Compte', icon : 'person-outline'},
        {name : 'Settings', title: 'Paramètres', icon : 'settings-outline'},
    ]

    interface Route {
        name : string
        title : string
        icon : string
    }

    function navigate (route : string)  {
        setCurrentRoute(route)
        navigation.navigate(route)
        navigation.closeDrawer()
    }

    const RouteItem = ({item} : {item : Route}) => {
        if(colorScheme===null || colorScheme===undefined)
        colorScheme='light'

        return(
            <TouchableOpacity onPress={() => navigate(item.name)} style={{height: 65, paddingHorizontal: 20,  backgroundColor: item.name===currentRoute ? Colors[colorScheme].backgroundOverlay:'transparent'}} key={item.name}>
               
                <View style={{flexDirection: 'row', height: 65, alignItems: 'center', justifyContent: 'flex-start'}}>
                    <TabBarIcon name={item.icon as any} color={item.name===currentRoute?Colors[colorScheme].text:Colors[colorScheme].textLight} />
                    <Text style={{color: item.name===currentRoute?Colors[colorScheme].text:Colors[colorScheme].textLight, fontWeight: item.name===currentRoute?'500':'400', fontSize: 16, marginStart :20}}>{item.title}</Text>
                </View>
                
            </TouchableOpacity>
        )
    }

    return(
        <ScrollView style={styles.container}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingStart : 10,
                paddingEnd : 10
              }}>
                <View style={{flex: 0.3, marginLeft: 15}}>
                  <Image source={require('../assets/images/memoji.png')} style={{width: 65, height: 65}} />
                </View>
                <View style={{flex: 0.7}}>
                    <Text style={{color: Colors[colorScheme].text, fontWeight: '700', fontSize: 16}}>Constantine Etot</Text>
                    <Text style={{color: Colors[colorScheme].textLight, fontWeight: '400'}}>Yaoundé, CM</Text>
                </View>
            </TouchableOpacity>
            <View style={{marginTop: 25, marginStart: 10, 
            paddingStart : 10,
            paddingEnd : 10}}>
                <Text style={{color: Colors[colorScheme].textLight, fontWeight: '400', textTransform: 'uppercase', fontSize: 10}}>Mon Solde</Text>
                <Text style={{color: Colors[colorScheme].text, fontWeight: '800', fontSize: 32}}>240 000 Fcfa</Text>
                <TouchableHighlight  style={{marginTop: 10, width: 180}} onPress={() => {navigation.navigate('History')}}>
                    <View style={styles.button}>
                        <Text style={{color: Colors[colorScheme].text, fontWeight: '700', fontSize: 16}}>Historique</Text>
                    </View>
                </TouchableHighlight>
            </View>

            <View
                style={{
                    borderBottomColor: Colors[colorScheme].divider,
                    borderBottomWidth: 0.5,
                    marginTop : 20,
                    marginBottom : 10
                }}
                />

            {routes.map((item) => <RouteItem key={item.name} item={item} />)}

            

            <View
                style={{
                    borderBottomColor: Colors[colorScheme].divider,
                    borderBottomWidth: 0.5,
                    marginTop : 20,
                    marginBottom : 10
                }}
                />

            {/* <TouchableOpacity style={{height: 65, paddingHorizontal: 20}}>
                <View style={{flexDirection: 'row', height: 65, alignItems: 'center', justifyContent: 'flex-start'}}>
                    <TabBarIcon name='person-outline' color={'profile'===currentRoute?Colors[colorScheme].accent:Colors[colorScheme].text} />
                    <Text style={{color: 'profile'===currentRoute?Colors[colorScheme].accent:Colors[colorScheme].text, fontWeight: 'profile'===currentRoute?'500':'400', fontSize: 16, marginStart :20}}>Profile</Text>
                </View>
                
            </TouchableOpacity> */}
            <TouchableOpacity style={{height: 65, paddingHorizontal: 20}} onPress={()=>setSwitchBio(!switchBio)}>
                <View style={{flexDirection: 'row', height: 65, alignItems: 'center', justifyContent: 'flex-start'}}>
                    <AntDesign name="scan1" size={24} color={Colors[colorScheme].text}/>
                    <Text style={{color: Colors[colorScheme].text, fontWeight: '400', fontSize: 16, marginStart :20}}>Biométrique</Text>
                    <Switch onChange={()=>setSwitchBio(!switchBio)} value={switchBio} style={{position: 'absolute', right: 20, top: 15, bottom: 15}}/>
                    <View style={{ backgroundColor: '#fd2547', borderRadius: 3, paddingHorizontal: 8, paddingVertical: 3, transform: [{ skewY: "-10deg" }, ], position: 'absolute', right: 0, top: 0}}><Text style={{color: Colors[colorScheme].text}}>New</Text></View>
                </View>
                
            </TouchableOpacity>
            <TouchableOpacity style={{height: 65, paddingHorizontal: 20}} onPress={()=>setSwitchTheme(!switchTheme)}>
                <View style={{flexDirection: 'row', height: 65, alignItems: 'center', justifyContent: 'flex-start'}}>
                    <MaterialCommunityIcons name="weather-night" size={24} color={Colors[colorScheme].text}/>
                    <Text style={{color: 'profile'===currentRoute?Colors[colorScheme].accent:Colors[colorScheme].text, fontWeight: 'profile'===currentRoute?'500':'400', fontSize: 16, marginStart :20}}>Thème Sombre</Text>
                    <Switch onChange={()=>setSwitchTheme(!switchTheme)} value={switchTheme} style={{position: 'absolute', right: 20, top: 15, bottom: 15}} />
                </View>
                
            </TouchableOpacity>
            
        </ScrollView>
    )
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

export default DrawerContent


import { StyleSheet, Text, View, Button, TouchableOpacity, Platform } from 'react-native';
import { NavigationContainer, useTheme } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import ChooseDate from '../screens/DateScreen'
import Home from '../screens/Intropage';
import chooseTYPE from '../screens/chooseTYPE';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useColorMode, StatusBar, Divider, Image, Input, HStack, Box, ColorMode } from 'native-base';

import Cartt from '../screens/DateScreen'
import ShowKimonoDetail from '../screens/KimonoDetail'
import Account from '../screens/account'
import SettingsScreen from '../screens/SettingsScreen';
import KIMONOScreen from '../screens/KIMONOscreen';
import DetailsScreen from '../screens/DetailScreen';


import kimonoData from '../json/kimonodata.json'
import albumsData from '../json/albums.json'


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function Navigation() {
    const { colors } = useTheme();
    const { colorMode } = useColorMode();
    return (

        <NavigationContainer independent={true}>
            <StatusBar
                barStyle={colorMode == "light" ? "dark-content" : "light-content"}
                backgroundColor={colorMode == "light" ? "white" : "black"}
            />
            {Platform.OS == 'ios' ?
                <MyTab /> :
                <MyDrawer/>
            }
        </NavigationContainer>

    );
}

const CustomDrawerContent = (props) => {
    const { colors } = useTheme();
    const { colorMode } = useColorMode();

    return (
        <DrawerContentScrollView {...props}
            contentContainerStyle={{ paddingTop: 0 }}
        >
            <Image
                backgroundColor={'#fff6f5'}
                h={180}
                w={200}
                source={{ uri: 'https://raw.githubusercontent.com/howie960018/rentakimono/d2837a62b428cd41ab139b4fd9e3fa208037d49a/assets/iee.png' }}
                alt='albumImage'
            />
            <DrawerItemList {...props} />

        </DrawerContentScrollView>
    );
}






const MyDrawer = () => {
    const { colors } = useTheme();
    const { colorMode } = useColorMode();

    return (
        <Drawer.Navigator
            initialRouteName="HomeStack"
            screenOptions={{
                drawerActiveBackgroundColor: colorMode == "light" ? colors.primary100 : '#AAA',
                drawerActiveTintColor: colorMode == "light" ? '#ED8080' : '#FFAAAA',
                drawerInactiveTintColor: colorMode == "light" ? colors.light500 : '#fff',
                drawerStyle: { width: 200, backgroundColor: colorMode == "light" ? "#fff6f5" : "#AAAAAA" },
                drawerLabelStyle: { fontSize: 18, fontWeight: '400' },
               
            }}
            drawerContent={props => <CustomDrawerContent {...props} />}
        >
            <Drawer.Screen
                name="Home"
                component={MyHomeStack}
                options={{
                    headerShown: false,
                    drawerLabel: "Home",
                    drawerIcon: ({color}) => (
                        <MaterialCommunityIcons name="home-outline" color={color} size={26} />
                    ),
                }}
            />
            <Drawer.Screen
                name="SettingStack"
                component={SettingStack}
                options={{
                    headerLeft: () => (
                        Platform.OS == 'ios' ?
                            <></> :
                            <MaterialCommunityIcons
                                name={'menu'}
                                size={20}
                                onPress={() => navigation.openDrawer()}
                                style={{ marginRight: 20 }}
                                color={'#fff'}
                            />
                    ),
                    headerShown: false,
                    drawerLabel: "Settings",
                    drawerIcon: ({color}) => (
                        <MaterialCommunityIcons name="cog-outline" color={color} size={26} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Account"
                component={Account}
                options={{
                    headerShown: false,
                    drawerLabel: "Account",
                    drawerIcon: ({color}) => (
                        <MaterialCommunityIcons name="account-outline" color={color} size={26} />
                    ),
                }}
            />
        </Drawer.Navigator>
    );
}


function MyTab() {
    return (
       
            <Tab.Navigator
                initialRouteName='Homee'
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color, focused }) => {
                        let iconName
                        if (route.name == 'Homee') {
                            iconName = focused ? 'ios-home' : 'home-outline'
                            return <Ionicons name={iconName} size={25} color={color} />
                        } else if (route.name == 'Cart') {
                            iconName = focused ? 'cart' : 'cart-outline'
                            return <Ionicons name={iconName} size={25} color={color} />
                        } else if (route.name == 'Settings') {
                            iconName = focused ? 'settings' : 'settings-outline'
                            return <Ionicons name={iconName} size={25} color={color} />
                        }

                    }
                })}
                // tabBarOptions={{
                //     activeTintColor: '#F88C8C',
                //     inactiveTintColor: 'gray'
                // }}
            >
                <Tab.Screen
                    options={{ headerShown: false }}
                    name="Homee" component={MyHomeStack} />
                <Tab.Screen name="Cart" component={Cart} 
                 options={{
                    headerStyle: {
                        backgroundColor: '#FFAAAA'
                    },
                    headerLeft: () => (
                        Platform.OS == 'ios' ?
                            <></> :
                            <MaterialCommunityIcons
                                name={'menu'}
                                size={20}
                                onPress={() => navigation.openDrawer()}
                                style={{ marginRight: 1 ,marginLeft:12}}
                                color={'#fff'}
                                
                            />
                    )
                }} 
                />
                <Tab.Screen name="Settings" component={SettingStack} options={{ headerShown: false }} />
            </Tab.Navigator>
        
    );
}

function MyHomeStack({ navigation }) {
    return (
        <Stack.Navigator
            initialRouteName='Homee'
            screenOptions={{

            }}
        >
            <Stack.Screen name="Home" component={Home}
                options={{
                    headerStyle: {
                        backgroundColor: '#FFAAAA'
                    },
                }} />
            <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: '#FFAAAA'
                    },
                    headerLeft: () => (
                        Platform.OS == 'ios' ?
                            <></> :
                            <MaterialCommunityIcons
                                name={'menu'}
                                size={20}
                                onPress={() => navigation.openDrawer()}
                                style={{ marginRight: 20 }}
                                color={'#fff'}
                            />
                    )
                }}
                name="Welcome" component={chooseTYPE} />
            <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: '#FFAAAA'
                    },
                    headerLeft: () => (
                        Platform.OS == 'ios' ?
                            <></> :
                            <MaterialCommunityIcons
                                name={'menu'}
                                size={20}
                                onPress={() => navigation.openDrawer()}
                                style={{ marginRight: 20 }}
                                color={'#fff'}
                            />
                    )
                   
                }}
                name="和服" component={KIMONOScreen}
               />

            <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: '#FFAAAA'
                    },
                    headerLeft: () => (
                        Platform.OS == 'ios' ?
                            <></> :
                            <MaterialCommunityIcons
                                name={'menu'}
                                size={20}
                                onPress={() => navigation.openDrawer()}
                                style={{ marginRight: 20 }}
                                color={'#fff'}
                            />
                    )
                }}
                name="配件" component={ShowKimonoDetail} />
            <Stack.Screen
                name="Detail"
                component={DetailsScreen}
                options={({ route }) => ({
                    title: route.params.title,

                    headerTintColor: 'black',
                    headerStyle: {
                        backgroundColor: '#FFAAAA'
                    },
                    headerTitleStyle: {
                        color: 'black',
                        fontWeight: '400',
                        fontSize: 20
                    },
                    headerLeft: () => (
                        Platform.OS == 'ios' ?
                            <></> :
                            <MaterialCommunityIcons
                                name={'menu'}
                                size={20}
                                onPress={() => navigation.openDrawer()}
                                style={{ marginRight: 20 }}
                                color={'#fff'}
                            />
                    )
                })}
            />
            <Stack.Screen  name='ChooseDate' component={ChooseDate}/>

        </Stack.Navigator>
    )

}

function Cart({ navigation }) {
    return (
        <Box style={styles.container}
            _dark={{ bg: "#6C6C6C" }}
            _light={{ bg: "#E0FDFF" }}>
            <View style={styles.cartitle}>
                <Text style={styles.cartxt}>Your Cart</Text>
            </View>
        </Box>
    );

}

function SettingStack({ navigation }) {
    return (
        <Stack.Navigator>
            <Stack.Screen 
            
            options={{
                headerStyle: {
                    backgroundColor: '#FFAAAA'
                },
                headerLeft: () => (
                    Platform.OS == 'ios' ?
                        <></> :
                        <MaterialCommunityIcons
                            name={'menu'}
                            size={20}
                            onPress={() => navigation.openDrawer()}
                            style={{ marginRight: 20 }}
                            color={'#fff'}
                        />
                )
            }} name='SettingScreen' component={SettingsScreen} />

        </Stack.Navigator>

    )
}




export default Navigation;


const styles = StyleSheet.create({
    container: {
        flex: 1,
     
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    imagestyle: {
        width: 188,
        height: 201,
        marginTop: 129,
        marginBottom: 40,
    },
    kimstyle: {
        width: 310,
        height: 149,
        backgroundColor: "#8EEBFF",
        borderRadius: 23,
        marginTop: 20
    },
    kimstyle2: {
        width: 310,
        height: 149,
        backgroundColor: "#FFE4E4",
        borderRadius: 23,
        marginTop: 20
    },

    text: {
        marginTop: 10,
        marginBottom: 40,
        fontSize: 24

    },
    buttontxt: {
        color: '#fff',
        fontSize: 20,
        color: "#fff",
        marginLeft: 140,
        marginTop: 10
    },
    start: {
        fontSize: 16,
        width: 311,
        height: 47,
        backgroundColor: '#FFAAAA',
        borderRadius: 30

    },
    foxstyle: {
        width: 112,
        height: 120,
        marginBottom: 20
    },
    cartitle: {
        marginTop: 40,
        alignItems: 'center',
        justifyContent: 'center',


    },
    cartxt: {
        fontSize: 30,
        color: 'pink'

    }

});
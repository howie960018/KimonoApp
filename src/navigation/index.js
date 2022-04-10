import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity,Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Intropage';
import DetailsScreen from '../screens/chooseTYPE';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function Navigation() {
    return (
      <MyTab/>
    
  );
}

function MyTab() {
    return (
        <NavigationContainer>
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
                        } else if (route.name == 'Search') {
                            iconName = focused ? 'search' : 'search-outline'
                            return <Ionicons name={iconName} size={25} color={color} />
                        }

                    }
                })}
                tabBarOptions={{
                    activeTintColor: '#F88C8C',
                    inactiveTintColor: 'gray'
                }}
            >
                <Tab.Screen
                    options={{headerShown:false}}
                    name="Homee" component={MyHomeStack} />
                <Tab.Screen name="Cart" component={MyProfileStack} />
                <Tab.Screen name="Search" component={SearchStack} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

function MyHomeStack() {
    return (
        <Stack.Navigator
            initialRouteName='Home'
            screenOptions={{
               
            }}
        >
            <Stack.Screen 
            
            name="Home" component={Home} />
            <Stack.Screen 
            options={{
                headerLeft: () => (
                    Platform.OS == 'ios' ?
                      <></> :
                      <MaterialCommunityIcons
                        name={'menu'}
                        size={20}
                        // onPress={() => navigation.openDrawer()}
                        style={{ marginRight: 20 }}
                      />
                  )}}
            name="Details" component={DetailsScreen}/>
            
        </Stack.Navigator>
    )

}

function MyProfileStack() {
    return (
        <View>
            <Text>cart</Text>
        </View>
    )
}

function SearchStack() {
    return (
        <View>
            <Text>SearchStack</Text>
        </View>
    )
}


export default Navigation;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
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
    }

});
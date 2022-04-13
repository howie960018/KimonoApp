//這頁拿來挑選和服跟配件

import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { Box ,Text} from 'native-base';


export default function DetailsScreen({ navigation }) {
    return (
        <Box style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
            _dark={{ bg: "#6C6C6C" }}
            _light={{ bg: "#E0FDFF" }}>
            <Image style={styles.foxstyle} source={{ uri: 'https://github.com/howie960018/rentakimono/blob/master/assets/images/foxumbrella.png?raw=true' }} />
           
                <Text style={{ fontSize: 18 } } marginTop={3}  _dark={{ color: "#fff" }}
            _light={{ color: "black" }} >歡迎</Text>
                <Text style={{ fontSize: 16 }} marginTop={3}>請挑選您有興趣的和服吧!</Text>
           

            <TouchableOpacity onPress={() => navigation.navigate('和服')} >
                <Image
                    source={{ uri: 'https:github.com/howie960018/rentakimono/blob/master/assets/images/enterkimono.png?raw=true' }}
                    style={styles.kimstyle}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('配件')}>
                <Image
                    source={{ uri: 'https:github.com/howie960018/rentakimono/blob/master/assets/images/accessories.png?raw=true' }}
                    style={styles.kimstyle}
                />
            </TouchableOpacity>

        </Box>
    );
}

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
        height: 115,
        backgroundColor: "#8EEBFF",
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
        width: 120,
        height: 150,
        marginBottom: 20
    }

});
import React, { useState } from 'react';
import { Linking, StyleSheet,TouchableOpacity } from 'react-native';
import { NativeBaseProvider, Center, ScrollView, Box, HStack, Text, Heading, Image, Button } from "native-base";


const ShowKimonoDetail = ({ navigation }) => {

    return (
        <Center
            flex={1} _dark={{ bg: "blueGray.900" }}
            _light={{ bg: "white" }}
        >
            <ScrollView >

                <Image
                    source={{uri:'https://www.nopcommerce.com/images/thumbs/0005720_coming-soon-page_550.jpeg'}}
                    alt='albumImage'
                    style={styles.img}
                    backgroundColor={'#C0EFEC'}
                />
            

            </ScrollView>
        </Center>

    );
}

export default ShowKimonoDetail;



const styles = StyleSheet.create({
    img: {

        width: 360,
        height: 423,

    },
})
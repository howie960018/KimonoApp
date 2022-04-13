import React, { useState } from "react";
import Header from '../components/Header';
import { StyleSheet } from "react-native";
import { TouchableOpacity, Box, Center, View, ScrollView, FormControl, useColorMode, VStack, Text, Input, Button, Pressable } from 'native-base'

const Acount = ({ navigation }) => {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [adrs, setAdrs] = useState("");
   const [tel, setTel] = useState("");

   const { colorMode } = useColorMode();
   const formLabelStyle = {
      color: colorMode == "light" ? "muted.700" : "white",
      fontSize: "xl",
      fontWeight: 600
   };
   const focusInputStyle = {
      borderColor: colorMode == "light" ? "muted.700" : "white",
   }

   return (
      <ScrollView flex={1}  _dark={{ bg: "#6C6C6C" }}
      _light={{ bg: "#E0FDFF" }} >
         <Header />
         <VStack space={2} mt={5} width="80%" alignSelf="center">
            <Text textAlign="center" fontSize="2xl" pb="4">
               LOGIN
            </Text>
            <FormControl mb={5} isRequired>
               <FormControl.Label _text={formLabelStyle}>
                  Name
               </FormControl.Label>
               <Input
                  variant="underlined" _focus={focusInputStyle}
                  value={name} onChangeText={text => setName(text)}
               />
            </FormControl>
            <FormControl mb={5} isRequired>
               <FormControl.Label _text={formLabelStyle}>
                  Email
               </FormControl.Label>
               <Input
                  variant="underlined" _focus={focusInputStyle}
                  value={email} onChangeText={text => setEmail(text)}
               />
            </FormControl>
            <FormControl mb={5}>
               <FormControl.Label _text={formLabelStyle}>
                  Address
               </FormControl.Label>
               <Input
                  variant="underlined" _focus={focusInputStyle}
                  value={adrs} onChangeText={text => setAdrs(text)}
               />
            </FormControl>
            <Center  >
               <Button >  
                 LOGIN
               </Button>
            </Center>
         </VStack>

      </ScrollView>

   );
   // return (
   //    <View>
   //    <Header/>


   //    </View>
   // );
}

export default Acount;

const styles = StyleSheet.create({
   img: {

      width: 360,
      height: 423,

   },
   counter: {
      width: 420,
      height: 230,
      backgroundColor: "#66B0B5",
      justifyContent: 'center',
      alignItems: 'center'


   },
   intro: {
      width: 420,
      height: 569,



   },
   start: {
      fontSize: 16,
      width: 311,
      height: 47,
      backgroundColor: '#FFAAAA',
      borderRadius: 30,
      marginTop: 35,
      marginLeft: 23,
      justifyContent: 'center',
      alignItems: 'center'
   },
   buttontxt: {

      fontSize: 16

   },






})


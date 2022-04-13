import React from "react";
import { Box, Center, Switch, HStack,VStack, Text, useColorMode } from 'native-base';


const SettingsScreen = () => {
    
   const { colorMode, toggleColorMode } = useColorMode();

   return (
      <Box
         flex={1}
         _dark={{ bg: "#6C6C6C" }}
         _light={{ bg: "#E0FDFF" }}
         
      >
         <Text fontSize={20} marginLeft={6} marginTop={10}>SETTING</Text>
         <Center
         marginTop={160}
            shadow={2} width="90%"
            mt="2" px="2" py="4"
            _dark={{ bg: "#878787", borderColor: 'blueGray.500', borderWidth: 0.6 }}
            _light={{ bg: "white" }}
            borderRadius="md"
            alignSelf="center"
         >
            <VStack space={8} alignItems="center" >
               <Text fontSize="lg">{colorMode == "light" ? "Light Mode" : "Dark Mode"}</Text>
               <Switch
                  name="light Mode"
                  isChecked={colorMode === "light"}
                  onToggle={toggleColorMode}
                  accessibilityLabel="display-mode"
                  accessibilityHint="light or dark mode"
               />
            </VStack>
         </Center>
      </Box>

   );

  
};

export default SettingsScreen;


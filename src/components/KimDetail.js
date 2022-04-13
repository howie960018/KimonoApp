import React from "react";
import { Box, HStack, VStack, AspectRatio, Text, Image, Pressable } from "native-base"

const KimDetail = ({ album, navigation }) => {
  return (
    <Box width={150} height={150}  marginLeft={3} margin={5}  borderRadius={3} shadow={6}
    _dark={{ bg: "#6C6C6C" }}
    _light={{ bg: "#E0FDFF" }}>
     <Box>
        <Pressable 
          onPress={() => navigation.navigate('Detail', album)}
        >
          <AspectRatio  ratio={1}   >
            <Image
              backgroundColor={album.bgc}
              borderBottomRadius={10}
              source={{ uri: album.image }}
              alt="album"
            />            
          </AspectRatio>
        </Pressable>
        </Box>
    </Box>
  )};

export default KimDetail;

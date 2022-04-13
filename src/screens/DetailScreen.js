import React, { useState } from 'react';
import { Linking, StyleSheet, TouchableOpacity } from 'react-native';
import { Center, ScrollView, Box, AspectRatio, Text, HStack, Image, Button, Pressable } from "native-base";
import ActionButton from '../components/ActionButton'

const DetailScreen = ({ navigation,route }) => {
  const useStateWithLabel = (initialValue, label) => {
    const [value, setValue] = useState(initialValue);

    return [value, setValue];
  };

  const [count, setCount] = useStateWithLabel(0, "count");

  const { title,
    artist,
    price,
    bgc,
    image,
    description,
    component1,
    component2,
    component3,
    c1price,
    c2price,
    c3price
  } = route.params;

  return (
    <Center
      flex={1}
    >
      <ScrollView >
        <AspectRatio w="100%" ratio={1}>
          <Image
            background={bgc}
            source={{ uri: image }}
            alt='albumImage'
          />
        </AspectRatio>
        <Box style={styles.counter} >
          <Box alignItems={'center'} justifyContent={'center'} >
            <Text marginTop={3} marginBottom={1} fontSize={15} color={'white'} >-{artist} -</Text>
            <Text fontSize={24} color={'white'}>{title}</Text>
          </Box>
          <HStack space={0} alignItems={'center'} justifyContent={'center'} marginTop={1}>
            <Button borderRadius={6} width={55} onPress={() => setCount(count + 1)} backgroundColor={'#82D4E5'}>
              <Text fontSize={25} color={'white'} >+</Text>
            </Button>
            <Box backgroundColor={'white'} width={55} alignItems={'center'} justifyContent={'center'}
             >
              <Text fontSize={22} mt={3} marginLeft={-4} marginBottom={2} color={'black'}  >  {count}
              </Text>
            </Box>
            <Button borderRadius={6} width={55} onPress={() => setCount(count - 1)} backgroundColor={'#82D4E5'}>
              <Text fontSize={25} color={'white'}>-</Text>
            </Button>
          </HStack>

          <ActionButton />

        </Box>
        <Box style={styles.intro} _dark={{ bg: "#6C6C6C", borderColor: 'blueGray.500', borderWidth: 0.6 }}
          _light={{ bg: "#E0FDFF" }}>

          <Text marginTop={10} marginLeft={25} >
            <Text bold fontSize={16} marginTop={5} >產品說明 </Text>
          </Text>
          <Box marginRight={4} >
            <Text marginTop={10} marginLeft={25} fontSize={16} >
              {description}
            </Text>
          </Box>
          <Text marginTop={10} marginLeft={26} fontSize={26} >
            {component1}{'                  '}{c1price}x{count}
          </Text>
          <Text marginTop={10} marginLeft={25} fontSize={26}>
            {component2}{'                 '}{c2price}x{count}
          </Text>
          <Text marginTop={10} marginLeft={25} fontSize={26}>
            {component3}{'                 '}{c3price}x{count}
          </Text>



          <Text marginTop={10} marginLeft={25} bold fontSize={28}>Total:{'     '}${' '}{price}x{count}={price*count}</Text>
          <Box alignItems={'center'} justifyContent={'center'}>
            <TouchableOpacity style={styles.start} onPress={() => {navigation.navigate('ChooseDate') }} >
              <Text style={styles.buttontxt} _dark={{ color: "blueGray.900", }}
                _light={{ color: "blueGray.50" }} >下一步</Text>
            </TouchableOpacity>
          </Box>

        </Box>
      </ScrollView>
    </Center>

  );
}

export default DetailScreen;

const styles = StyleSheet.create({
  img: {

    width: 390,
    height: 423,

  },
  counter: {
    width: 390,
    height: 230,
    backgroundColor: "#66B0B5",
    justifyContent: 'center',
    alignItems: 'center'


  },
  intro: {
    width: 390,
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
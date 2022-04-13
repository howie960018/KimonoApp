import React from 'react';
import { Box, Pressable, Actionsheet, useDisclose ,Text} from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';


export default () => {
  const { isOpen, onOpen, onClose } = useDisclose();
  return (
    <>
      <Pressable
      marginTop={3}
      padding={2}
        onPress={onOpen}
        bg="#edf5f7"  borderRadius={10} shadow={2} justifyContent="center" alignItems="center" zIndex={99} 
      >
        <Text color={'black'}>Choose Size</Text>
      </Pressable>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <Actionsheet.Header>Choose Size</Actionsheet.Header>
          <Actionsheet.Item>S</Actionsheet.Item>
          <Actionsheet.Item>M</Actionsheet.Item>
          <Actionsheet.Item>L</Actionsheet.Item>
          <Actionsheet.Item color="red.500">XL</Actionsheet.Item>
        </Actionsheet.Content>
        <Actionsheet.Footer safeAreaBottom={true}>
          <Actionsheet.Item pl="15" onPress={onClose}>Close</Actionsheet.Item>
        </Actionsheet.Footer>          
      </Actionsheet>
    </>
  );
}

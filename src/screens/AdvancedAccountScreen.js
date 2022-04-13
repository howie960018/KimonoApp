import { Center, Text } from 'native-base'
import kimonoData from '../json/kimonodata.json';
import albumsData from '../json/albums.json'

import KimList from '../components/KimList';

const AdvancedAccountScreen = ({navigation}) => {
   return (
      <Center flex={1}>
         <KimList list={albumsData.data} navigation={navigation}/>
      </Center>
   );
}

export default AdvancedAccountScreen;
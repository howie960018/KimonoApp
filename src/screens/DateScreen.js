import React, { useState } from 'react';
import {
  StyleSheet,
  StatusBar,

  View
} from 'react-native';
import { Box, Text } from 'native-base';
import CalendarPicker from 'react-native-calendar-picker';

export default function DatePicker({ navigation }) {

  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);

  const startDate = selectedStartDate
    ? selectedStartDate.format('YYYY-MM-DD').toString()
    : '';
    const EndDate = selectedEndDate
    ? selectedEndDate.format('YYYY-MM-DD').toString()
    : '';



  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text margin={7} fontSize={16}>選擇租借日期和時間</Text>
      <Box backgroundColor={'#fff'}> 
        <CalendarPicker backgroundColor={'#fff'} onDateChange={setSelectedStartDate} />
      </Box>
     
      <Text style={styles.dateText}>From: {startDate}</Text>

      <Text style={styles.dateText}>To: {EndDate}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.9,
    backgroundColor:'#bdf6ff',
    
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  dateText: {
    margin: 16,
  },
});
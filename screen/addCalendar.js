import React, {useState} from 'react';
import {SafeAreaView, Text, TextInput, Button} from 'react-native';
import GradientText from '../component/GradientText';
import DatePicker from 'react-native-date-picker';

function AddCalendar() {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  return (
    <SafeAreaView style={{margin: 10}}>
      <GradientText
        style={{
          fontSize: 30,
          fontWeight: '700',
          color: '#09bcc8',
          marginBottom: 10,
        }}>
        Tạo lịch họp
      </GradientText>
      <Text>Tên lịch họp</Text>
      <TextInput
        style={{
          borderRadius: 5,
          height: 40,
          marginTop: 10,
          borderWidth: 1,
          maxWidth: 360,
          padding: 10,
        }}
      />
      <Text>Thời gian họp</Text>
      <Button title="Open" onPress={() => setOpen(true)} />
      <DatePicker
        modal
        mode="time"
        open={open}
        date={date}
        onConfirm={date => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </SafeAreaView>
  );
}
export default AddCalendar;

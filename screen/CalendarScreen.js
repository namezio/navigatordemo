import React from 'react';
import {Agenda} from 'react-native-calendars';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import ButtonGradient from '../component/ButtonGradient';
import {useNavigation} from '@react-navigation/native';

function CalendarScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1}}>
      <Agenda
        items={{
          '2022-04-23': [
            {
              time: '19h00',
              title: 'Họp 1',
              hostname: 'Nam Ezio',
            },
          ],
          '2022-04-25': [
            {time: '17h00', title: 'item 2 - any js object', hostname: 'Hưng'},
          ],
          '2022-04-22': [{time: '15h00', title: 'Họp gấp', hostname: 'Khang'}],
          '2022-04-24': [
            {time: '15h00', title: 'item 3 - any js object', hostname: 'Khang'},
            {title: 'any js object'},
          ],
          '2022-04-21': [
            {time: '15h00', title: 'item 3 - any js object', hostname: 'Khang'},
            {title: 'any js object'},
          ],
        }}
        renderItem={item => {
          return (
            <View style={styles.CardEvent}>
              <View style={{margin: 10, flex: 2}}>
                <View style={{flexDirection: 'column'}}>
                  <Text style={{marginBottom: 10, fontSize: 18, color: 'red'}}>
                    Thời gian : <Text>{item.time}</Text>
                  </Text>
                  <Text
                    style={{fontSize: 16, marginBottom: 5, fontWeight: '600'}}>
                    Tên cuộc họp : <Text>{item.title}</Text>
                  </Text>
                  <Text>
                    Chủ Tọa: <Text>{item.hostname}</Text>
                  </Text>
                </View>
              </View>
              <View style={{flex: 1}}>
                <Image
                  source={{uri: 'https://source.unsplash.com/1024x768/?girl'}}
                  style={{
                    borderRadius: 50,
                    width: 75,
                    height: 75,
                    margin: 10,
                  }}
                />
              </View>
            </View>
          );
        }}
        scrollEnabled={true}
        theme={{
          calendarBackground: 'pink',
          todayTextColor: '#00adf5',
        }}
      />
      <View style={{marginLeft: 15, marginRigh: 20}}>
        <ButtonGradient
          text={'Thêm lịch'}
          onPress={() => navigation.navigate('AddCalendar')}
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  CardEvent: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    margin: 5,
    borderRadius: 20,
  },
});
export default CalendarScreen;

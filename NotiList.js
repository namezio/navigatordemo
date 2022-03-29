import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  RefreshControl,
  Image,
} from 'react-native';

const NotiList = () => {

  const [Items, setItems] = useState([
    {
      key: 1,
      item: 'Thông báo',
      time: '9:00 PM',
      uri: "https://source.unsplash.com/1024x768/?tree"
    },
    {
      key: 2,
      item: 'Thông báo',
      time: '9:00 PM',
      uri: "https://source.unsplash.com/1024x768/?tree"
    },
    {
      key: 3,
      item: 'Thông báo',
      time: '9:00 PM',
      uri: "https://source.unsplash.com/1024x768/?tree"
    },
    {
      key: 4,
      item: 'Thông báo',
      time: '9:00 PM',
      uri: "https://source.unsplash.com/1024x768/?tree"
    },
    {
      key: 5,
      item: 'Thông báo',
      time: '9:00 PM',
      uri: "https://source.unsplash.com/1024x768/?tree"
    },
    {
      key: 6,
      item: 'Thông báo',
      time: '9:00 PM',
      uri: "https://source.unsplash.com/1024x768/?tree"
    },
    {
      key: 7,
      item: 'Thông báo',
      time: '9:00 PM',
      uri: "https://source.unsplash.com/1024x768/?tree"
    },
    {
      key: 8,
      item: 'Thông báo',
      time: '9:00 PM',
      uri: "https://source.unsplash.com/1024x768/?tree"
    },
    {
      key: 44,
      item: 'Thông báo',
      time: '9:00 PM',
      uri: "https://source.unsplash.com/1024x768/?tree"
    },
    {
      key: 68,
      item: 'Thông báo',
      time: '9:00 PM',
      uri: "https://source.unsplash.com/1024x768/?tree"
    },
    {
      key: 0,
      item: 'Thông báo',
      time: '9:00 PM',
      uri: "https://source.unsplash.com/1024x768/?tree"
    },
  ]);
  const [Refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setItems([...Items, { key: 69, item: 'Item 69', time: '9', uri: "https://source.unsplash.com/1024x768/?tree" }]);
    setRefreshing(false);
  }

  return (
    <ScrollView
      style={styles.body}
      refreshControl={
        <RefreshControl
          refreshing={Refreshing}
          onRefresh={onRefresh}
          colors={['#ff00ff']}
        />
      }
    >
      {
        Items.map((object) => {
          return (
            <View
              style={styles.item}
              key={object.key}>
              <Image
                source={{ uri: object.uri }}
                style={{
                  borderRadius: 50,
                  width: 50,
                  height: 50,
                  margin: 10
                }} />
              <View>
                <Text
                  style={styles.text}>
                  {object.item}
                </Text>
                <Text
                  style={styles.time}>
                  {object.time}
                </Text>
              </View>
            </View>
          )
        })
      }
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  body: {
    flexDirection: 'column',
  },
  item: {
    backgroundColor: '#FAF9F8',
    borderRadius: 20,
    flexDirection: 'row',
    margin: 10,

    // justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    maxWidth: 250,
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 5,
  },
  time: {
    margin: 5,
    fontSize: 15,
    color: 'red'
  },
  
});

export default NotiList;
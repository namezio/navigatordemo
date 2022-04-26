import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {SliderBox} from 'react-native-image-slider-box';
import {useSelector} from 'react-redux';

export default function SliderImage() {
  const images = useSelector(state => state.auth.sliders).map(x => ({
    url: x.imageUrl,
  }));
  return (
    <View style={styles.container}>
      <SliderBox
        ImageComponentStyle={{borderRadius: 15, width: '97%'}}
        images={images}
        dotStyle={{
          width: 30,
          height: 5,
          borderRadius: 15,
          marginHorizontal: 0,
          padding: 0,
          margin: 0,
        }}
        autoplay
        circleLoop
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

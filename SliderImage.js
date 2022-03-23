import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import { SliderBox } from "react-native-image-slider-box";

export default class SliderImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        "https://source.unsplash.com/1024x768/?nature",
        "https://source.unsplash.com/1024x768/?water",
        "https://source.unsplash.com/1024x768/?girl",
        "https://source.unsplash.com/1024x768/?tree",
        
      ]
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <SliderBox
        ImageComponentStyle={{borderRadius: 15, width: '97%'}}
          images={this.state.images}
          dotStyle={{
            width: 30,
            height: 5,
            borderRadius: 15,
            marginHorizontal: 0,
            padding: 0,
            margin: 0
          }}
          
          autoplay
          circleLoop
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
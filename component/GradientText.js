import MaskedView from '@react-native-masked-view/masked-view';
import {Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import React from 'react';

const GradientText = props => (
  <MaskedView maskElement={<Text {...props} />}>
    <LinearGradient
      colors={['#42d7f5', '#42f57e']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}>
      <Text {...props} style={[props.style, {opacity: 0}]} />
    </LinearGradient>
  </MaskedView>
);
export default GradientText;

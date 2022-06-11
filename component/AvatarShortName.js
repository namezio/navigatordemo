import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const AvatarShortName = ({shortName}) => {
  return (
    <View
      style={{
        width: 50,
        height: 50,
        backgroundColor: 'gray',
        justifyContent: 'center',
        borderRadius: 30,
      }}>
      <Text
        style={{
          alignSelf: 'center',
          color: '#FFF',
          fontSize: 24,
        }}>
        {shortName}
      </Text>
    </View>
  );
};
export default AvatarShortName;

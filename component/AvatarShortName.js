import {Text, TouchableOpacity, View} from 'react-native';

const AvatarShortName = ({shortName}) => {
  return (
    <View
      style={{
        width: 40,
        height: 40,
        backgroundColor: 'gray',
        justifyContent: 'center',
      }}>
      <Text
        style={{
          alignSelf: 'center',
          fontSize: 24,
        }}>
        {shortName}
      </Text>
    </View>
  );
};

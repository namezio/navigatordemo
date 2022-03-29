import {View, Text, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import * as React from 'react';
import {Switch} from 'react-native-paper';
import NotiList from './NotiList';

function Notification({navigation}) {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  return (
    <SafeAreaView>
      {/* header */}
      <View style={{flexDirection: 'row', margin: 10}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../navigatordemo/icons/back.png')}
            style={{width: 40, height: 40, marginRight: 10}}
          />
        </TouchableOpacity>
        <Text
          style={{fontSize: 30, flex: 2, color: '#F21850', fontWeight: '600'}}>
          Thong bao
        </Text>
        <View style={{flex: 1.2, flexDirection: 'row', alignItems: 'center'}}>
          <Switch
            value={isSwitchOn}
            onValueChange={onToggleSwitch}
            style={{transform: [{scaleX: 0.8}, {scaleY: 0.8}]}}
          />
          <Text> Chua doc</Text>
        </View>
      </View>
      <View
        style={{
          marginLeft: 20,
          marginRight: 20,
          borderTopWidth: 1,
          borderTopColor: '#ccc',
        }}
      />
      <NotiList />
    </SafeAreaView>
  );
}

export default Notification;

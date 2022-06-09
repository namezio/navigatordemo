import React, {useCallback, useState} from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import GradientText from '../../component/GradientText';
function AddContact() {
  return (
    <SafeAreaView style={{margin: 5}}>
      <GradientText
        style={{
          fontSize: 30,
          fontWeight: '700',
        }}>
        Thêm liên hệ mới
      </GradientText>
      <View style={{flexDirection: 'row', marginTop: 10}}>
        <TextInput
          style={{
            flex: 4,
            borderRadius: 5,
            height: 40,
            borderWidth: 1,
            maxWidth: 360,
            padding: 10,
          }}
          placeholder={'Nhập Trans ID, số điện thoại hoặc email'}
        />
        <TouchableOpacity
          style={{
            flex: 1,
            marginLeft: 5,
            padding: 10,
            borderRadius: 5,
            borderColor: 'black',
            borderWidth: 1,
            justifyContent: 'center',
            alignSelf: 'center',
          }}>
          <Text>Tìm kiếm</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
export default AddContact;

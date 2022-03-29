import { View, 
    Text,
    StyleSheet,
    TextInput,
TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

function SignInScreen ({navigation}){
  return (
    <SafeAreaView style={{ margin: 10, alignContent: 'center', maxHeight: 300 }}>
       <View >
        <Text style={{
        fontSize: 35,
        fontWeight: '700',
        color: '#09bcc8'
      }}
      >Đăng ký</Text>
      <Text style={{
        fontSize: 18,
        color: 'gray',
        marginTop: 10
      }}
      >Hãy nhập thông tin của bạn để đăng ký
      </Text>
      <Text style={styles.text}>Tên người dùng</Text>
      <TextInput style={{
        height: 40,
        marginTop: 10,
        borderWidth: 1,
        maxWidth: 360,
        padding: 10,
      }}
        placeholder="Họ và tên người dùng" />
      <Text style={styles.text}>Tên đăng nhập</Text>
      <TextInput style={{
        height: 40,
        marginTop: 10,
        borderWidth: 1,
        maxWidth: 360,
        padding: 10,
      }}
        placeholder="Số di động, email hoặc tên đăng nhập" />
      <Text style={styles.text}>Mật khẩu</Text>
      <TextInput 
      secureTextEntry={true}
      style={{
        height: 40,
        marginTop: 10,
        borderWidth: 1,
        marginBottom: 10,
        maxWidth: 360,
        padding: 10,
        
      }}
        placeholder="Mật khẩu" />
        <TouchableOpacity
        style={{
          borderRadius: 10,
          height: 40,
          maxWidth: 360,
          backgroundColor: '#65c1b6',
          marginTop: 20,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center'
        }}
        onPress={() => navigation.navigate("Login")}>
        <Text
          style={{
            color: '#FFF',
            fontSize: 24,
            alignSelf: 'center'
          }}>Đăng ký</Text>
      </TouchableOpacity>
      </View>
      <View style={{ alignItems: 'center',marginTop:30 }}>
        <Text>Copyright @ 2022 by Namviet Telecom</Text>
      </View>
    </SafeAreaView>
    
  )
}
const styles = StyleSheet.create({
    text: {
      fontSize: 17,
      fontWeight: '600',
      marginTop: 10
    },
    text2: {
      fontSize: 15,
      marginTop: 5,
      color: '#65c1b6'
    }
  })
export default SignInScreen
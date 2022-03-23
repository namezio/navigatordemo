import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native'
import React from 'react'


const ForgetPasswordScreen = ({navigation}) => {
    return (
        <SafeAreaView style={{ margin: 10 }}>
            <Text style={{
                fontSize: 35,
                fontWeight: '700',
                color: '#09bcc8'
            }}
            >Quên mật khẩu</Text>
            <Text style={{
                fontSize: 18,
                color: 'gray',
                marginTop: 10
            }}
            >Hãy lại nhập thông tin của bạn để tiến hành xác minh tài khoản
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
                placeholder="Số di động, email hoặc tên đăng nhập" />
                <Text style={styles.text}>Mật khẩu mới</Text>
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
                <Text style={styles.text}>Nhập lại mật khẩu mới</Text>
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
                    }}>Xác Thực Tài Khoản</Text>
            </TouchableOpacity>
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
export default ForgetPasswordScreen
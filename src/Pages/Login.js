/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { Alert, Button, Image, Modal, Pressable, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({ navigation }) => {

    const [idWarning, setIdWarning] = useState('');
    const [numberWarning, setNumberWarning] = useState('');
    const [userId, setUserId] = useState('');
    const [userNumber, setUserNumber] = useState('');





    const onChangeUserId = (val) => {

        if (val.length === 0) {
            setIdWarning('Please enter your user id');
            setUserId('');
        }
        else if ((val.length > 0 && val.length < 9)) {
            setIdWarning('Use name at least 9 characters long');
            setUserId('');
        }
        else {
            setIdWarning('');
            setUserId(val);
        }
    };

    const onChangePhoneNumber = (val) => {
        // Phone Number validation
        if (val.length === 0) {
            setNumberWarning('Please enter your phone number');
            setUserNumber('');
        }
        else if ((val.startsWith('01') !== true)) {
            setNumberWarning('Invalid phone number');
            setUserNumber('');
        }
        else if ((val.length > 0 && val.length < 11) || (val.length > 11)) {
            setNumberWarning('Phone number must be 11 characters long');
            setUserNumber('');
        }
        else {
            setNumberWarning('');
            setUserNumber(val);
        }
    };



    const onPressFunction = async () => {
        if ((userId.length == 0 || userId.length < 9) && (userNumber.length == 0 || userNumber.length !== 11)) {
            Alert.alert(
                "Failed!",
                "Please provide your exact login information",
                [
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                ]
            );
        } else {
            try {
                let user = {
                    userId: userId,
                    userNumber: userNumber
                }
                await AsyncStorage.setItem("UserInfo", JSON.stringify(user));
                navigation.navigate("Profile");

            } catch (error) {
                console.log(error);
            }
            // Alert.alert(
            //     "Success!",
            //     "Congratulations, User logged in successfully",
            //     [
            //         { text: "OK", onPress: () => console.log("OK Pressed") }
            //     ]
            // );
        }

    };



    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ textAlign: 'center', color: '#000', fontSize: 20 }}>Please Login</Text>
            <View style={{
                paddingHorizontal: 15, marginVertical: 20, width: '100%', maxHeight: 250,
            }}>

                {/* input box */}
                <View style={{
                    backgroundColor: '#fff', paddingHorizontal: 15, paddingVertical: 15, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 3,
                    },
                    shadowOpacity: 0.27,
                    shadowRadius: 10,
                    elevation: 6,
                }}>
                    <View style={{ width: '100%' }}>
                        <TextInput

                            onChangeText={(value) => onChangeUserId(value)}
                            placeholder='User name' placeholderTextColor="#000"
                            style={{ width: '100%', borderRadius: 7, color: '#000', marginVertical: 10, backgroundColor: '#ECEDF4', paddingHorizontal: 5 }} />
                        {idWarning ?
                            <Text style={{ color: 'red', textAlign: 'left', fontSize: 12 }}>{idWarning}</Text> : null
                        }
                    </View>

                    <View style={{ width: '100%' }}>
                        <TextInput
                            onChangeText={(value) => onChangePhoneNumber(value)}
                            placeholder='Phone number' keyboardType='numeric' placeholderTextColor="#000"
                            style={{ width: '100%', borderRadius: 7, color: '#000', marginVertical: 10, backgroundColor: '#ECEDF4', paddingHorizontal: 5 }} />
                        {numberWarning ?
                            <Text style={{ color: 'red', textAlign: 'left', fontSize: 12 }}>{numberWarning}</Text> : null
                        }
                    </View>
                </View>


                {/* button */}
                <View style={{ alignItems: 'center', marginTop: 15 }}>
                    <Pressable
                        onPress={onPressFunction}
                    >
                        <LinearGradient colors={['#353482', '#204F98', '#007AB6']} style={styles.linearGradient}>
                            <Text style={{ color: '#ffffff', fontSize: 20, paddingVertical: 7 }}>
                                Login
                            </Text>
                        </LinearGradient>
                    </Pressable>
                </View>

            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    input_container: {
        // borderWidth: 1,
        // borderRadius: 5,
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 10,
        paddingRight: 10,

        // width: 330,
        // height: 180,
        // alignItems: 'center',
        // justifyContent: 'center',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },

    input: {
        width: 265,
        borderRadius: 5,
        fontSize: 17,
        color: '#000000',
        margin: 6,
        backgroundColor: '#F8FAFB'
    },
    button: {
        backgroundColor: 'goldenrod',
        width: 200,
        marginTop: 10,
        borderRadius: 5,
        alignItems: 'center'
    },
    modal_center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00000099',

    },
    warning_modal: {
        height: 300,
        width: 300,
        backgroundColor: '#999',
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 10,
    },
    warning_title: {
        backgroundColor: '#ff0',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    warning_body: {
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },
    warning_close: {
        backgroundColor: '#00ffff',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    image: {
        width: 100,
        height: 100,
        margin: 10,
    },

    linearGradient: {
        width: 220,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
        alignItems: 'center'
    },
    login_button: {
        marginTop: 20,
    },

});
export default Login;

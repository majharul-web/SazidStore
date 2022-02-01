import React, { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LinearGradient from 'react-native-linear-gradient';
const Profile = ({ navigation }) => {

    const [userData, setUserData] = useState({});

    useEffect(() => {
        getData()
    }, []);

    // get data
    const getData = async () => {
        try {
            await AsyncStorage.getItem("UserInfo")
                .then(value => {
                    if (value != null) {
                        const Info = JSON.parse(value);
                        console.log(Info);
                        setUserData(Info);
                    }
                    else {
                        alert('data not found')
                    }
                })

        } catch (error) {
            console.log(error);
        }
    }



    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: '#000', textAlign: 'center', fontSize: 20 }}>User Name: {userData.userId}</Text>
            <Text style={{ color: '#000', textAlign: 'center', fontSize: 20 }}>User Number: {userData.userNumber}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    linearGradient: {
        width: 220,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
        alignItems: 'center'
    },
});


export default Profile;
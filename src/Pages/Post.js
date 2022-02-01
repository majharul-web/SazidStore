import React, { useEffect } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PushNotification from 'react-native-push-notification';

const Post = () => {

    useEffect(() => {
        createChannels()
    }, []);

    const onPressFunction = () => {
        PushNotification.cancelAllLocalNotifications();

        PushNotification.localNotification({
            channelId: "channel-id",
            title: "Hello Mr MAJHARUL",
            message: "PLease First post ",
            bigText: "You won't have any post forever,You won't have any post forever,You won't have any post forever,You won't have any post forever",
            color: 'red'
        })
    }

    const createChannels = () => {
        PushNotification.createChannel({
            channelId: "channel-id",
            channelName: "My channel",
        })

    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {/* button */}
            <View style={{ alignItems: 'center', marginTop: 15 }}>
                <Pressable
                    onPress={onPressFunction}
                >
                    <LinearGradient colors={['#353482', '#204F98', '#007AB6']} style={styles.linearGradient}>
                        <Text style={{ color: '#ffffff', fontSize: 20, paddingVertical: 7 }}>
                            Push
                        </Text>
                    </LinearGradient>
                </Pressable>
            </View>
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
export default Post;
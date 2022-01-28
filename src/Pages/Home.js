
import React, { useEffect, useState } from 'react';
import { FlatList, Image, ImageBackground, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';



const Home = () => {

    return (
        <View style={styles.body}>
            <Text style={{ color: 'black' }}>Home</Text>
        </View >
    );
};

const styles = StyleSheet.create({
    body: {
        flex:1,
        backgroundColor: '#EBEAEF',
    }

});


export default Home;
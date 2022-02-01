import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Item = ({ item }) => {
    const { strCategory, strCategoryThumb, strCategoryDescription, price } = item;
    return (
        <View style={{

            flex: 0.5,
            borderRadius: 20,
            backgroundColor: '#FFFFFF',
            minHeight: 150,
            padding: 20
        }}>
            <Image
                resizeMode='contain'
                style={{ width: 100, height: 100 }}
                source={require('../../images/sepnil.jpg')}
            // source={{
            //     uri: 'https://www.bdshop.com/pub/media/catalog/product/s/e/sepnil-hand-sanitizer-100ml-or-200mlnqcR.jpg',
            // }}
            />

            <Text style={{ color: 'black', fontSize: 17, fontWeight: 'bold' }}>{strCategory}</Text>
            <Text style={{ color: 'gray', fontSize: 16 }}>{strCategory}</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10, }}>
                <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>${price}</Text>
                <Pressable>
                    <Ionicons name="heart-circle" color={'black'} size={25} />
                </Pressable>
            </View>
        </View>
    );
};


export default Item;
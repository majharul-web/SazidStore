import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Item = ({ item }) => {
    const { strCategory, strCategoryThumb, strCategoryDescription } = item;
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
                source={{ uri: strCategoryThumb }}
            />
            <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>{strCategory}</Text>
            <Text style={{ color: 'gray', fontSize: 16 }}>{strCategory}</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10, }}>
                <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>$ 14</Text>
                <Pressable>
                    <MaterialIcons name="favorite" color={'black'} size={20} />
                </Pressable>
            </View>
        </View>
    );
};

export default Item;
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { FlatList, Image, ImageBackground, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Cart = () => {
    return (
        <View style={styles.body}>


            {/* top */}
            <View style={{ flex: .5, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Pressable>
                    <MaterialCommunityIcons name="chevron-left" color={'black'} size={40} />
                </Pressable>
                <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>Shopping Bag</Text>
                <Pressable
                    style={{
                        backgroundColor: '#FFFFFF',
                        borderRadius: 10,
                        paddingHorizontal: 10,
                        paddingVertical: 8
                    }}
                >
                    <MaterialCommunityIcons name="shopping" color={'black'} size={20} />
                </Pressable>
            </View>


            {/* middle */}
            <View
                style={{ flex: 3, flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', marginTop: 5 }}>

                {/* first item */}
                <View style={{ flex: .30, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 5 }}>
                    <View style={{ width: '25%', height: '100%' }}>
                        <Image
                            resizeMode='contain'
                            style={styles.tinyLogo}
                            source={require('../../images/sepnil.jpg')}
                        />
                    </View>
                    <View style={{ width: '41%', height: '100%', marginHorizontal: '2%' }}>
                        <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 16 }}>Sepnil Sanitizer</Text>
                        <Text style={{ color: 'gray', fontSize: 14 }}>Size:100 ml</Text>
                        <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 16 }}>$100</Text>
                    </View>
                    <View style={{ width: '30%', height: '100%', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <View style={{ alignItems: 'flex-end' }}>
                            <Pressable>
                                <MaterialCommunityIcons name="close" color={'black'} size={16} />
                            </Pressable>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Pressable>
                                <AntDesign name="pluscircle" color={'black'} size={20} />
                            </Pressable>
                            <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 16 }}>01</Text>
                            <Pressable>
                                <AntDesign name="minuscircle" color={'black'} size={20} />
                            </Pressable>
                        </View>
                    </View>
                </View>

                {/* 2dn item */}
                <View style={{ flex: .30, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 5 }}>
                    <View style={{ width: '25%', height: '100%' }}>
                        <Image
                            resizeMode='contain'
                            style={styles.tinyLogo}
                            source={require('../../images/sepnil.jpg')}
                        />
                    </View>
                    <View style={{ width: '41%', height: '100%', marginHorizontal: '2%' }}>
                        <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 16 }}>Sepnil Sanitizer</Text>
                        <Text style={{ color: 'gray', fontSize: 14 }}>Size:100 ml</Text>
                        <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 16 }}>$100</Text>
                    </View>
                    <View style={{ width: '30%', height: '100%', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <View style={{ alignItems: 'flex-end' }}>
                            <Pressable>
                                <MaterialCommunityIcons name="close" color={'black'} size={16} />
                            </Pressable>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Pressable>
                                <AntDesign name="pluscircle" color={'black'} size={20} />
                            </Pressable>
                            <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 16 }}>01</Text>
                            <Pressable>
                                <AntDesign name="minuscircle" color={'black'} size={20} />
                            </Pressable>
                        </View>
                    </View>
                </View>

                {/* 3rd item */}
                <View style={{ flex: .30, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 5 }}>
                    <View style={{ width: '25%', height: '100%' }}>
                        <Image
                            resizeMode='contain'
                            style={styles.tinyLogo}
                            source={require('../../images/sepnil.jpg')}
                        />
                    </View>
                    <View style={{ width: '41%', height: '100%', marginHorizontal: '2%' }}>
                        <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 16 }}>Sepnil Sanitizer</Text>
                        <Text style={{ color: 'gray', fontSize: 14 }}>Size:100 ml</Text>
                        <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 16 }}>$100</Text>
                    </View>
                    <View style={{ width: '30%', height: '100%', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <View style={{ alignItems: 'flex-end' }}>
                            <Pressable>
                                <MaterialCommunityIcons name="close" color={'black'} size={16} />
                            </Pressable>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Pressable>
                                <AntDesign name="pluscircle" color={'black'} size={20} />
                            </Pressable>
                            <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 16 }}>01</Text>
                            <Pressable>
                                <AntDesign name="minuscircle" color={'black'} size={20} />
                            </Pressable>
                        </View>
                    </View>
                </View>



            </View>

            {/* bottom */}
            <View style={{ flex: 4, }}>
                <View style={{ flex: .15, marginTop: 15 }}>
                    <View style={{ width: '100%', justifyContent: 'center', }}>
                        <TextInput
                            placeholder='Promo Code'
                            placeholderTextColor={'gray'}
                            style={{ backgroundColor: '#F9F9F9', height: '100%', borderRadius: 15, paddingHorizontal: 10, paddingVertical: 5, color: 'black' }}

                        >
                        </TextInput>
                        <Pressable
                            style={{ position: 'absolute', right: 15 }}
                        >
                            <Text
                                style={{ backgroundColor: '#000', color: '#ffffff', paddingVertical: 5, paddingHorizontal: 15, borderRadius: 10 }}
                            >Apply</Text>
                        </Pressable>
                    </View>
                </View>

                <View style={{ flex: .60, marginTop: 10 }}>
                    <View style={{ flex: .30, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 5, borderBottomWidth: 2, borderColor: '#ffffff' }}>
                        <View>
                            <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 16 }}>Subtotal</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 18 }}>$300</Text>
                            <Text style={{ color: 'gray', fontSize: 14, marginLeft: 5 }}>USD</Text>
                        </View>
                    </View>
                    <View style={{ flex: .30, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 5, borderBottomWidth: 2, borderColor: '#ffffff' }}>
                        <View>
                            <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 16 }}>Shipping</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 18 }}>$4.99</Text>
                            <Text style={{ color: 'gray', fontSize: 14, marginLeft: 5 }}>USD</Text>
                        </View>
                    </View>
                    <View style={{ flex: .30, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 5, borderBottomWidth: 2, borderColor: '#ffffff' }}>
                        <View>
                            <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 16 }}>Bag Total</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: '#000', fontSize: 12 }}>( 3 items )</Text>
                            <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 18, marginHorizontal: 5 }}>$304.99</Text>
                            <Text style={{ color: 'gray', fontSize: 14 }}>USD</Text>
                        </View>
                    </View>

                </View>

                <View style={{ flex: .20, marginTop: 10 }}>
                    <Pressable
                        style={{ backgroundColor: '#000', paddingVertical: 18, borderRadius: 50 }}
                    >
                        <Text style={{ color: '#ffffff', textAlign: 'center', fontSize: 16, fontWeight: 'bold' }}>Checkout</Text>
                    </Pressable>
                </View>
            </View >
        </View >
    );
};

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#EBEAEF',
        paddingHorizontal: 20
    },
    tinyLogo: {
        height: '100%',
        width: '100%',
        borderRadius: 50
    },

});

export default Cart;
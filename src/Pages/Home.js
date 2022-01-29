import React, { useEffect, useState } from 'react';
import { FlatList, Image, ImageBackground, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { FlatGrid } from 'react-native-super-grid';
import Item from '../Components/Item';




const Home = () => {
    const categories = [
        {
            idCategory: 1,
            strCategory: "Sepnil Sanitizer-100ML",
            strCategoryThumb: "../../images/sepnil.jpg",
            strCategoryDescription: "",
            price: 100
        },
        {
            idCategory: 2,
            strCategory: "Sepnil Sanitizer-150ML",
            strCategoryThumb: "../../images/sepnil.jpg",
            strCategoryDescription: "",
            price: 200
        },
        {
            idCategory: 3,
            strCategory: "Sepnil Sanitizer-50ML",
            strCategoryThumb: "../../images/sepnil.jpg",
            strCategoryDescription: "",
            price: 70
        },
        {
            idCategory: 4,
            strCategory: "Sepnil Sanitizer-200ML",
            strCategoryThumb: "../../images/sepnil.jpg",
            strCategoryDescription: "",
            price: 200
        },
        {
            idCategory: 5,
            strCategory: "Sepnil Sanitizer-500ML",
            strCategoryThumb: "../../images/sepnil.jpg",
            strCategoryDescription: "",
            price: 500
        },
        {
            idCategory: 6,
            strCategory: "Sepnil Sanitizer-1000ML",
            strCategoryThumb: "../../images/sepnil.jpg",
            strCategoryDescription: "",
            price: 1000
        },
        {
            idCategory: 7,
            strCategory: "Sepnil Sanitizer-600ML",
            strCategoryThumb: "../../images/sepnil.jpg",
            strCategoryDescription: "",
            price: 700
        },
        {
            idCategory: 8,
            strCategory: "Sepnil Sanitizer-400ML",
            strCategoryThumb: "../../images/sepnil.jpg",
            strCategoryDescription: "",
            price: 145
        },
    ]


    // const [meals, setMeals] = useState([]);

    // useEffect(() => {
    //     fetch(`https://jsonplaceholder.typicode.com/photos`)
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    //         .catch((error) => {
    //             console.error(error);
    //         });
    // }, []);


    return (
        <View style={styles.body}>

            <View style={{ flex: 1 }}>
                <View style={{ flex: .5, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Pressable>
                        <MaterialCommunityIcons name="chevron-left" color={'black'} size={40} />
                    </Pressable>
                    <Text style={{ color: 'black', fontSize: 20 }}>Search Product</Text>
                    <Image
                        style={styles.tinyLogo}
                        source={require('../../images/tiny.jpg')}
                    />
                </View>

                <View style={{ flex: .5, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

                    <View style={{ width: '77%', justifyContent: 'center' }}>
                        <TextInput
                            style={{ backgroundColor: '#F9F9F9', height: '60%', borderRadius: 15, padding: 5, color: 'black' }}
                        >
                        </TextInput>
                        <MaterialIcons style={{ position: 'absolute', right: 15 }} name="search" color={'black'} size={20} />
                    </View>

                    <Pressable
                        style={{ backgroundColor: '#F9F9F9', width: '20%', height: '60%', borderRadius: 15, justifyContent: 'center', alignItems: 'center' }}
                    >
                        <MaterialCommunityIcons style={{ marginHorizontal: 10 }} name="swap-horizontal" color={'black'} size={20} />
                    </Pressable>

                </View>

            </View>

            <View style={{ flex: 3 }}>
                <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold', marginVertical: 5, textAlign: 'center' }}>Found {categories.length} Results</Text>
                <FlatGrid
                    keyExtractor={item => item.idCategory}
                    data={categories}
                    style={{ flex: 1 }}
                    spacing={15}
                    renderItem={({ item }) => (
                        <Item item={item}></Item>
                    )}
                />
            </View>
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
        height: 40,
        width: 40,
        borderRadius: 10
    },
    input: {
        backgroundColor: '#F9F9F9'

    }

});


export default Home;
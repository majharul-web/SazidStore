import React, { useEffect, useState } from 'react';
import { FlatList, Image, ImageBackground, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { FlatGrid } from 'react-native-super-grid';
import Item from '../Components/Item';



const Home = () => {

    const [meals, setMeals] = useState([]);
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then(res => res.json())
            .then(data => setMeals(data.categories));
    }, []);

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
                <Text style={{color:'black',fontSize:20,fontWeight:'bold',marginVertical:5,textAlign:'center'}}>Found {meals.length} Results</Text>
                <FlatGrid
                    keyExtractor={item => item.idCategory}
                    data={meals}
                    style={{ flex: 1 }}
                    spacing={20}
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
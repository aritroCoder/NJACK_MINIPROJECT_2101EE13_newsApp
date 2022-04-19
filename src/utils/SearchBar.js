import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Pressable } from 'react-native';
import * as RootNavigation from './RootNavigation.js';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const SearchBar = () => {
    const [search, setSearch] = useState('');

    const searchSubmit = () => {
        // console.log("Searched!");
        search.length>0 && RootNavigation.navigate('Search', { keyword: search });
    }
    return (
        <View style={styles.header}>
            <Text style={styles.title}>TOP HEADLINES</Text>
            <TextInput style={styles.input} value={search} onChangeText={setSearch} placeholder="Search News" onSubmitEditing={() => searchSubmit()} />
            <Pressable style={styles.btn} android_ripple={{color: '#75580c'}} onPress={() => searchSubmit()}><FontAwesomeIcon icon={faMagnifyingGlass} /></Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        backgroundColor: '#F8B400',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#000',
    },
    input: {
        // height: 30,
        margin: 12,
        borderWidth: 1,
        paddingTop: 3,
        paddingBottom: 3,
        paddingRight: 10,
        paddingLeft: 10,
        fontSize: 20,
        borderRadius: 5
    },
    btn:{
        padding: 10,
    }
})

export default SearchBar
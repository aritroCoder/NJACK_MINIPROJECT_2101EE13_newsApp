import React from 'react';
import { StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import General from './General';
import Business from './Business';
import Entertainment from './Entertainment';
import Health from './Health';
import Science from './Science';
import Sports from './Sports';
import Tech from './Tech';

const Tab = createMaterialTopTabNavigator();

const Home = ({ navigation }) => {

    return (
        <Tab.Navigator screenOptions={{ tabBarScrollEnabled: true }}>
            <Tab.Screen name="General" component={General} />
            <Tab.Screen name="Business" component={Business} />
            <Tab.Screen name="Entertainment" component={Entertainment} />
            <Tab.Screen name="Health" component={Health} />
            <Tab.Screen name="Science" component={Science} />
            <Tab.Screen name="Sports" component={Sports} />
            <Tab.Screen name="Tech" component={Tech} />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#FAF5E4',
    },
    title: {
        // backgroundColor: '#FF6363',
        fontSize: 30,
        textAlign: 'center',
        margin: 10,
        padding: 10,
        borderRadius: 5,
        marginBottom: 0,
        paddingBottom: 0,
        color: '#000'
    }
})

export default Home
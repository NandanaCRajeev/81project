import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TabNavigator from './TabNavigator';
import Profile from '../screens/Profile';
 
const Draw = createDrawerNavigator();

const DrawerNavigator = () => {
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={TabNavigator}/>
            <Drawer.Screen name="Profile" component={Profile}/>
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;


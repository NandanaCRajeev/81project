import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CreateBottomNavigator from 'react-nativigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feed from '../Feed';
import CreatePost from '../CreatePost';

const Tab= CreateBottomNavigator();

const BottomTabNavigator = () =>{
    return(
        <Tab.BottomTabNavigator
            screenOptions={({route}) => ({
                tabBarIcon:({focused,color,size}) =>{
                    let iconName;
                    if(route.name==='feed'){
                        iconName=focused
                        ?'book'
                        :'book-outline';
                    }else if (route.name==='CreatePost'){
                        iconName=focused?'create':'create-outline';             
                    }
                    return<Ionicons name={iconName}size={size}color={color}/>;
                }
            
            })}
            tabBarOptions={{
                activeTintColor:'tomato',
                inactiveTintColor:'gray',
            }}
            >
                <Tab.Screen name="feed" component={feed}/>
                <Tab.Screen name="CreatePost" component={CreatePost}/>
                </Tab.BottomTabNavigator>
    );
}
        export default BottomTabNavigator




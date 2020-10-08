import React from 'react';
import {Text, StyleSheet, Button, View, Image, TouchableOpacity} from 'react-native';

const HomeScreen = (props)=>{
    console.log(props);
    return (
        <View>
        
        <Image
            source={require('./../../assets/IUT_logo.png')}
        />

        <Text style={{fontSize:20 , color: "blue"}}>Department of CSE </Text>
        <Text style={{fontSize:20 , color: "blue"}}>Program: SWE </Text>
        <TouchableOpacity
        onPress= {function(){
            console.log("Profile Button Pressed");

        }}
        >
        <Button
        title='Profile'
        onPress={function (){
                props.navigation.navigate("Profile");

            }}
        />
        </TouchableOpacity>
        <Button
        title='Semester wise Course List'
        onPress={function (){
                props.navigation.navigate("Semester");

            }}
        />
        <Button
        title='Faculty List'
        onPress={function (){
                props.navigation.navigate("Faculties");

            }}
        />



        </View>
    );
}

export default HomeScreen;

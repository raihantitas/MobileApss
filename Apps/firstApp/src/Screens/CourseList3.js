import React from 'react';
import {Text, StyleSheet,FlatList, View} from 'react-native';

const CourseList3 = () =>{
    const list = [{name: "1. SWE 4303", key: '1'},
    {name: "2. SWE 4313", key: '2'},
    {name: "3. SWE 4307", key: '3'},
    {name: "4. SWE 4301", key: '4'},
    {name: "5. CSE 4323", key: '5'},
    {name: "6. CSE 4309", key: '6'}]
    return(
        <View>
            <Text style={{fontSize:30 , color: "blue"}}>Third Semester </Text>
            <FlatList
            data={list}
            renderItem={function({item}){
                return(
                <Text style={{fontSize:20, color: "black"}}>{item.name}</Text>
                );
            }}
            />
        </View>
    )
}

export default CourseList3;
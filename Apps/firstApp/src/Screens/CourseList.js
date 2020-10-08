import React from 'react';
import {Text, StyleSheet,FlatList, View} from 'react-native';

const CourseList1 = () =>{
    const list = [{name: "1. SWE 4103", key: '1'},
    {name: "2. SWE 4113", key: '2'},
    {name: "3. SWE 4107", key: '3'},
    {name: "4. SWE 4101", key: '4'},
    {name: "5. CSE 4123", key: '5'},
    {name: "6. CSE 4109", key: '6'}]
    return(
        <View>
            <Text style={{fontSize:30 , color: "blue"}}>First Semester </Text>
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

export default CourseList1;
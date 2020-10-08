import React from 'react';
import {Text, StyleSheet, Button, View} from 'react-native';

const SemesterScreen = (props)=>{
    console.log(props);
    return (
        <View>
        <Text style ={{fontSize: 30, color: "red"}}>Semesters</Text>

        <Button
        title='1st Semester'
        onPress={function (){
                props.navigation.navigate("CourseList1");

            }}
        />
        <Button
        title='2nd Semester'
        onPress={function (){
                props.navigation.navigate("CourseList2");

            }}
        />
         <Button
        title='3rd Semester'
        onPress={function (){
                props.navigation.navigate("CourseList3");

            }}
        />
        
        </View>
    );
}

 export default SemesterScreen;

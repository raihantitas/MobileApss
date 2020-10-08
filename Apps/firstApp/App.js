import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Homescreen from './src/Screens/HomeScreen';
import SemesterScreen from './src/Screens/Semester';
import CourseList1 from './src/Screens/CourseList';
import CourseList2 from './src/Screens/CourseList2';
import CourseList3 from './src/Screens/CourseList3';
import FacultyList from './src/Screens/FacultyList';
import Profile from './src/Screens/Profile';

const stack= createStackNavigator();

function App(){
  return(
    <NavigationContainer>
      <stack.Navigator initialRouteName="Home">
        <stack.Screen name= "Home" component= {Homescreen}/>
        
        <stack.Screen name= "Semester" component= {SemesterScreen}/>
        
        <stack.Screen name= "CourseList1" component= {CourseList1}/>
    
        <stack.Screen name= "CourseList2" component= {CourseList2}/>

        <stack.Screen name= "CourseList3" component= {CourseList3}/>

        <stack.Screen name= "Faculties" component= {FacultyList}/>

        <stack.Screen name= "Profile" component= {Profile}/>
        
      </stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

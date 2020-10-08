import React from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';

const Profile = () =>{
    return(
        <View>
            <Image
            source = {require('./../../assets/Profile_pic.jpg')}
            />
            <Text style={{fontSize:15 , color: "black"}}>Name: Md Abu Raihan Titas  </Text>
            <Text style={{fontSize:15 , color: "black"}}>Student Id: 170042026  </Text>
            <Text style={{fontSize:15 , color: "black"}}>Room no: none  </Text>
            <Text style={{fontSize:15 , color: "black"}}>E-mail: aburaihan@iut-dhaka.edu  </Text>
        </View>
    )
}

export default Profile;
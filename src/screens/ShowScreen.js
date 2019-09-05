import React,{useContext} from 'react';
import {Text,View,StyleSheet} from 'react-native';
import {Context} from '../context/BlogContext';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Entypo} from '@expo/vector-icons';

const ShowScreen=({navigation})=>{
    const {state}=useContext(Context);

    const blogPost=state.find(
        blogPost=>blogPost.id === navigation.getParam('id')
    );

    return(
        <View>
            <Text>{blogPost.title}-{blogPost.id}</Text>
            <Text>{blogPost.content}</Text>

        </View>
    );
};

ShowScreen.navigationOptions=({navigation})=>{
    return{ 
        headerRight: <TouchableOpacity onPress={()=>navigation.navigate('Edit',{id:navigation.getParam('id')})}>
            <Entypo style={styles.icon} name="edit"/>
        </TouchableOpacity>
    };
};

const styles=StyleSheet.create({
    icon:{
        fontSize:30,
        marginRight:5

    }
});

export default ShowScreen;
import React, { useState } from 'react'
import { Button, Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from './AddToDo.Styles';

const AddToDo = ({text, setText, addTodos}) =>{

    const [changeButton, setChangeButton]=useState(false);

    const handleChange = (word) =>{
        setText(word);
        if(word !== ''){
            setChangeButton(true);
        }
        else{
            setChangeButton(false);
        }
    }

    return(
        <View style={styles.bottom_container}>
            <TextInput 
             placeholder='Yapılacakları giriniz...' 
             onChangeText={handleChange}
             value={text}
             placeholderTextColor='#7b7c7d'/>
           
            <TouchableOpacity
            style={changeButton ? styles.buttonactive : styles.button}
            disabled={!changeButton}
            onPress={addTodos}
            >
                <Text style={styles.button_text}>KAYDET</Text>
            </TouchableOpacity>
           
        </View>
    )
}

export default AddToDo;
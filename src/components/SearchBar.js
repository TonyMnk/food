import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return(
        <View style = {styles.backgroundStyle}>
            <EvilIcons name="search" style = {styles.iconStyle} />
            <TextInput 
                autoCapitalize = 'none'
                autoCorrect = {false}
                style ={styles.inputStyle} 
                placeholder ="Search"
                value = {term}
                onChangeText = {onTermChange}
                onEndEditing= {onTermSubmit}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 10,
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 10,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginBottom: 10,
    },
    inputStyle: {
        flex: 1,
        fontSize: 18,
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: "center",
        marginHorizontal: 10,
    },

});

export default SearchBar;
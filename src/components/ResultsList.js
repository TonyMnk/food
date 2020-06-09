import React from 'react';
import { View, Text, FlatList, StyleSheet} from 'react-native';

const ResultList = ({results, title}) => {
    return (
        <View>
            <Text style = {styles.title}> {title} </Text>
            <FlatList 
                horizontal
                data = { results }
                keyExtractor = { (result) => result.id }
                renderItem ={ ({item}) => {
                    return <Text>{item.name}</Text>
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    title:{
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default ResultList;
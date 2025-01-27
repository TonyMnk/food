import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import { withNavigation } from 'react-navigation';
import ResultsDetail from './ResultsDetail';

const ResultList = ({results, title, navigation}) => {
    if (!results.length) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Text style = {styles.title}> {title} </Text>
            <FlatList 
                horizontal
                showsHorizontalScrollIndicator = {false}
                data = { results }
                keyExtractor = { (result) => result.id }
                renderItem ={ ({item}) => {
                    return ( 
                        <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', {id: item.id})}>
                            <ResultsDetail result={item} />
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    title:{
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom:5,
    },
    container: {
        marginBottom: 10,
    },
});

export default withNavigation(ResultList);
import React, {useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultList from '../components/ResultsList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessgae] = useResults()

    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        });
    };

    return(
        <View style = { styles.background}> 
            <SearchBar 
                term={term} 
                onTermChange={setTerm} 
                onTermSubmit = {() => searchApi(term)}
            />
            {errorMessgae ? <Text> {errorMessgae} </Text> : null}
            <Text> We have found {results.length} resutls </Text>
            <ResultList results = { filterResultsByPrice('$')} title="Cost Effective" />
            <ResultList results = { filterResultsByPrice('$$')} title="Bit Priciers" />
            <ResultList results = { filterResultsByPrice('$$$')} title="Big Spender" />
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'white',
    }
});

export default SearchScreen;
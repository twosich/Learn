import { Manga } from "mangadex-full-api";
import { Text, View, TextInput, FlatList, Button, ActivityIndicator } from "react-native";
import { useState } from "react";

function SearchBar(){ 

    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);


const SearchManga = async () => {
    setLoading = (true)
    try {
      const mangas = await Manga.search( {title: "Vagabond" });
      setResults(mangas.map((manga) => ({id: manga.id, title: manga.title})))
    } 
    catch (error){
        console.error("Failed")
    }
    finally {
        setLoading(false);
    }
}

    return(
        <View>
            <TextInput 
                placeholder="Search"
                value="Vagabond"
            />
            <Button title="Search" onPress={SearchManga} />
        <FlatList
            data={results}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => 
                <Text>{item.title}</Text>
            }
        />

        </View>  
    );
}

export default SearchBar;
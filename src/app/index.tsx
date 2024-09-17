import { View, Text } from "react-native";
import { styles } from "./style";
import MovieList from "../components/MovieList";

export default function App(){

    return(
        <View style={styles.conteiner}>
            <View style={styles.header}>
                <Text style={styles.title}>
                    Filmes
                </Text>
            </View>
            <MovieList/>
        </View>
    )
}
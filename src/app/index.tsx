import { View, Text } from "react-native";
import { styles } from "./style";
import axios from "axios";
import { useState } from "react";
import MovieList from "../components/MovieList";

export default function App(){

    return(
        <View style={styles.conteiner}>
            <Text>
                App aqui
            </Text>
            <MovieList/>
        </View>
    )
}
import axios from "axios"
import { useState } from "react"
import { View, Text, ScrollView, Image } from "react-native"

import { styles } from "./style"

export interface MovieType {
    title: string,
    poster_path: string,
    id: number
    // overview: string,
    // vote_average: string
}

export default function MovieList(){
const [movies, setMovies] = useState<MovieType[]>([])

const getMovies = () => {

    axios({
        method: 'get',
        url: 'https://api.themoviedb.org/3/discover/movie',
        params: {
            api_key: '9bb4293c6d52f964c08d63dba286ff2d',
            language: 'pt-BR'
        }
    }).then(response => {
        setMovies(response.data.results)
        // console.log(movies)
    })
}

getMovies();

return(
    <View>
        <ScrollView>
            <View>
                {
                movies.map((movie)=> (
                    <View key={movie.id}>
                    <Text style={styles.conteiner}>{movie.title}</Text>
                    </View>
                ))
                }
            </View>
        </ScrollView>
    </View>
)
}
import axios from "axios"
import { useState } from "react"
import { View, Text, ScrollView, Image } from "react-native"

import { styles } from "./style"
import { Link } from "expo-router"

export interface MovieType {
    title: string,
    poster_path: string,
    id: number
    image: string
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
            
                <View style={styles.conteiner}>
                    {
                    movies.map((movie)=> (
                        <Link href={`/filme/${movie.id}`}>
                       
                        <View key={movie.id}>
                        <Image style={{width: 100, height: 150}} source={{uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`}} />
                        <Text style={styles.conteiner}>{`${movie.title.substring(0,10)}...`}</Text>
                        </View>
                        </Link>
                    ))
                    }
                </View>
        </ScrollView>
    </View>
)
}
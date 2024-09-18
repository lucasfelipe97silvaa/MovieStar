import { useState, useEffect} from "react"
import { useNavigation } from "expo-router"
import { Link, useLocalSearchParams } from "expo-router"

import { View, Text, Button, Image,ScrollView} from "react-native"
import { ButtonProps } from "react-native"
import { styles } from "./style"

import  axios from "axios"

export interface Filmetype {
    title: string,
    poster_path: string,
    // id: number
    overview: string,
    vote_average: string,
    // genres: string
}

export default function Filme(){
    const [filme, setFilme] = useState<Filmetype[]>([])
    
    const navigator = useNavigation()
    const { id } = useLocalSearchParams()  


const getId = () => {

    axios({
        method: 'get',
        url: `https://api.themoviedb.org/3/movie/${id}`,
        params: {
            api_key: '9bb4293c6d52f964c08d63dba286ff2d',
            language: 'pt-BR'
        }
    }).then(response => {
        setFilme(response.data)
        // console.log(filme)
    })
}

useEffect(() => {
    getId()
},[filme] )
    function Voltar(){
       navigator.goBack() 
    }
    

    // console.log(id)

    return(
        <View style={styles.container}>
            <Image style={{width: 350, height: 500}} source={{uri: `https://image.tmdb.org/t/p/w500${filme.poster_path}`}} />
            <ScrollView >
                <View>
                    <Text  style={styles.title}>Título: {filme.title}</Text>
                </View>

                <View style={styles.box}>
                    <View>
                        <Text style={styles.description}>Sinopse: {filme.overview}</Text>
                        <Text style={styles.description}>Data de lançamento: {filme.release_date}</Text>
                        {/* <Text>Gêneros: {filme.genres.map(genero => genero.name).join(', ')}</Text> */}
                    </View>
                    <View>
                        <Text style={styles.description}>Nota média: {filme.vote_average}</Text>
                    </View>
                </View>
                <Button title={'voltar'} onPress={Voltar}></Button>    
            </ScrollView>
        </View>
    )
}
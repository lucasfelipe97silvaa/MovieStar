import { useState, useEffect} from "react"
import  axios from "axios"

import { Link, useLocalSearchParams } from "expo-router"
import { View, Text, Button} from "react-native"
import { ButtonProps } from "react-native"
import { useNavigation } from "expo-router"

export default function Filme(){
    const [filme, setFilme] = useState([])
    
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
        console.log(filme)
    })
}

useEffect(() => {
    getId()
}, [id])
    function Voltar(){
       navigator.goBack() 
    }
    

    console.log(id)

    return(
        <View>
            <Text>
                Vôce caiu aqui nessa pagina
            </Text>
            <View>

            </View>
            <Button title={'voltar'} onPress={Voltar}></Button>
            
        </View>
    )
}
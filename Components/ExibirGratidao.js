import { Button, StyleSheet, Text, View } from 'react-native';
import {useNavigation } from '@react-navigation/native';
import { useEffect, useState  } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const ExibirGratidaoScreen = () => {
    const [gratidoes, setGratidoes] = useState([]);  
    let [frase, setFrase] = useState('');
    let [hasLoaded, setHasLoaded] = useState(false);

    async function loadData(){
        const data = await AsyncStorage.getItem('gratidoes');
        
        if(data !== null){
            setGratidoes(JSON.parse(data));
            gratidaoAleatoria();
        }
        if(gratidoes.length !== 0){
            setHasLoaded(true);
        }
    }
    //Carrega várias vezes até garantir que o objeto está preenchido
    useEffect(() => {
        if(!hasLoaded){
            loadData();
        }
    }, [gratidoes]);

    async function gratidaoAleatoria() {        
        if(gratidoes.length !== 0){            
            var index = Math.floor(Math.random() * gratidoes.length);
            var gratidao = gratidoes[index];
            if(gratidao !== null){
                setFrase(gratidao.descricao);
            }
        }
    }

    const navigation = useNavigation();
      return (
        <View>
            <Button onPress={() => navigation.navigate('GratiPote')}  title='Home'/>
            <Button onPress={() => navigation.navigate('Listar Gratidão')}  title='Listar'/>
            <Text>{frase}</Text>
        </View>
      );
  }
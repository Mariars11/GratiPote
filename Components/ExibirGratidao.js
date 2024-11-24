import { Button, StyleSheet, Text, View } from 'react-native';
import {useNavigation } from '@react-navigation/native';
import { useEffect, useState  } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const ExibirGratidaoScreen = () => {
    const [gratidoes, setGratidoes] = useState([]);  
    let [gratidao, setGratidao] = useState([]);
    let [hasLoaded, setHasLoaded] = useState(false);

    async function loadData(){
        const data = await AsyncStorage.getItem('gratidoes');
        
        if(data !== null){
            setGratidoes(JSON.parse(data));
            gratidaoAleatoria();
        }
        if(gratidoes.length !== 0){
            console.log(gratidoes);
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
            var gratidaoSorteada = gratidoes[index];
            if(gratidaoSorteada !== null){
                setGratidao(gratidaoSorteada);
            }
        }
    }
    async function removeGratidao () {
        const index = gratidoes.findIndex(item => item.id === gratidao.id);
        gratidoes.splice(index, 1);
        await AsyncStorage.setItem('gratidoes', JSON.stringify(gratidoes));
        console.log(`Removido ${gratidao.descricao} no index ${index}`);
        navigation.navigate('GratiPote')
      }
    const navigation = useNavigation();
      return (
        <View>
            <Button onPress={() => navigation.navigate('GratiPote')}  title='Home'/>
            <Button color={'red'} onPress={() => removeGratidao()}  title='Excluir'/>

            <Text>{gratidao.descricao}</Text>
            <Button color={'green'} onPress={() => gratidaoAleatoria()}  title='Sortear'/>

        </View>
      );
  }
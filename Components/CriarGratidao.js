import { Button, StyleSheet, Text, View, TextInput } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect  } from 'react';

export const CreateGratidaoScreen = () => {
    const [input, setInput] = useState('');
    const [gratidoes, setGratidoes] = useState([]);  
    async function loadData(){
        const data = await AsyncStorage.getItem('gratidoes');
        if(data !== null){
            setGratidoes(JSON.parse(data));
        }
    }

    useEffect(() => {
        loadData();
      }, []);
      
    async function addGratidao(){
        const gratidao = {id: Date.now(), descricao: input};
        console.log(gratidoes);

        const updateGratidao = [...gratidoes, gratidao];
        setGratidoes(updateGratidao);
        await AsyncStorage.setItem('gratidoes', JSON.stringify(updateGratidao));
        setInput('');
    }

    const navigation = useNavigation();
      return (
        <View>
            <Text>Criar Gratidão</Text>
            <Button onPress={() => navigation.navigate('GratiPote')}  title='Home'/>
            <TextInput
                value={input}
                placeholder="Adicione uma gratidão"
                onChangeText={(text) => {
                    setInput(text)
                }}
            />
            <View>
                <Button title="Add" color="black" onPress={() => addGratidao()}/>
            </View>
        </View>
      );
  }
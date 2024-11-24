import { Button, StyleSheet, Text, View, TextInput, FlatList } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useId, useState  } from 'react';

export const ListaGratidaoScreen = () => {
    const [gratidoes, setGratidoes] = useState([]);  
    
    async function loadData(){
        const data = await AsyncStorage.getItem('gratidoes');
        if(data !== null){
            setGratidoes(JSON.parse(data));
        }
    }
    /*clearAll = async () => {
        try {
          await AsyncStorage.clear()
        } catch(e) {
        }
      
        console.log('Limpo!')
      } */
    useEffect(() => {
        loadData();
      }, []);
      
    const navigation = useNavigation();

    const Item = ({title}) => (
        <View>
          <Text>{title}</Text>
        </View>
    );

    return (
        <View>
            <Text>Listar</Text>
            {/* <Button onPress={() => clearAll()}  title='Limpar'/> */}
            <Button onPress={() => navigation.navigate('GratiPote')}  title='Home'/>
            <FlatList
                data={gratidoes}
                renderItem={({item}) => <Item title={item.descricao} />}
                key={useId()}
            />
        </View>
    );
  }
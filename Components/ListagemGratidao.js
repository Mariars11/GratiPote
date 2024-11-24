import { Button, StyleSheet, Text, View } from 'react-native';
import {useNavigation} from '@react-navigation/native';

export const ListaGratidaoScreen = () => {
    const navigation = useNavigation();
      return (
        <View>
          <Text>Criar</Text>
          <Button onPress={() => navigation.navigate('GratiPote')}  title='Home'/>
        </View>
      );
  }
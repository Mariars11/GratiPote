import { Button, StyleSheet, Text, View } from 'react-native';
import {useNavigation} from '@react-navigation/native';

export const ExibirGratidaoScreen = () => {
    const navigation = useNavigation();
      return (
        <View>
          <Text>Criar</Text>
          <Button onPress={() => navigation.navigate('GratiPote')}  title='Home'/>
        </View>
      );
  }
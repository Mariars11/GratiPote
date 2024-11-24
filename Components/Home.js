import { Button, StyleSheet, Text, View } from 'react-native';
import {useNavigation} from '@react-navigation/native';

export const HomeScreen = () => {
    const navigation = useNavigation();
    return (
        <View>
            <Text>Home</Text>
            <Button title='+' onPress={() => navigation.navigate('Criar Gratidão')} />
            <Button title='Sortear' onPress={() => navigation.navigate('Exibir Gratidão')} />
            <Button title='Listar' onPress={() => navigation.navigate('Listar Gratidão')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
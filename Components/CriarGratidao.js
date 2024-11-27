import { Button, StyleSheet, Text, View, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';

export const CreateGratidaoScreen = () => {
    const navigation = useNavigation();
    const [input, setInput] = useState('');
    const [gratidoes, setGratidoes] = useState([]);

    async function loadData() {
        const data = await AsyncStorage.getItem('gratidoes');
        if (data !== null) {
            setGratidoes(JSON.parse(data));
        }
    }

    useEffect(() => {
        loadData();
    }, []);

    async function addGratidao() {
        if (input.trim() === '') return; 
        const isDuplicate = gratidoes.some(gratidao => gratidao.descricao === input.trim());
        if (isDuplicate) {
            alert('Você já adicionou essa gratidão!');
            return;
        }

        const gratidao = { id: Date.now(), descricao: input.trim() };
        const updatedGratidoes = [...gratidoes, gratidao];
        setGratidoes(updatedGratidoes);
        await AsyncStorage.setItem('gratidoes', JSON.stringify(updatedGratidoes));
        setInput('');
        navigation.navigate('GratiPote');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Adicionar Gratidão</Text>

            <Text style={styles.subtitle}>Preencha com algo pelo qual você é grato</Text>

            <TextInput
                style={styles.input}
                value={input}
                placeholder="Digite sua gratidão aqui..."
                onChangeText={(text) => setInput(text)}
            />

            <View style={styles.buttonContainer}>
                <Button
                    title="Adicionar"
                    color="#4CAF50"
                    onPress={addGratidao}
                />
                <Button
                    title="Voltar"
                    color="#FF5252"
                    onPress={() => navigation.navigate('GratiPote')}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FAF3E0',
        padding: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
        width: '80%',
        fontSize: 16,
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        marginTop: 20,
    },
});

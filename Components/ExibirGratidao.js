import { Button, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const ExibirGratidaoScreen = () => {
    const navigation = useNavigation();
    const [gratidoes, setGratidoes] = useState([]);
    const [gratidao, setGratidao] = useState('');
    const [hasLoaded, setHasLoaded] = useState(false);

    async function loadData() {
        const data = await AsyncStorage.getItem('gratidoes');
        if (data !== null) {
            const parsedData = JSON.parse(data);
            setGratidoes(parsedData);
            gratidaoAleatoria(parsedData);
        }
        setHasLoaded(true);
    }

    useEffect(() => {
        if (!hasLoaded) {
            loadData();
        }
    }, [gratidoes]);

    function gratidaoAleatoria(gratidoesList = gratidoes) {
        if (gratidoesList.length > 0) {
            const index = Math.floor(Math.random() * gratidoesList.length);
            setGratidao(gratidoesList[index].descricao);
        } else {
            setGratidao('Nenhuma gratidão disponível para sortear!');
        }
    }

    async function removeAllGratidoes() {
        await AsyncStorage.removeItem('gratidoes');
        setGratidoes([]);
        setGratidao('Todas as gratidões foram removidas!');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Gratipote</Text>

            <Text style={styles.subtitle}>Momentos de Gratidão</Text>

            <Text style={styles.gratidaoText}>
                {gratidao || 'Nenhuma gratidão sorteada ainda!'}
            </Text>

            <View style={styles.buttonContainer}>
                <Button
                    title="Sortear"
                    color="#2196F3"
                    onPress={() => gratidaoAleatoria()}
                />
                <Button
                    title="Excluir Todas"
                    color="#FF5252"
                    onPress={() => removeAllGratidoes()}
                />
            </View>

            <Button
                title="Voltar"
                color="#4CAF50"
                onPress={() => navigation.navigate('GratiPote')}
                style={styles.backButton}
            />
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
    gratidaoText: {
        fontSize: 18,
        fontStyle: 'italic',
        color: '#444',
        textAlign: 'center',
        marginBottom: 20,
        paddingHorizontal: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        marginTop: 20,
        marginBottom: 20,
    },
    backButton: {
        marginTop: 10,
    },
});

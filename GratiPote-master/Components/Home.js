import { Button, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const HomeScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {/* Título Principal */}
            <Text style={styles.title}>Gratipote</Text>

            {/* Subtítulo */}
            <Text style={styles.subtitle}>Seu potinho pessoal de gratidão</Text>

            {/* Descrição */}
            <Text style={styles.description}>
                Guarde aqui momentos especiais, lembre-se do que te faz feliz e celebre a vida com gratidão!
            </Text>

            {/* Botões */}
            <View style={styles.buttonContainer}>
                <Button
                    title="Add"
                    color="#4CAF50"
                    onPress={() => navigation.navigate('Criar Gratidão')}
                />
                <Button
                    title="Sortear"
                    color="#2196F3"
                    onPress={() => navigation.navigate('Exibir Gratidão')}
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
        marginBottom: 10,
    },
    description: {
        fontSize: 14,
        color: '#888',
        textAlign: 'center',
        marginBottom: 20,
        paddingHorizontal: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%',
        marginTop: 20,
    },
});

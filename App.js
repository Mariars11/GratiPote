import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from './Components/Home'
import {CreateGratidaoScreen} from './Components/CriarGratidao'
import {ListaGratidaoScreen} from './Components/ListagemGratidao'
import {ExibirGratidaoScreen} from './Components/ExibirGratidao'

const Stack = createNativeStackNavigator();

const RootStack = () => {
   return (
    <Stack.Navigator initialRouteName="GratiPote">
      <Stack.Screen name="GratiPote" component={HomeScreen} />
      <Stack.Screen name="Criar Gratidão" component={CreateGratidaoScreen} />
      <Stack.Screen name="Listar Gratidão" component={ListaGratidaoScreen} />
      <Stack.Screen name="Exibir Gratidão" component={ExibirGratidaoScreen} />
    </Stack.Navigator>
   );
}
const App = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};

export default App;
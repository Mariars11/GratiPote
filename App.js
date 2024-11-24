import { Button, StyleSheet, Text, View } from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from './Components/Home'
import {CreateGratidaoScreen} from './Components/CriarGratidao'

const Stack = createNativeStackNavigator();

const RootStack = () => {
   return (
    <Stack.Navigator initialRouteName="GratiPote">
      <Stack.Screen name="GratiPote" component={HomeScreen} />
      <Stack.Screen name="Criar Gratidão" component={CreateGratidaoScreen} />
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
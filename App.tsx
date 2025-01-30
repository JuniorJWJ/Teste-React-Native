/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from './src/screens/HomeScreen';
import {DetalhesTarefa} from './src/screens/DetalhesTarefa';
import {RootStackParamList} from './src/types/navigation';
import { EditarTarefaScreen } from './src/screens/EditarTarefaScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="DetalhesTarefa" component={DetalhesTarefa} />
        <Stack.Screen 
          name="EditarTarefa" 
          component={EditarTarefaScreen}
          options={{ title: 'Editar Tarefa' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, FlatList, Alert} from 'react-native';
import {TarefaItem} from './src/components/TarefaItem';
import {TarefaInput} from './src/components/TarefaInput';
import {Tarefa} from './src/types/Tarefa';

function App(): React.JSX.Element {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);
  const [novaTarefa, setNovaTarefa] = useState('');

  const adicionarTarefa = () => {
    if (novaTarefa.trim().length === 0) {
      Alert.alert('Erro', 'Por favor, digite uma tarefa válida');
      return;
    }

    setTarefas([
      ...tarefas,
      {
        id: Date.now().toString(),
        texto: novaTarefa,
        completa: false,
      },
    ]);
    setNovaTarefa('');
  };

  const alternarTarefa = (id: string) => {
    setTarefas(
      tarefas.map(tarefa =>
        tarefa.id === id ? {...tarefa, completa: !tarefa.completa} : tarefa,
      ),
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Lista de Tarefas</Text>
      
      <TarefaInput
        valor={novaTarefa}
        onChangeText={setNovaTarefa}
        onSubmit={adicionarTarefa}
      />

      <FlatList
        data={tarefas}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TarefaItem tarefa={item} onToggle={alternarTarefa} />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default App;

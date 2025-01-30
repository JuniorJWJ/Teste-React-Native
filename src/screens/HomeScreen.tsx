import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, FlatList, Alert} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {TarefaItem} from '../components/TarefaItem';
import {TarefaInput} from '../components/TarefaInput';
import {Tarefa} from '../types/Tarefa';
import {RootStackParamList} from '../types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export function HomeScreen({navigation}: Props): React.JSX.Element {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);
  const [novaTarefa, setNovaTarefa] = useState('');

  const adicionarTarefa = () => {
    if (novaTarefa.trim()) {
      setTarefas([...tarefas, {
        id: String(Date.now()),
        texto: novaTarefa,
        concluida: false
      }]);
      setNovaTarefa('');
    }
  };

  const alternarTarefa = (id: string) => {
    setTarefas(tarefas.map(tarefa =>
      tarefa.id === id ? {...tarefa, concluida: !tarefa.concluida} : tarefa
    ));
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#fff',
    },
    titulo: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      color: '#333',
      textAlign: 'center',
    },
    listContainer: {
      flex: 1,
      marginTop: 10,
    },
  });

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
          <TarefaItem 
            tarefa={item} 
            onToggle={alternarTarefa}
            onPress={() => navigation.navigate('DetalhesTarefa', {tarefa: item})}
          />
        )}
      />
    </SafeAreaView>
  );
} 
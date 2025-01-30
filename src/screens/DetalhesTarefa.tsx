import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'DetalhesTarefa'>;

export function DetalhesTarefa({route, navigation}: Props) {
  const {tarefa} = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Detalhes da Tarefa</Text>
      
      <View style={styles.card}>
        <Text style={styles.label}>Texto da Tarefa:</Text>
        <Text style={styles.texto}>{tarefa.texto}</Text>
        
        <Text style={styles.label}>Status:</Text>
        <Text style={styles.status}>
          {tarefa.concluida ? 'Completa' : 'Pendente'}
        </Text>
        
        <Text style={styles.label}>ID da Tarefa:</Text>
        <Text style={styles.texto}>{tarefa.id}</Text>
      </View>

      <TouchableOpacity 
        style={styles.botaoVoltar}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.botaoTexto}>Voltar</Text>
      </TouchableOpacity>
    </View>
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
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#666',
  },
  texto: {
    fontSize: 18,
    marginBottom: 10,
  },
  status: {
    fontSize: 18,
    marginBottom: 10,
    color: '#007AFF',
    fontWeight: 'bold',
  },
  botaoVoltar: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
}); 
import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  Button,
  Pressable
} from 'react-native';
import { Tarefa } from '../types/Tarefa';

type Props = {
  tarefa: Tarefa;
  onToggle: (id: string) => void;
  onPress: () => void;
  onDelete: () => void;
  onEdit: () => void;
};

export function TarefaItem({
  tarefa,
  onToggle,
  onPress,
  onDelete,
  onEdit
}: Props): React.JSX.Element {
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        onPress={() => onToggle(tarefa.id)}
        style={styles.tarefaContainer}
      >
        <View style={[
          styles.checkbox,
          tarefa.concluida && styles.checkboxConcluida
        ]} />
        <View style={styles.conteudoContainer}>
          <Text style={[
            styles.titulo,
            tarefa.concluida && styles.textoConcluido
          ]}>
            {tarefa.titulo}
          </Text>
          <Text style={[
            styles.texto,
            tarefa.concluida && styles.textoConcluido
          ]}>
            {tarefa.texto}
          </Text>
        </View>
      </TouchableOpacity>
      
      <View style={styles.botoesContainer}>
        <Button 
          title="Detalhes" 
          onPress={onPress}
        />
        <Pressable 
          style={styles.botaoEditar}
          onPress={onEdit}
        >
          <Text style={styles.botaoEditarTexto}>Editar</Text>
        </Pressable>
        <Pressable 
          style={styles.botaoExcluir}
          onPress={onDelete}
        >
          <Text style={styles.botaoExcluirTexto}>Excluir</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    marginVertical: 5,
  },
  tarefaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#666',
    marginRight: 10,
  },
  checkboxConcluida: {
    backgroundColor: '#4CAF50',
    borderColor: '#4CAF50',
  },
  conteudoContainer: {
    flex: 1,
    marginRight: 10,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  texto: {
    fontSize: 14,
    color: '#666',
  },
  textoConcluido: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
  botoesContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 10,
    marginTop: 8,
  },
  botaoExcluir: {
    backgroundColor: '#ff4444',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  botaoExcluirTexto: {
    color: '#fff',
    fontWeight: 'bold',
  },
  botaoEditar: {
    backgroundColor: '#ffa500',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  botaoEditarTexto: {
    color: '#fff',
    fontWeight: 'bold',
  },
}); 
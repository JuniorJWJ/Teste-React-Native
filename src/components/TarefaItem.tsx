import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {Tarefa} from '../types/Tarefa';

interface TarefaItemProps {
  tarefa: Tarefa;
  onToggle: (id: string) => void;
}

export function TarefaItem({tarefa, onToggle}: TarefaItemProps) {
  return (
    <TouchableOpacity
      style={styles.tarefaItem}
      onPress={() => onToggle(tarefa.id)}>
      <Text style={[styles.tarefaTexto, tarefa.completa && styles.tarefaCompleta]}>
        {tarefa.texto}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  tarefaItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  tarefaTexto: {
    fontSize: 16,
  },
  tarefaCompleta: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
}); 
import React, { useState } from 'react';
import { 
  View, 
  TextInput, 
  StyleSheet, 
  TouchableOpacity, 
  Text,
  Alert
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'EditarTarefa'>;

export function EditarTarefaScreen({ route, navigation }: Props) {
  const { tarefa, onSave } = route.params;
  const [titulo, setTitulo] = useState(tarefa.titulo);
  const [texto, setTexto] = useState(tarefa.texto);

  const salvarAlteracoes = () => {
    if (titulo.trim() && texto.trim()) {
      onSave({
        ...tarefa,
        titulo: titulo,
        texto: texto,
      });
      navigation.goBack();
    } else {
      Alert.alert('Atenção', 'Por favor, preencha todos os campos.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Editar Tarefa</Text>
      
      <View style={styles.form}>
        <Text style={styles.label}>Título:</Text>
        <TextInput
          style={styles.input}
          value={titulo}
          onChangeText={setTitulo}
          placeholder="Digite o título"
        />

        <Text style={styles.label}>Texto:</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          value={texto}
          onChangeText={setTexto}
          placeholder="Digite o texto"
          multiline
          numberOfLines={4}
        />

        <View style={styles.botoesContainer}>
          <TouchableOpacity 
            style={[styles.botao, styles.botaoCancelar]}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.botaoTexto}>Cancelar</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.botao, styles.botaoSalvar]}
            onPress={salvarAlteracoes}
          >
            <Text style={styles.botaoTexto}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

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
    textAlign: 'center',
  },
  form: {
    flex: 1,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: '#f8f8f8',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  botoesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  botao: {
    flex: 1,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  botaoCancelar: {
    backgroundColor: '#ff4444',
  },
  botaoSalvar: {
    backgroundColor: '#4CAF50',
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
}); 
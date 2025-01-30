import {Tarefa} from './Tarefa';

export type RootStackParamList = {
  Home: undefined;
  DetalhesTarefa: {
    tarefa: Tarefa;
  };
  EditarTarefa: {
    tarefa: Tarefa;
    onSave: (tarefaAtualizada: Tarefa) => void;
  };
}; 
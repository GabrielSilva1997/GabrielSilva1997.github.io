import Task from './Task';
import {TbClipboardText} from 'react-icons/tb'
import { ITask } from '../App';

import styles from './Container.module.css';

interface Props{
  tasks: ITask[]; 
  onDelete: (taskID: string) => void;
  onComplete: (taskID: string) => void;
}

const Container = ({tasks, onDelete, onComplete}: Props) => {
  const taskQuantity = tasks.length; 
  const tasksCompleted = tasks.filter(task => task.isCompleted).length

  return(
    <section className={styles.tasks}>
        <header className={styles.taskStatus} >
          <div>
            <p>Tarefas criadas</p>
            <span>{taskQuantity}</span>
          </div>

          <div>
            <p className={styles.textPurple}>Concluídas</p>
            <span>{tasksCompleted} de {taskQuantity}</span>
          </div>
        </header>

        <div className={styles.list}>
          {tasks.map( task => 
            <Task 
              key={task.id}
              task={task} 
              onDelete={onDelete} 
              onComplete={onComplete}
            />
          )}

          {tasks.length <= 0 && ( 
            <div className={styles.empty}>
              <TbClipboardText/> 
              <p>Você ainda não tem tarefas cadastradas</p>
              <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
          )}
        </div>
        
      </section>
  )
}

export default Container;
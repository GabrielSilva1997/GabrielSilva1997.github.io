import { Trash } from "phosphor-react";
import {BsFillCheckCircleFill} from 'react-icons/bs'
import { ITask } from "../App";

import styles from './Task.module.css';

interface Props{
  task: ITask;
  onDelete: (taskID: string) => void;
  onComplete: (taskID: string) => void;
}

const Task = ({task, onDelete, onComplete}: Props) => { 
  return (

    <div className={styles.task}>

      <button className={styles.checkButton} onClick={() => onComplete(task.id)}> 
        {task.isCompleted ? <BsFillCheckCircleFill/> : <div/>}
      </button> 

      <p className={task.isCompleted ? styles.textCompleted : ''}>
        {task.content}
      </p>

      <button className={styles.deleteButton} onClick={() => onDelete(task.id)}>
        <Trash />
      </button>
      
    </div>
  );
}

export default Task; 
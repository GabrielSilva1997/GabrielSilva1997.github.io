import Header from './components/Header';
import Container from './components/Container';

import { useState } from 'react';

import './global.css';

export interface ITask{
  id: string;
  content: string;
  isCompleted: boolean;
}

function App(){
  const [tasks, setTasks] = useState<ITask[]>([])

  function addTask(taskContent: string){
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        content: taskContent,
        isCompleted: false
      }
    ])
  }

  function deleteTaskByID(taskID: string){
    const remainingTasks = tasks.filter(task => task.id !== taskID)

    setTasks(remainingTasks);
  }

  function taskCompleteByID(taskID: string){
    const completedTasks = tasks.map(task => {
      if(task.id === taskID){
        return {
          ...task, 
          isCompleted: !task.isCompleted
        }
      }
      return task;
    });
    setTasks(completedTasks);
  }
  
  return(
    <>
      <Header onAddTask={addTask}/> 
      <Container 
        tasks={tasks}
        onDelete={deleteTaskByID}
        onComplete={taskCompleteByID}  
      /> 
    </>
  )
}

export default App;
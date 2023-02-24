import { AiOutlinePlusCircle } from 'react-icons/ai'; 
import { ChangeEvent, FormEvent, useState } from 'react';

import styles from './Header.module.css';

import todoLogo from '../assets/Logo.svg';

interface Props{
  onAddTask: (taskContent: string) => void;
}

const Header = ({onAddTask}: Props) =>{
  const [content, setContent] = useState('');

  function handleSubmit(event: FormEvent){
    event.preventDefault();

    onAddTask(content);

    setContent('');
  }

  function onChangeContent(event: ChangeEvent<HTMLInputElement>){
    setContent(event.target.value);
  }

  return(
    <header className={styles.headerMain}>
      <img src={todoLogo} alt="" width={200}/>

      <form className={styles.newTaskForm} onSubmit={handleSubmit}>
        <input 
          type='text' 
          placeholder='Adicione uma nova tarefa'
          onChange={onChangeContent}
          value={content}
          required
        >
        </input>

        <button type="submit">
          Criar 
          <AiOutlinePlusCircle size={20}/>
        </button>
      </form>
    </header>
  );
}

export default Header; 
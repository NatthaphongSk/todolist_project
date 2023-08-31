import { useState } from 'react';

import styles from './TodoLists.module.scss';

import TodoItem from './TodoItem';

function TodoLists() {
  const [isOpenForm,setIsOpenForm]=useState(false)

  function openEdit(){
    setIsOpenForm(!isOpenForm)
  }
  return (
    <ul className={styles.todo__lists}>
      <TodoItem/>
      <TodoItem/>
    </ul>
  );
}

export default TodoLists;

// import { FaPlus } from 'react-icons/fa';
import { HiPlus } from 'react-icons/hi';
import { useState } from 'react';

import styles from './TodoCreate.module.scss';
import Todoform from './TodoForm'

/*
CC1-Condition rendering
-Defult show button and text
-active show form input
Concept : true ? <Addtask> : <Todoform>
*/
/*
CC2-Event handering
-เอา function ผูกติดกับ UI เพื่อให้ user เรียกใช้
-onClick : FN run when user click at component
  - User คลิก
  - browser เรียกใช้ โดยจะส่ง parameter eventObj ให้ FN
*/
/*
CC3-JS value ไม่สามารถทำให้ react rerender ได้ ต้องใช้ State
*/
/*
CC4,5- Array Destructuring , React State(1 ใน function กลุ่ม React hook)
const [state,setState]=useState(initialState:any)
  // Rerender 1 ครั้ง codeทั้งหมดใน fc จะถูกrunใหม่ 1 ครั้ง
*/

function TodoCreate() {
  const [isOpenForm,setIsOpenForm]=useState(false)

  const handleClick = function (event){
    setIsOpenForm(!isOpenForm)
  }
  return (
    <>
      {isOpenForm ? 
        <Todoform textSubmit="Add Task" setIsOpenForm={setIsOpenForm}/>:
        (<div className={styles.todo__create} onClick={handleClick}>
        <div className={styles.todo__create__button}>
          <HiPlus />
        </div>
        <h3 className={styles.todo__create__text}>Add Task</h3>
      </div>)}
    </>
  );
}

export default TodoCreate;

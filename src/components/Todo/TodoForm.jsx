import { useState } from 'react';
import {Button} from '../Common/Button/Button'
import styles from './TodoForm.module.scss';

// props ={
//   textSubmit : string
// }

/*
CC1-From handle
-ใช้ FN ไปผูกกับ Event ชื่อ omSubmit
-FN จะถูก Browserเรียกใช้ (เมื่อไหร่?) โดยส่ง parameter มา 1ตัว event obj
-โดย defult ทุกปุ่มใน form จะทำหน้าที่ submit
-แก้โดยกำหนด type ปุ่ม
  - type="submit" : <button type='submit'>1</button>
  - type="button" : <button type='button'>2</button>
*/

/*
props={
  textSubmit : string
  setIsOpenForm : FN
  oldTodo : {id,task,done,date} (from TodoItem)
  addTodo : FN (from TodoCreate)
  editTodo : FN (from TodoItem)
}
*/

function TodoForm(props) {
  const [isError,setIsError]=useState(false)
  const [taskInput,setTaskInput] = useState(props.oldTodo?.task || '')
  //ถ้าไม่มี props.oldTodo มา (กรณีมาจาก TodoCreate) จะเป็น undefinedแล้วจะใช้ '' แทน

  function handleChangeInput(event){
    if(isError) setIsError(false)
    setTaskInput(event.target.value)
  }

  // 2 Mode : Add or Edit
  function handleSubmit(event){
    // 1. preventDefault
    event.preventDefault()

    // รู้ก่อนว่า User พิมพ์อะไร (อยู่ใน state:taskInput)

    // Start Logic for createTodo
    // 2. FormValidation
    // case1 : submit ได้
    // case2 : sumbit ไม่ได้ => แสดง error
    if(taskInput.trim()===''){
      setIsError(true)
      return
    }

    
    /*
    // 3.create new todo
    console.log('submit===create new todo')
    // create new todo
    // 1- sent request to back-end for save to data-base
    // 2- update state 
    // data = []
    // data = [{id:nunber,task:string,status:boolean,due_date:string}]
    // oldState= [{0},{0},{0}]
    // newState= [{n},{0},{0},{0}]
    const newTodo={id:nanoid(),task:taskInput,status:false,due_date:'2023-01-09'}
    // const newTodoList =[...newTodo,...props.data];

    //updateState
    props.setTodo((prev)=>[newTodo,...prev])
    */
    // change way to create newTask
    // send task input to addtodo
    // use if else for choice Mode of submit Add or Edit
    if(props.addTodo) props.addTodo(taskInput) // function come form App.jsx and sent taskinput to App.jsx
    else if(props.editTodo,props.oldTodo) {
      props.editTodo(props.oldTodo.id,{task:taskInput});
    }

    // close form
    props.setIsOpenForm(false)
  }

  function handleCancel(){
    // correctName :setIsOpenForm(false)
    // inCorrectName :undefined(false)
    props.setIsOpenForm(false) 
  }

  

  return (
    <form className={styles.todo__form__container} onSubmit={handleSubmit}>
      {/*	Body */}
      <input 
      className={styles.todo__form__input} 
      placeholder='Task Name' 
      onChange={handleChangeInput} 
      value={taskInput} />

      {/*Form Footer */}
      <div className={styles.todo__form__footer}>
        {isError && <p className={styles.todo__error}>Title is required</p>}
        <div className={styles.todo__form__buttons}>
          <Button 
          text='Cancel' 
          active={false} 
          type="button" 
          onClick={handleCancel}/>
          <Button text={props.textSubmit} active={true} type="submit" />
          {/* if we click button type='submit' it will run onSubmit={FN} at form */}
        </div>
      </div>
    </form>
  );
}

export default TodoForm;

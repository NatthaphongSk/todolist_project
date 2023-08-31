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
}
*/

function TodoForm(props) {
  const [isError,setIsError]=useState(false)
  const [taskInput,setTaskInput] = useState('')

  function handleChangeInput(event){
    if(isError) setIsError(false)
    setTaskInput(event.target.value)
  }

  function handleSubmit(event){
    // 1. preventDefault
    event.preventDefault()

    // รู้ก่อนว่า User พิมพ์อะไร (อยู่ใน state:taskInput)

    // FormValidation
    // case1 : submit ได้
    // case2 : sumbit ไม่ได้ => แสดง error

    if(taskInput.trim()===''){
      setIsError(true)
      return
    }
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
          <Button text={props.textSubmit} active={true} type="submit"/>
        </div>
      </div>
    </form>
  );
}

export default TodoForm;

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
function TodoForm(props) {
  const [isError,setIsError]=useState(false)

  function handleSubmit(event){
    event.preventDefault()
    console.log('Submit')
  }
  function handleCancel(){
    return 
  }

  return (
    <form className={styles.todo__form__container} onSubmit={handleSubmit}>
      {/*	Body */}
      <input className={styles.todo__form__input} placeholder='Task Name' />

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

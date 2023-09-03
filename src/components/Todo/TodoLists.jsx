// import { useState } from 'react'; // ย้ายไปที่ App

import styles from './TodoLists.module.scss';
import TodoItem from './TodoItem';
/*
todoObj : {id:munber,task:string,status:boolean,due_date:string}
data = array[] {id:munber,task:string,status:boolean,due_date:string}
หรือ data = array[]todoObj
dataRender =array[]  <TodoItem task=... done=... date=.. />
*/

// ย้ายไปที่ App
// const data=[ 
// {
//   "id": 1, 
//   "task": "Suspendisse potenti.", 
//   "status": false, 
//   "due_date": "2023-04-26" 
// },
// {
//   "id": 2,
//   "task": "In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
//   "status": false,
//   "due_date": "2023-05-08"
// },
// {
//   "id": 3,
//   "task": "Aenean fermentum. Donec ut mauris eget massa tempor convallis.",
//   "status": false,
//   "due_date": "2023-04-30"
// },]




function TodoLists({data,deleteTodo,editTodo}) {
  // CRUD = Create-Read-Update-Delete
  // ย้ายไปที่ App
  // const [allTodos,setAllTodos]=useState(data)

  // const dataRender=data.map((todoObj)=>(
  // <TodoItem key={todoObj.id} task={todoObj.task} done={todoObj.status} date={todoObj.due_date}/>
  // ))

  return (
    <ul className={styles.todo__lists}>
      {/* 1.hardcode */}
      {/* <TodoItem task='DoHW' done={false} date='31 Aug'/>
      <TodoItem task='Drink' done={false} date='1 Sep'/> */}
      {/* 2.1 map render V.1 */}
      {/* {dataRender} */}
      {/* 2.2 map render V.2 */}
      {data.map((todoObj)=>(
        <TodoItem 
        key={todoObj.id}
        id={todoObj.id}
        task={todoObj.task} 
        done={todoObj.status} 
        date={todoObj.due_date}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
        />
      ))}
    </ul>
  );
}

export default TodoLists;

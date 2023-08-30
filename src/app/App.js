// Dependencies
import "./App.scss";
import {
  FaInbox,
  FaCalendar,
  FaCalendarAlt,
  FaChevronDown,
} from "react-icons/fa";
import Header from "../components/Header";
import Lists from "../components/Lists";
import TodoHeader from "./Todo/TodoHeader";

function App() {
  const generalList = [
    { id: 1, text: "Inbox", active: true, icon: <FaInbox /> },
    { id: 2, text: "Today", active: false, icon: <FaCalendar /> },
    { id: 3, text: "Next 7 days", active: false, icon: <FaCalendarAlt /> },
  ];
  const projectList = [
    { id: 4, text: "Project-A", active: true, icon: <FaInbox /> },
    { id: 5, text: "Project-B", active: false, icon: <FaInbox /> },
  ];

  //cbjectDetail => <listItem ...ObjDetail>
  return (
    <div className="todo">
      <div className="todo__header">
        <Header />
      </div>
      <div className="todo__sidebar">
        <aside className="sidebar">
          <section className="sidebar__category">
            <Lists data={generalList} />
          </section>
          <section className="sidebar__category">
            <div className="accordion">
              {/* Toggle */}
              <div className="accordion__toggle">
                <li className="accordion__item">
                  <FaChevronDown className="accordion__item__icon accordion__item__active" />
                  <p className="accordion__item__text">Projects</p>
                </li>
              </div>
              {/* Lists */}
              <Lists data={projectList} />
            </div>
          </section>
        </aside>
      </div>
      <div className="todo__content">
        <main className="todo__container">
          {/* header */}
          <TodoHeader />

          {/* CreateTodo */}

          {/* TodoLists */}
        </main>
      </div>
    </div>
  );
}

export default App;

/*
challenge : Refactor ให้ 2 section render UI ที่
  - OptionA (2/5):render ต่างกัน <list/> กับ <Accordian/>
  - OptionB (4/5):render ด้วย UI เดี่ยวกัน เช่น <list/>
  - OptionC (5/5):render ด้วย UI <list/> ภายใต้ <Accordian><list/><Accordian/>
*/

// {
//   /*
// <ul className="list">
//   {/* วิธี 1 */
// }
// {
//   /* {projectList.map((obj) => (
//     <ListItem
//       key={obj.id}
//       text={obj.text}
//       icon={obj.icon}
//       active={obj.active}
//     /> */
// }
// {
//   /* วิธี 2 */
// }
// {
//   /* {projectList.map((obj) => (
//     <ListItem key={obj.id} {...obj} />
//   ))} */
// }
// {
//   /* วิธี 3 */
// }
// {
//   /* {projectLists.map((obj) => {
//     obj.key = obj.id;
//     delete obj.id;
//     return <ListItem {...obj} />;
//   })}
// </ul>
// */
// }

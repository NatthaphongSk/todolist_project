import "./App.scss";
import Header from "../components/Header.jsx";
import ListItem from "../components/ListItem";
import {
  FaInbox,
  FaCalendar,
  FaCalendarAlt,
  FaChevronDown,
} from "react-icons/fa";

function App() {
  return (
    <div className="todo">
      <div className="todo__header">
        <Header />
      </div>
      <div className="todo__sidebar">
        <aside className="sidebar">
          <section className="sidebar-category">
            <ul className="list">
              <ListItem
                text="Inbox"
                icon={<FaInbox className="list__item__icon" />}
              />
              <ListItem
                text="Today"
                icon={<FaCalendar className="list__item__icon" />}
              />
              <ListItem
                text="Next 7 days"
                icon={<FaCalendarAlt className="list__item__icon" />}
              />
            </ul>
          </section>
          <section className="sidebar-category">2</section>
        </aside>
      </div>
      <div className="todo__content">TodoContent</div>
    </div>
  );
}

export default App;

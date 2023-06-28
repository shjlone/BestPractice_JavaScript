import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo';
import FilterButton from './components/FilterButton';
import Form from './components/Form';
import { useState } from 'react';
import { nanoid } from 'nanoid';



function App(props) {

  ///初始化数据
  const DATA = [
    { id: "todo-0", name: "Eat", completed: true },
    { id: "todo-1", name: "Sleep", completed: false },
    { id: "todo-2", name: "Repeat", completed: false }
  ];

  const [tasks, setTasks] = useState(DATA);


  /**
   * 新建代办
   * @param {代办内容} name 
   */
  function addTask(name) {
    const key = `todo-${nanoid()}`;
    const newTask = { id: key, name: name, key: key, completed: false };
    setTasks([...tasks, newTask]);
  }

  // 代办切换状态
  function toggleTaskCompleted(id) {
    console.log(tasks[0]);
    const updateTasks = tasks.map((task) => {
      if (id == task.id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updateTasks);
  }

  /**
   * 删除代办
   * @param {代办id} id 
   */
  function deleteTask(id) {
    console.log(id);
    const remainingTasks = tasks.filter((task) => id != task.id);
    setTasks(remainingTasks);
  }

  /**
   * 编辑代办
   * @param {代办id} id 
   * @param {新的内容} newName 
   */
  function editTask(id, newName) {
    const editedTaskList = tasks.map((task) => {
      if (id == task.id) {
        return { ...task, name: newName };
      }
      return task;
    });
    setTasks(editedTaskList);
  }








  const [filter, setFilter] = useState("All");
  const FILTER_MAP = {
    All: () => true,
    Active: (task) => !task.completed,
    Completed: (task) => task.completed,
  };

  const FILTER_NAMES = Object.keys(FILTER_MAP);
  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton key={name} name={name}
      isPressed={name == filter} setFilter={setFilter} />
  ));


  const taskList = tasks.filter(FILTER_MAP[filter]).map((task) => (
    <Todo id={task.id} name={task.name} completed={task.completed} key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
      editTask={editTask}
    />
  ));
  const tasksNoun = taskList.length !== 1 ? "tasks" : "task";
  const headingText = `${taskList.length} ${tasksNoun} remaining`;


  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>

      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        {filterList}
      </div>
      <h2 id="list-heading">
        {headingText}
      </h2>

      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
        {/* <Todo name="Eat" completed={true} id="todo-0" />
        <Todo name="Sleep" completed={false} id="todo-1" />
        <Todo name="Repeat" completed={false} id="todo-2" /> */}

      </ul>
    </div>
  );
}


export default App;

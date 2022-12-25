import { useState } from 'react'

import Header from './components/Header'
import Tasks from './components/Tasks'
import Addtask from './components/Addtask';




function App() {

  const [tasks, setTasks] = useState([
    {
      id: 1, 
      text: "Doctors Appointment", 
      day: "Feb 5th at 2:30pm",
      reminder: true
    },
    {
      id: 2, 
      text: "School Appointment", 
      day: "Feb 5th at 2:30pm",
      reminder: true
    },
    {
      id: 3, 
      text: "Some other Appointment", 
      day: "Feb 5th at 2:30pm",
      reminder: true
    }
  ]);

  const [showForm, setShowForm] = useState(true);

  const deleteTask = (id) => {
    setTasks(tasks.filter((task)=>{
     return task.id !== id;
    }));
  }

  const toggleReminder = (id) =>{
    setTasks(tasks.map((task) => {
        if(task.id === id){
          task.reminder = !task.reminder;
        }
        return task;
    }));
  }

  const toggleForm = () => {
    setShowForm(!showForm);
  }

  const createTask = (title, day, reminder) => {
    let mx = 0;
    tasks.forEach((task)=>{
      if(task.id >= mx){
        mx = task.id;
      }
    })

    const obj = {id: mx + 1, text: title, day: day, reminder: reminder};
    console.log(obj)
    setTasks([...tasks, obj]);
  }

  return (
    <div className="container">
      <Header onAddbtn={toggleForm} btnColor={ showForm ? 'red' : 'green'} btnText={showForm ? 'Close' : 'Add'} />
      {showForm ? <Addtask createTask={createTask}/> : ''}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete = {deleteTask} onToggle={toggleReminder}/> : 'No Tasks to show' }

    </div>
  );
}

export default App;

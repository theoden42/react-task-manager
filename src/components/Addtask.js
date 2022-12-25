import React, { useState } from 'react'

const Addtask = ({ createTask }) => {
 
  const [day, setDay] = useState('');
  const [title, setTitle] = useState('');
  const [reminder, setReminder] = useState(false);

  const addTitle = (e) => {
    setTitle(e.target.value); 
  }
  const addDay = (e) => {
    setDay(e.target.value);
  }
  const addReminder = (e) =>{
    setReminder(!reminder);
  }

  const submitForm = (e) =>{
    e.preventDefault();
    createTask(title, day, reminder);
  }

  return (
    <form className='form-control'>
        <div className='form-control'>
            <label>Title</label>
            <input type="text" placeholder='Add the reminder name' onChange={addTitle}></input>
        </div>
        <div className='form-control'>
            <label>Day</label>
            <input type="text" placeholder='Add the day of task' onChange={addDay}></input>   
        </div>
        <div className='form-control-check'>
            <label>Reminder</label>
            <input type='checkbox' value={true} className='form-control' onChange={addReminder}></input>
        </div>
        <div className='form-control'>
            <input type="submit" className='btn btn-block' onClick={submitForm} ></input>
        </div>
    </form>
  )
}

export default Addtask
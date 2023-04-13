import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';



import {useState} from 'react'

function App() {

  const [todoList , setTodoList] = useState([])

  const[newTask,setNewTask] =useState('')


  const handlechange = (event) =>{
    setNewTask(event.target.value)
  }

  const addTask =()=>{
    // const newTodoList = [...todoList, newTask]
    // setTodoList(newTodoList)

    //make object of task

    const task ={
      id : todoList.length===0 ? 1:todoList[todoList.length -1].id+1,
      task:newTask
    }
    if(newTask != '')
    setTodoList([...todoList,task])
    else 
       alert('Please fill the input box')



      console.log(task)

  }


  const deleteTask = (idNo)=>{
      console.log(idNo)
      const newTodoList =todoList.filter((task)=>{
        // if(task == taskName){
        //   return false
        // }
        // else{
        //   return true
        // }


        return task.id != idNo

       
      })

      setTodoList(newTodoList)
  }

  return (
    <div className="App">
      <div className='container'>
      <div className="addTask">
        <input id='task'  onChange={handlechange} name='task'/>
        <button onClick={addTask}>Add Task</button>

      </div>
      <div className="list">
      <table className='table'>
                <thead>
                  <tr>
                    <th>Task</th>
                    <th>Action</th>
                  </tr>
                </thead>
         {
          todoList.map((task)=>{
            return <div>
            
                <tbody>
                  <tr>
                    <td>{task.task}</td>
                    <td>
                    <button onClick={()=>deleteTask(task.id)}>X</button>
                    </td>
                  </tr>
                </tbody>
            
              {/* <h1>{task}</h1>
              <button onClick={()=>deleteTask(task)}>X</button> */}
            </div>
          })
         }
         </table>
      </div>
      </div>
    </div>
  );
}

export default App;


// echo "# todolist" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/jhabindra/todolist.git
// git push -u origin main

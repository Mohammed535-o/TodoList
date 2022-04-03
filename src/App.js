import './App.css';
import Header from './MyComponents/Header';
import { Todos } from './MyComponents/Todos';
import { Footer } from './MyComponents/Footer';
import React, {useState} from 'react';
import AddTodo from './MyComponents/AddTodo';
import AddModal from './MyComponents/AddModal';


function App() {
  const onDelete = (todo)=>{
    console.log("I am on Delete of todo", todo)
    
    setPoints(points - 10);

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
  }
  const[points, setPoints] = useState(0);
  const onSuccess = (todo)=>{
      setPoints(points + 20);
      console.log(points);

    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    
  }
  const[todos, setTodos] = useState([
  {
    sno : 1,
    title : "Go to the market",
    desc : "You need to go to market to get this job done"
  },
  {
    sno : 2,
    title : "Go to the mall",
    desc : "You need to go to market to get this job done"
  },
  {
    sno : 3,
    title : "Go to the ghat",
    desc : "You need to go to market to get this job done"
  }

  ]);

  const addTodo = (title, desc)=>{
    if(!title || !desc){
        alert("Idiots")
    }
    else {
      if(todos.length>=9){
        alert("First Complete already present tasks");
      }
      let sno = 1;
      if(todos.length!==0)
      {
        sno = todos[todos.length - 1].sno + 1;
      }
        let myTodo = {
            sno : sno,
            title : title,
            desc : desc
        }
        console.log(myTodo);
        setTodos([...todos, myTodo]);
    }
  }
  return (
    <>
      <Header title="MyTodoList" searchBar={true} points={points}/>
      {/* <div className=' bg-primary mx-auto text-light w-25 rounded rounded fs-3 text-center'>COUNT == {todos.length}</div> */}
      <Todos todos={todos} onDelete={onDelete} onSuccess={onSuccess} points={points}/>
      <AddModal addTodo={addTodo}/>
      <Footer/>
    </>
  );
}

export default App;

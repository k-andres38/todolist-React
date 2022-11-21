import React, { useState } from 'react'
import Todo from './Todo';
import "./todoApp.css"

function TodoApp() {
    
    const [title,setTitle]= useState('hola');
    const [todos, setTodos]= useState([])
   

    const handleChange=(e)=>{
        
        const value=e.target.value;
        
       setTitle(value)
       
    }

    const handleSubmit=(e)=>{
        e.preventDefault();

        

        const newTodo={
            id:crypto.randomUUID(),
            title:title,
            completed:false
        }
        if(!newTodo.title.trim())return;
        const temp=[...todos];
        temp.unshift(newTodo)
        setTodos(temp)   
        
        setTitle('')

    }


   const handleUpdate=(id,valor)=>{
    const temp=[...todos];
    const item=temp.find(item=>item.id===id);
    item.title=valor;
    setTodos(temp)
    
    
   }

   const handleDelete=(id)=>{
    
    const temp=todos.filter(item=>item.id!==id);
    setTodos(temp)
    
   }

  return (
    <div className='todoContainer'>
        <h1>Lista de Tareas</h1>
        <form className='todoCreateForm' onSubmit={handleSubmit} >
            <input className='todoInput' type="text"  onChange={handleChange} value={title}/>
            <button className='buttonCreate' onClick={handleSubmit} type='submit'>Agregar</button>

            
        </form>

        <div className='todosContainer'>
            {
                todos.map(i =>(
                    <Todo key={i.id} e={i} onUpdate={handleUpdate} onDelete={handleDelete} />
                ))
            }
                {/* // //<div key={e.id}>{e.title}</div> aqui se esta utilizando props en archivo Todo.jsx */}
                    
            <span className='footer'>Creado Por: Carlos Navarro</span>
        </div>
    </div>
  )
}

export default TodoApp
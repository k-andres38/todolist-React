import React, { useState } from 'react'

function Todo({e,onUpdate,onDelete}) {

    const [isEdit,setIsEdit]=useState(false);
    
    const FormEdit=()=>{
    const [newValue,setNewValue]= useState(e.title);
        
       const handleSubmit=(e)=>{
       
        e.preventDefault();

       }

       const handleChange=(e)=>{
        const value=e.target.value;
        
        setNewValue(value)

       }

       const handleClickUpdate=()=>{
            onUpdate(e.id,newValue);
            setIsEdit(false);

       }


        return(
            <form className='todoUpdateForm' onSubmit={handleSubmit}>
            <input  type="text" className='todoInput' onChange={handleChange} value={newValue} />
            <button className='button' onClick={handleClickUpdate}>Update</button>
         </form>
        )
    };

    const TodoElement=()=>{
        return (
           
                <div className='todoInfo'>
                <span className='todoTitle'>{e.title}</span>
                    <button className='button' onClick={()=>setIsEdit(true)}>Edit</button>
                    <button className='buttonDelete' onClick={(evento)=>onDelete(e.id)}>Delete</button>
                </div>
          
        )
    }

    
  return <div className='todo'>
            {isEdit ? <FormEdit />:<TodoElement />}    
        </div>

      
     
     
}

export default Todo
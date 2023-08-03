import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addToDo } from '../redux/state/todo/TodoSlice';

const CreateTodo = () => {

    const dispatch = useDispatch()
    const taskInput = useRef()
    
    return (
        <div className='container-fluid my-5'>
            <div className="row">
                <div className="col-md-10">
                    <input ref={taskInput} type="text" placeholder='Type text' className='form-control' />
                </div>
                <div className="col-md-2">
                    <button onClick={()=> dispatch(addToDo(taskInput.current.value))} className='btn btn-primary'>Add Todo List</button>
                </div>
            </div>
        </div>
    );
};

export default CreateTodo;
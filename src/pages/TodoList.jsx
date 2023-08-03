import React from 'react';
import { useSelector } from 'react-redux';

const TodoList = () => {

    const todoItem = useSelector((state)=> state.todo.value);
    
    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-md-12">
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Task Name</th>
                                <th>Edit</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1 .</td>
                                <td>task name</td>
                                <td><button className='btn btn-sm btn-success'>Edit</button></td>
                                <td><button className='btn btn-sm btn-danger'>Remove</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default TodoList;
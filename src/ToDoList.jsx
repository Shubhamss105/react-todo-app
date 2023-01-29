import React from 'react'
import { MdDeleteForever} from 'react-icons/md';

const ToDoList = (props) => {
    return <>
    <div className='todo_style flex flex-row justify-start align-middle text-lg text-white mt-3'>
    <MdDeleteForever className='w-5 h-5 flex justify-center align-middle rounded-full m-4 mt-1 shadow-md cursor-pointer' onClick={()=>{
        props.onSelect(props.id);
    }}/>
    <li>{props.text}</li>
    </div>
    </>
}

export default ToDoList

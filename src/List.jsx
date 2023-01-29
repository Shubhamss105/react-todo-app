import React, { useState } from 'react'
import { AiFillPlusCircle} from 'react-icons/ai';
import ToDoList from './ToDoList';


const List = () => {
    const [inputList, setInputList] = useState("");

    const [items, setItems] = useState([]);

    const handleChange=(event) =>{
        setInputList(event.target.value);
    }

    const handleClick=() =>{
        setItems((oldItems)=>{
            return [...oldItems, inputList];
        });
        setInputList('');
        
    };

    const deleteItems =(id)=>{
      setItems((oldItems)=>{
        return oldItems.filter((arrElem, index)=>{
          return index !==id;
        })
      })
    }


  return (
    <div>
      <div className="main-content bg-gradient-to-r from-violet-600  to-blue-500 h-screen flex flex-row justify-center align-middle text-center">
      <div className="body rounded-lg border-purple-400 border-collapse w-3/4 md:w-1/3 m-auto h-4/5 p-6 bg-gradient-to-r from-violet-500  to-blue-400 shadow-2xl">
        <h1 className="text-center text-white text-4xl font-bold">ToDo List</h1>
        <br />
        <input type="text" value={inputList} placeholder="Add a Item"    className="text-center  h-7 border-0 bg-transparent text-xl w-3/5 border-b-2 border-solid outline-none text-white" onChange={handleChange}/>
        <button onClick={handleClick}><AiFillPlusCircle className="text-3xl "/></button>

        

        <ol>
            {/* <li>{inputList}</li> */}
            {items.map((itemval, index)=>{
                 return <ToDoList
                text={itemval}
                key={index}
                id={index}
                onSelect = {deleteItems}
                />
            })}
        </ol>
      </div>
    </div>
    </div>
  )
}

export default List

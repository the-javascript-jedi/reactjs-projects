import React,{useState} from 'react'
//interface for props
import {IState as Props} from '../App'
// set an interface for the AddToList component
interface IProps{
    people:Props["people"]
    setPeople:React.Dispatch<React.SetStateAction<Props["people"]>>
}
//React Functional componet with IProps
const AddToList:React.FC<IProps> = ({people,setPeople}) => {
    const [input,setInput]=useState({
        name:"",
        age:"",
        note:"",
        img:""
    })
    // handle change for input elements
    const handleChange=(e:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>):void=>{
        setInput({
            ...input,
            [e.target.name]:e.target.value
        })
    }
    // handleClick for button submit
    const handleClick=():void=>{
        if(!input.name||!input.age||!input.img){
            return;
        }
        // set the state
        setPeople([
            ...people,
            {
                name:input.name,
                age:parseInt(input.age),
                url:input.img,
                note:input.note
            }
        ])
        // clear the form elements
        setInput({name:"", age:"", img:"", note:""})
    }
    return (
        <div className="AddToList">
           <input type="text" name="name" value={input.name} onChange={handleChange} className="AddToList-input" placeholder="Name"  />
           <input type="text" name="age" value={input.age} onChange={handleChange} className="AddToList-input" placeholder="Age"  />
           <input type="text" name="img" value={input.img} onChange={handleChange} className="AddToList-input" placeholder="Image URL"  />
           <textarea name="note" value={input.note} onChange={handleChange} className="AddToList-input" placeholder="Notes" />
           <button className="AddToList-btn" onClick={handleClick}>Add To list</button>
        </div>
    )
}
export default AddToList;

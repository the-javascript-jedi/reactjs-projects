import React,{useState} from 'react'
const AddToList:React.FC = () => {
    const [input,setInput]=useState({
        name:"",
        age:"",
        note:"",
        img:""
    })
    // handle change 
    const handleChange=(e:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)=>{
        setInput({
            ...input,
            [e.target.name]:e.target.value
        })
    }
    return (
        <div className="AddToList">
           <input type="text" name="name" value={input.name} onChange={handleChange} className="AddToList-input" placeholder="Name"  />
           <input type="text" name="age" value={input.age} onChange={handleChange} className="AddToList-input" placeholder="Age"  />
           <input type="text" name="img" value={input.img} onChange={handleChange} className="AddToList-input" placeholder="Image URL"  />
           <textarea name="note" value={input.note} onChange={handleChange} className="AddToList-input" placeholder="Notes" />
        </div>
    )
}
export default AddToList;

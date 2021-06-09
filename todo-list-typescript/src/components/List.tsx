import React from 'react'
//interface for props
import {IState as IProps} from '../App'

// const List= (props:IProps)- we can also specify the type of props
const List:React.FC<IProps>= (props) => {
    //render list - returns type JSX.Element[] - (hower over the renderList keyword)
    const renderList=():JSX.Element[]=>{
        return props.people.map((person)=>{
            return <li className="List">
                <div className="List-header">
                    <img src={person.url} alt="" className="List-img" />
                    <h2>{person.name}</h2>
                </div>
                <p>{person.age} years old</p>
                <p className="List-note">{person.note}</p>
            </li>
        })
    }
    return (
        <ul>
            {
                renderList()
            }
        </ul>
    )
}

export default List

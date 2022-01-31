import React from 'react';
import { useState } from 'react';

function RatingSelect({select}) {
 const [selected, setSelected] = useState(10);
 const ratingsArray=[1,2,3,4,5,6,7,8,9,10]
 const handleChange = (e) => {
     console.log(e.target);
     //+ is used to convert to number
    setSelected(+e.currentTarget.value)
    select(+e.currentTarget.value)
  }
return <ul className='rating'> {
    ratingsArray.map((rating)=>{
        return <li>
        <input
          type='radio'
          id={`num+${rating}`}
          name='rating'
          value={rating}
          onChange={handleChange}
          checked={selected === rating}
        />
        <label htmlFor={`num+${rating}`}>{rating}</label>
      </li>
    })
}     
      </ul>

// return <ul className='rating'> <li>
//         <input
//           type='radio'
//           id='num1'
//           name='rating'
//           value='1'
//           onChange={handleChange}
//           checked={selected === 1}
//         />
//         <label htmlFor='num1'>1</label>
//       </li>
//       <li>
//         <input
//           type='radio'
//           id='num2'
//           name='rating'
//           value='2'
//           onChange={handleChange}
//           checked={selected === 2}
//         />
//         <label htmlFor='num2'>2</label>
//       </li>
      
//       </ul>
 
}

export default RatingSelect;

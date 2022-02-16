import React from 'react'

const Slide = ({title,text}) => {
  return (
    <div>Slide<br/>
    <h3>Slide Title: {title}</h3>
    <p>Slide Text: {text}</p>
    </div>
  )
}

export default Slide
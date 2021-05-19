import React,{useState} from "react";
import "./App.css";
import Slider from "./Slider";
import SidebarItem from "./SidebarItem";
const DEFAULT_OPTIONS=[
  {
    name:'Brightness',
    property:'brightness',
    value:100,
    range:{
      min:0,
      max:200
    },
    unit:'%'
  },
  {
    name:'Contrast',
    property:'contrast',
    value:100,
    range:{
      min:0,
      max:200
    },
    unit:'%'
  },
  {
    name:'Saturation',
    property:'saturate',
    value:100,
    range:{
      min:0,
      max:200
    },
    unit:'%'
  },
  {
    name:'Grayscale',
    property:'grayscale',
    value:0,
    range:{
      min:0,
      max:100
    },
    unit:'%'
  },
  {
    name:'Sepia',
    property:'sepia',
    value:0,
    range:{
      min:0,
      max:100
    },
    unit:'%'
  },
  {
    name:'Hue Rotate',
    property:'hue-rotate',
    value:0,
    range:{
      min:0,
      max:360
    },
    unit:'deg'
  },
  {
    name:'Blur',
    property:'blur',
    value:0,
    range:{
      min:0,
      max:20
    },
    unit:'px'
  }
]
function App() {
// all the available options
 const [options,setOptions]=useState(DEFAULT_OPTIONS);
 //setting a default selected option
 //by default we choose the first option
 const [selectedOptionIndex,setSelectedOptionIndex]=useState(0);
 //getting the currently selected option
 const selectedOption=options[selectedOptionIndex];

//  slider change event
function handleSliderChange({target}){
  // console.log("target",target);
  // we use previous options as params to the function--using useState we can access previous state values
  setOptions(prevOptions =>{
    // console.log("prevOptions",prevOptions);
    return prevOptions.map((option,index)=>{
      // if our index is not equal to our selected index, this option is not the one we selected so we just return the option and not change it
      if(index!==selectedOptionIndex){
        return option;
      }
      // if the option is the one we currently selected, we retun new object for our option the value alone will be set from the slider
      else{
        return {...option, value:target.value}
      }
    })

  })
}
// This creates a string of our different filters to be added to the style
function getImageStyle(){
  const filters=options.map(option=>{
    return `${option.property}(${option.value}${option.unit})`
  })
  // we are using filter property in css, and array of filters is converted to string
  return{filter:filters.join(' ')}
}
  return (
    <div className="container">
      <div className="main-image" style={getImageStyle()}></div>
      <div className="sidebar">
        {
          options.map((option,index)=>{
            return(
              <SidebarItem key={index} name={option.name}
              //we send active = true if our index is equal to the selectedOptionIndex
              active={index===selectedOptionIndex}
              handleClick={()=>{setSelectedOptionIndex(index)}}
              />
            )
          })
        }
      </div>
      <Slider 
      min={selectedOption.range.min}
      max={selectedOption.range.max}
      value={selectedOption.value}
      handleChange={handleSliderChange}      
      />
    </div>
  );
}
export default App;

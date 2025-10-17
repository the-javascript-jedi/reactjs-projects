import React, { useState } from "react";
import "./Accordion.css";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// multiple=false means multiple card items cannot be opened at the same time
const Accordion = ({ data, multiple = false }) => {
  // state shows index of current active item
  const [active, setActive] = useState(0);

  return (
    <div className="custom-accordion">
      {data.map((tab, index) => (
        // destructure all the tab values(i.e title and content)
        <AccordionItem
          key={index}
          {...tab}
          // set active flag if current accordion active or not
          //check if active and current index are the same
          active={active === index}
          multiple={multiple}
          // pass callback to update the state
          //if we click on other item which is not currently active we will close current item and open the new item
          //if the current active item is the current index then we will make it as null
          onToggle={(e) => setActive((a) => (a === index ? "" : index))}
        />
      ))}
    </div>
  );
};
const AccordionItem = ({ title, content, active, multiple, onToggle }) => {
  const [visibility, setVisibility] = useState(false);
  // function to manage visibility for multiple items
  // if multiple we need to implement this based on local state visibility
  // if not multiple we need to take the parent state active (active is the visibility of parent state)
  // conditionally get local state or parent state visibility
  const isActive = () => (multiple ? visibility : active);
  //click event
  const toggleVisibility = () => {
    setVisibility((v) => !v);
    // Everytime something happens it will apply local state as well as parent state
    onToggle();
  };

  return (
    <div className={`card ${isActive() ? "accordion-active" : ""}`}>
      <div className="card-header" onClick={toggleVisibility}>
        {title}
        <span className="accordion-icon">
          <FontAwesomeIcon icon={faChevronRight} />
        </span>
      </div>
      <div className="card-body">{content}</div>
    </div>
  );
};
export default Accordion;

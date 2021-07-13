import React, { useState } from "react";
import "./Accordion.css";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Accordion = ({ data }) => {
  return (
    <div className="custom-accordion">
      {data.map((tab, index) => (
        // destructure all the tab values(i.e title and content)
        <AccordionItem key={index} {...tab} />
      ))}
    </div>
  );
};
const AccordionItem = ({ title, content }) => {
  const [visibility, setVisibility] = useState(false);

  const toggleVisibility = () => {
    setVisibility((v) => !v);
  };

  return (
    <div className={`card ${visibility ? "accordion-active" : ""}`}>
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

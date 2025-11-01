import React from 'react';
import PropTypes from "prop-types";
function Card({children,reverse}) {
  // Conditional class
  return <div className={`card ${reverse&&'reverse'}`}>{children}</div>;
}

Card.defaultProps={
   reverse:false 
}

Card.propTypes={
    children:PropTypes.node.isRequired,
}

export default Card;

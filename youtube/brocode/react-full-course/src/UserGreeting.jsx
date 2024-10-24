import React from "react";
import PropTypes from "prop-types";
function UserGreeting(props) {
  const welcomeMessage = <div>Welcome {props.username}</div>;
  const loginPrompt = <div>Please Login to continue</div>;

  return props.isLoggedIn ? welcomeMessage : loginPrompt;
}
UserGreeting.propTypes = {
  isLoggedIn: PropTypes.bool,
  username: Proptypes.string,
};
UserGreeting.defaultProps = {
  isLoggedIn: false,
  username: "Guest",
};
export default UserGreeting;

import React from "react";
// useSelector to access the redux state
import { useSelector } from "react-redux";
const Profile = () => {
  // Step 6 - useSelector to display state data
  const user = useSelector((state) => state.user.value);
  const themeColor = useSelector((state) => state.theme.value);
  return (
    <div style={{ color: themeColor }}>
      <h1>Profile</h1>
      <p>Name:{user.name}</p>
      <p>Age:{user.age}</p>
      <p>Email:{user.email}</p>
    </div>
  );
};
export default Profile;

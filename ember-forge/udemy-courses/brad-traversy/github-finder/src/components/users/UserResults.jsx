import { useEffect, useState } from "react";
// import Spinner from "../layout/Spinner";
import UserItem from "./UserItem";

const UserResults = () => {
  useEffect(() => {
    fetchUsers();
  }, []);

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    const response = await fetch(`${import.meta.env.VITE_GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
      },
    });
    const data = await response.json();
    console.log("data", data);
    if (Array.isArray(data)) {
      setUsers(data);
    } else {
      console.log("API Error:", data);
      setUsers([]); // fallback to empty array
    }
    setLoading(false);
  };
  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {/* {users && users.map((user) => <h3>{user.login}</h3>)} */}
        {users && users.map((user) => <UserItem key={user.id} user={user} />)}
      </div>
    );
  } else {
    return <h3>{/* <Spinner /> */}</h3>;
  }
};

export default UserResults;

import { useState } from "react";
import { useSelector } from "react-redux";

const UserSearch = () => {
  const [text, setText] = useState("");
  const { users } = useSelector((state) => state.users);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      alert("Please enter something");
    } else {
      console.log("search users", text);
      setText("");
    }
  };
  console.log("users", users);
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                className="w-full pr-40 bg-gray-200 input input-lg text-black"
                placeholder="Search"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <button
                type="submit"
                className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      <div>
        {users && users.length > 0 && (
          <button className="btn btn-ghost btn-lg" onClick={() => setText("")}>
            Clear
          </button>
        )}
      </div>
    </div>
  );
};

export default UserSearch;

import { getUserRepos } from "../../features/users/usersSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import RepoItem from "./RepoItem";

const RepoList = () => {
  const { login } = useParams();

  const dispatch = useDispatch();
  const repos = useSelector((state) => state.users.repos);
  const loading = useSelector((state) => state.users.loading);

  useEffect(() => {
    if (!login) return;
    dispatch(getUserRepos(login));
  }, [login, dispatch]);
  return (
    <div className="rounded-lg shadow-md card bg-base-100">
      <div className="card-body">
        <h2 className="text-3xl my-4 font-bold card-title">Latest Repositories</h2>
        {repos.map((repo) => (
          <RepoItem key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
};

export default RepoList;

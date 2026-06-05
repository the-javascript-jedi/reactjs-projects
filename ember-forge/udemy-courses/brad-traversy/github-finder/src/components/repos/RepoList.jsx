import { getUserRepos } from "../../features/users/usersSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";

const RepoList = () => {
  const { login } = useParams();

  const dispatch = useDispatch();
  const { respose, loading } = useSelector((state) => state.users);
  useEffect(() => {
    if (!login) return;
    dispatch(getUserRepos(login));
  }, [login, dispatch]);
  return <div>RepoList</div>;
};

export default RepoList;

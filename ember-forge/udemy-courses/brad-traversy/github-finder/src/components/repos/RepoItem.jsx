import { FaEye, FaStar, FaInfoCircle, FaLink, FaCodeBranch } from "react-icons/fa";

const RepoItem = ({ repo }) => {
  const { name, description, html_url, forks, open_issues, watchers_count, stargazers_count } = repo;

  return (
    <div className="mb-2 rounded-md card card-body bg-gray-800">
      <div className="flex items-center gap-2">
        <FaLink className="text-gray-400" />
        <a href={html_url} target="_blank" rel="noreferrer" className="text-info font-bold hover:underline">
          {name}
        </a>
      </div>
      {description && <p className="text-sm text-gray-400 mt-1">{description}</p>}
      <div className="flex gap-4 text-sm mt-2">
        <span className="flex items-center gap-1 text-info">
          <FaEye /> {watchers_count}
        </span>
        <span className="flex items-center gap-1 text-warning">
          <FaStar /> {stargazers_count}
        </span>
        <span className={`flex items-center gap-1 ${open_issues > 0 ? "text-error" : "text-success"}`}>
          <FaInfoCircle /> {open_issues}
        </span>
        <span className="flex items-center gap-1 text-success">
          <FaCodeBranch /> {forks}
        </span>
      </div>
    </div>
  );
};

export default RepoItem;

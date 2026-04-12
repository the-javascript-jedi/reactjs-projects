import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = ({ title }) => {
  return (
    <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left */}
        <div className="flex items-center">
          <FaGithub className="text-3xl mr-2" />
          <Link to="/" className="text-lg font-bold">
            {title}
          </Link>
        </div>

        {/* Right */}
        <div>
          <Link to="/" className="btn btn-ghost btn-sm rounded-btn">
            Home
          </Link>
          <Link to="/about" className="btn btn-ghost btn-sm rounded-btn">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

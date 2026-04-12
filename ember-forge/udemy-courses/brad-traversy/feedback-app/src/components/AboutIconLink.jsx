import { Link } from "react-router-dom";
const AboutIconLink = () => {
  return (
    <div className="about-link">
      <Link to="/about">
        <p className="about-icon">
          <i class="fa fa-question-circle" aria-hidden="true"></i>
        </p>
      </Link>
    </div>
  );
};
export default AboutIconLink;

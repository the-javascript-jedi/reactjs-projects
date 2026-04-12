import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div>
      <h1>AboutPage</h1>
      <div>This is the about page</div>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default AboutPage;

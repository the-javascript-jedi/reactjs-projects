import React, { useState } from "react";
import "./App.css";
import useFetchJobs from "./useFetchJobs";
import { Container } from "react-bootstrap";
import Jobs from "./Components/Jobs";
function App() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, error } = useFetchJobs(params, page);

  return (
    <Container>
      {loading && <h1>Loading</h1>}
      {error && <h1>Error Try Refreshing {error}</h1>}
      {/* ui for jobs card */}
      <h1>
        {jobs.map((job) => {
          return <Jobs key={job.id} job={job} />;
        })}
      </h1>
    </Container>
  );
}
export default App;

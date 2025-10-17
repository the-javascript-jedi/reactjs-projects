import React, { useState } from "react";
// custom hook
import useFetchJobs from "./useFetchJobs";
import { Container } from "react-bootstrap";
function App() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, error } = useFetchJobs(params, page);

  return (
    // Container is used from react-bootstrap
    <Container>
      {/* if loading is true the loading message is displayed */}
      {loading && <h1>Loading...</h1>}
      {/* if error is false the error message is not displayed */}
      {error && <h1>Error. Try Refreshing...</h1>}
      {<h1>{jobs.length}</h1>}
    </Container>
  );
}
export default App;

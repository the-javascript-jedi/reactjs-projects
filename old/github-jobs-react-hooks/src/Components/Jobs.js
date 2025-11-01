import React from "react";
import { Card, Badge } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
const Jobs = ({ job }) => {
  return (
    <Card>
      <Card.Body>
        <div className="d-flex justify-content-between">
          <div>
            <Card.Title>
              {job.title} -{" "}
              <span className="text-muted font-weight-light">
                {job.company}
              </span>
            </Card.Title>
            <Card.Subtitle>
              {new Date(job.created_at).toLocaleDateString()}
            </Card.Subtitle>
            <Badge variant="secondary">{job.type}</Badge>
            <Badge variant="success">{job.location}</Badge>
            <div style={{ wordBreak: "break-all" }}>
              <ReactMarkdown source={job.how_to_apply}></ReactMarkdown>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Jobs;

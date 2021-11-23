import "./RepositoryFrame.css";
import React from "react";

const Repositoryframe = ({
  owner,
  repositoryName,
  openIssues,
  defaultBranch,
}) => {
  return (
    <div className="repository-wrapper">
      <div className="owner">Owner:{owner}</div>
      <div className="repo">{repositoryName}</div>
      <div className="owner">Open Issues:{openIssues}</div>
      <div className="owner">DefaultBranch:{defaultBranch}</div>
    </div>
  );
};

export default Repositoryframe;

import React from "react";
import { useParams } from "react-router";
import Kriblink from "./Kriblink";
import ThriftFinder from "./ThriftFinder";

function ProjectDetails() {
  const { id } = useParams();

  console.log(id);

  // switch statement to render dynamic layout for projects
  switch (id) {
    case "kriblink":
      return <Kriblink />;
    // break;
    case "thrift-finder":
      return <ThriftFinder />;
    // code block
    // break;
    default:
      return <div>project not found</div>;
    // code block
  }
}

export default ProjectDetails;

import React from "react";
import { useParams } from "react-router";
import Kriblink from "./Kriblink";
import ThriftFinder from "./ThriftFinder";
import Sendi from "./Sendi";
import BettaUI from "./BettaUI";

function ProjectDetails() {
  const { id } = useParams();

  // console.log(id);

  // switch statement to render dynamic layout for projects
  switch (id) {
    case "kriblink":
      return <Kriblink />;
    case "sendi":
      return <Sendi />;
    // break;
    case "betta-ui":
      return <BettaUI />;
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

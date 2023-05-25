import React from "react";
import Job from "./Job";

const Jobs = ({ data }) => {
  return data?.map((d) => {
    return <Job key={d.id} data={d} />;
  })
};

export default Jobs;

import React from "react";

const Container = ({ children }) => {
  return <div className="mx-auto max-w-[1100px] p-4 md:p-5 bg-white mt-6 rounded-3xl relative overflow-hidden">{children}</div>;
};

export default Container;
import React from "react";

const Bar = (props) => {
  const { bgcolor, completed } = props;
  return (
    <div>
      <div>
        <span>{`${completed}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
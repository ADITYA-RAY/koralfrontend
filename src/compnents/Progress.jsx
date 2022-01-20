import React from "react";
export const Progress = (props) => {
  const value = props.value;
  const progress = {
    width: value,
    backgroundColor: props.color,
  };
  return (
    <div>
      <div className="progress_out">
        <div className="progress_in" style={progress}>
          <div className="progress_text">{props.text}</div>
          <div className="progress_percent">{props.value}</div>
        </div>
      </div>
    </div>
  );
};

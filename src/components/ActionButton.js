import React from "react";

const ActionButton = ({content, onClicked}) => {
  return (
    <button onClick={onClicked}>{content}</button>
  )
};

export default ActionButton;
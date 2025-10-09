import React from "react";

const Child = (props) => {
  return (
    <div>
        <h2> Name: {props.name} </h2>
        <h4> Email: {props.email} </h4>
    </div>
  );
}   
export default Child;
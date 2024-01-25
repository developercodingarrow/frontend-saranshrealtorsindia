import React from "react";

export default function FillterInput(props) {
  const { handelsearch, searchTerm } = props;
  return (
    <div>
      <input
        type="text"
        placeholder="search project"
        value={searchTerm}
        onChange={handelsearch}
      />
    </div>
  );
}

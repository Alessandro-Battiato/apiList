import React from "react";

const Filter = (props) => {
  return (
    <form onSubmit={props.onClick}>
      <div className="inner-form">
        <input
          placeholder="Search for an API..."
          type="text"
          className="input"
          value={props.value}
          onChange={props.onChange}
        />
        <button type="button" className="btn" onClick={props.onClick}>
          Search
        </button>
      </div>
    </form>
  );
};

export default Filter;

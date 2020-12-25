import React from "react";

function SearchBox({searchfield,searchChange}): JSX.Element {
  return (
    <>
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        name=""
        id=""
        placeholder="search robots"
        onChange={searchChange}
      />
    </>
  );
}

export default SearchBox;

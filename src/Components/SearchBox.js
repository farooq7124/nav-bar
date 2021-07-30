import React, { Fragment } from "react";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { Highlighter, Typeahead } from "react-bootstrap-typeahead"; // ES2015
const options = [
  {
    label: "Quick Links",
    links: ["Shop Apple Store Online", "Accessories"],
  },
];

function SearchBox({ open, setSearch }) {
  return (
    <Typeahead
      id="basic-example"
      size="sm"
      options={options}
      placeholder="Seach apple.com"
      open={open}
      clearButton
      onChange={() => setSearch(false)}
      defaultSelected={options.slice(0, 1)}
      renderMenuItemChildren={(option, { text }, index) => (
        <Fragment>
          <Highlighter search={text}>{option.label}</Highlighter>,
          {option.links.map((item) => (
            <div>
              <small> {item}</small>
            </div>
          ))}
        </Fragment>
      )}
    />
  );
}

export default SearchBox;

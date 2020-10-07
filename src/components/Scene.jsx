import React from "react";
import PropTypes from "prop-types";

import WindowButton from "./window/WindowButton";

const Scene = ({ options, children }) => (
  <div className="p-2 sm:p-4 md:p-6 lg:p-8">
    {children}
    <ul className="leading-none">
      {options.map((option, i) => (
        <WindowButton key={i} onClick={option.onSelect}>
          {option.text}
        </WindowButton>
      ))}
    </ul>
  </div>
);

Scene.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      onSelect: PropTypes.func.isRequired,
    })
  ),
};

export default Scene;

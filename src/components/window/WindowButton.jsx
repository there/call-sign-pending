import React from "react";
import PropTypes from "prop-types";

const WindowButton = ({ onClick, children }) => (
  <li>
    <button
      className="border-2 rounded border-black p-1 m-1 shadow bg-gray-500"
      type="button"
      onClick={onClick}
    >
      <div className="border border-dotted rounded-sm border-black p-1 text-xl">
        {children}
      </div>
    </button>
  </li>
);

WindowButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};

export default WindowButton;

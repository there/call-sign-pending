import React from "react";
import PropTypes from "prop-types";

const WindowFieldset = ({ legend, children }) => (
  <div>
    <div className="absolute mx-3 bg-gray-500 font-black -mt-4 px-1">
      {legend}
    </div>
    <div className="border-2 border-black rounded-sm inner-shadow mt-8 pt-5">
      {children}
    </div>
  </div>
);

WindowFieldset.propTypes = {
  legend: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default WindowFieldset;

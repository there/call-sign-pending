import React from "react";
import PropTypes from "prop-types";

import Emoji from "./Emoji";

const Icon = ({ icon, label, title, small, onClick }) => (
  <button
    className={`${
      small ? `w-10 h-10` : `w-24 h-24`
    } transition duration-500 hover:bg-blue-500 hover:bg-opacity-25 rounded text-lg leading-none text-white`}
    type="button"
    onClick={onClick}
    title={title || label}
  >
    <div className="flex flex-col items-center">
      <Emoji emoji={icon} />
      {label && <div className="mt-1">{label}</div>}
    </div>
  </button>
);

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string,
  title: PropTypes.string,
  small: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Icon;

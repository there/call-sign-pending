import React from "react";
import PropTypes from "prop-types";

import Emoji from "../Emoji";
import Icon from "../Icon";

const Window = ({ title, icon, onClose, children }) => (
  <div className="bg-gray-500 shadow-2xl p-1 border border-black rounded-sm">
    {icon && (
      <div className="flex space-x-1 bg-blue-900 p-1 rounded-sm text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
        <Emoji emoji={icon} />
        <div className="flex-grow font-black text-white">{title}</div>
        {onClose && <Icon icon="❌" title="Close" onClick={onClose} small />}
      </div>
    )}
    {children}
  </div>
);

Window.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  onClose: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Window;

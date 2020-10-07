import React from "react";
import PropTypes from "prop-types";

import Window from "./window/Window";
import WindowButton from "./window/WindowButton";
import WindowFieldset from "./window/WindowFieldset";
import Portrait from "./Portrait";
import Icon from "./Icon";

const Customizer = ({ title, onClose }) => {
  return (
    <div className="w-full absolute sm:p-1 md:p-2 lg:p-4 top-0">
      <Window title={title} icon="👩‍🦲" onClose={onClose}>
        <div className="flex flex-col xl:flex-row">
          <div className="sm:p-1 md:p-2 lg:p-4">
            <div className="w-64 h-64 mx-auto my-2 sm:my-4 md:my-8">
              <Portrait />
            </div>
            <ul className="sm:mb-1 md:mb-2 lg:mb-4 text-center">
              <WindowButton onClick={onClose}>Save</WindowButton>
            </ul>
          </div>
          <div className="flex-grow w-full p-1 sm:p-2 md:p-4 lg:p-8">
            <WindowFieldset legend="Choose category:">
              <div className="w-full whitespace-no-wrap overflow-x-scroll text-center">
                <Icon icon="🎲" title="Randomize" small />
                <Icon icon="👩‍🦲" title="Face" small />
                <Icon icon="🦰" title="hair" small />
                <Icon icon="👂" title="Ears" small />
                <Icon icon="👀" title="Eyes" small />
                <Icon icon="👃" title="Nose" small />
                <Icon icon="👄" title="Mouth" small />
                <Icon icon="🎽" title="Undershirt" small />
                <Icon icon="👕" title="Top" small />
                <Icon icon="🧥" title="Outerwear" small />
                <Icon icon="🧣" title="Neck" small />
                <Icon icon="💄" title="Makeup" small />
                <Icon icon="🤠" title="Headwear" small />
                <Icon icon="🌆" title="Background" small />
              </div>
            </WindowFieldset>
            <WindowFieldset legend="All items:">
              <Icon icon="✖" title="None" />
              <Icon icon="👓" title="Glasses" />
              <Icon icon="🧢" title="Cap" />
              <Icon icon="👒" title="Sun hat" />
              <Icon icon="👕" title="Striped t-shirt" />
              <Icon icon="👚" title="Button-down shirt" />
              <Icon icon="👔" title="Dress shirt and tie" />
            </WindowFieldset>
          </div>
        </div>
      </Window>
    </div>
  );
};

Customizer.propTypes = {
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Customizer;

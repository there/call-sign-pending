import React, { useState } from "react";
import PropTypes from "prop-types";

import Emoji from "./Emoji";
import Icon from "./Icon";

const TaskBar = ({ startIcon, startText, onClickStart, pins }) => {
  let [isCreditsActive, setIsCreditsActive] = useState(false);
  const date = new Date();
  return (
    <React.Fragment>
      {isCreditsActive && (
        <div className="w-screen h-screen fixed top-0 bg-teal-900 bg-opacity-75 p-8 text-white">
          <p>CALL SIGN PENDING is the working title of an interactive fiction game, based on my experiences in college radio and all of the weird and wonderful chaos that goes into keeping a community radio station afloat.</p>
          <br/>
          <p>This is an initial prototype of the UI with some filler story text to demonstrate character dialogue and choice menus. Ideally parts of this game will eventually resemble point-and-click games, e.g., the dorm room choice menu would be replaced with interactive environment art. But I'd like to build the first version of this story as a compelling text-only adventure, before introducing art assets.</p>
        </div>
      )}
      <div className="flex bg-gray-500 border-t-2 w-full fixed bottom-0">
        <button
          className="flex items-center font-black border-2 border-black px-1 m-1 rounded-sm"
          type="button"
          title={startText}
          onClick={onClickStart}
        >
          <Emoji emoji={startIcon} />
          <span className="hidden sm:inline">{startText}</span>
        </button>
        <div className="border-l-2 m-1 flex-grow flex pl-1 items-center">
          {pins.map((pin, i) => (
            <Icon key={i} {...pin} small />
          ))}
        </div>
        <div className="flex items-center border-2 rounded-sm m-1 pr-1">
          <Icon
            icon="ℹ"
            title="About"
            onClick={() => setIsCreditsActive(!isCreditsActive)}
            small
          />
          <Icon icon="⚙" title="Settings" onClick={() => {}} small />
          <Icon icon="🔊" title="Sound" onClick={() => {}} small />
          <button type="button" title={date.toTimeString()}>
            {date.getHours()}:{date.getMinutes().toString().padStart(2, "0")}
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

TaskBar.propTypes = {
  startIcon: PropTypes.string.isRequired,
  startText: PropTypes.string.isRequired,
  onClickStart: PropTypes.func.isRequired,
  pins: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
    })
  ),
};

export default TaskBar;

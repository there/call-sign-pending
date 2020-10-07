import React from "react";
import PropTypes from "prop-types";

import Window from "../../window/Window";

const Browser = ({ onClose }) => (
  <Window onClose={onClose} title="Schedule - Indienet Explorer" icon="🌐">
    <div className="flex mx-1 my-2">
      <div className="hidden sm:inline border-l-2 px-2 pt-1">Address</div>
      <div className="rounded-tl-full rounded-bl-full border-t-4 border-b-4 border-l-4 bg-white p-3"></div>
      <div className="flex-grow border-t-4 border-b-4">
        <input
          type="url"
          className="w-full"
          placeholder="wmuc.umd.edu/schedule"
          spellCheck="false"
        ></input>
      </div>
      <div className="rounded-tr-full rounded-br-full border-t-4 border-b-4 border-r-4 bg-white p-3"></div>
    </div>
    <div className="bg-white border-2 shadow-inner m-1 p-1 font-serif">
      <p>DEVELOPER'S NOTE: Not a real browser, not a real address bar! The player character's computer exists separately from the inkjs story data, but content may be updated based on certain story progression. The main "website" they'll be introduced to is the radio station's website, where they can view the schedule of shows and the profiles of different DJs (NPCs). This can be useful when trying to locate a certain NPC at a certain time of day, or discovering certain trivia from their DJ profile that may be useful in a quest.</p>
      <br/>
      <p>The address bar only works for in-game websites where the URL is known. This serves as a puzzle mechanic for content discovery; e.g., URLs might be listed on flyers or notes hidden around campus, leading to info about a secret show.</p>
      <br/>
      <p>The time period this game takes place in is a little ambiguous in regards to technology; e.g., we have campus ethernet, but no smartphones. The horror.</p>  
    </div>
  </Window>
);

Browser.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Browser;

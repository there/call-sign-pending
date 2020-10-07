import React from "react";
import PropTypes from "prop-types";

import Twemoji from "react-twemoji";

const Emoji = ({ emoji }) => (
  <div className="flex items-center h-8 w-8">
    <Twemoji
      style={{
        filter:
          "drop-shadow(1px 1px 0 #000) drop-shadow(-1px 1px 0 #000) drop-shadow(1px -1px 0 #000) drop-shadow(-1px -1px 0 #000)",
      }}
      className="w-6 mx-auto"
      options={{ folder: "svg", ext: ".svg" }}
    >
      {emoji}
    </Twemoji>
  </div>
);

Emoji.propTypes = {
  emoji: PropTypes.string.isRequired,
};

export default Emoji;

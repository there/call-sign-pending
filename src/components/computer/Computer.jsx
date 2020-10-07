import React, { useState } from "react";
import PropTypes from "prop-types";

import Browser from "./apps/Browser";
import Chat from "./apps/Chat";
import Icon from "../Icon";
import TaskBar from "../TaskBar";
import Customizer from "../Customizer";

const Computer = ({ onLogout }) => {
  const [isDesktopActive, setIsDesktopActive] = useState(true);
  const [isChatActive, setIsChatActive] = useState(false);
  const [isBrowserActive, setIsBrowserActive] = useState(false);
  const [isCustomizerActive, setIsCustomizerActive] = useState(false);

  const showDesktop = () => {
    setIsChatActive(false);
    setIsBrowserActive(false);
    setIsCustomizerActive(false);
    setIsDesktopActive(true);
  };

  const showChat = () => {
    setIsDesktopActive(false);
    setIsChatActive(true);
    setIsCustomizerActive(false);
    setIsBrowserActive(false);
  };

  const showBrowser = () => {
    setIsDesktopActive(false);
    setIsChatActive(false);
    setIsCustomizerActive(false);
    setIsBrowserActive(true);
  };

  const showCustomizer = () => {
    setIsDesktopActive(false);
    setIsChatActive(false);
    setIsBrowserActive(false);
    setIsCustomizerActive(true);
  };

  const pinnedApps = [
    {
      icon: "🌐",
      title: "Indienet Explorer",
      onClick: showBrowser,
    },
    {
      icon: "💬",
      title: "Chat",
      onClick: showChat,
    },
  ];

  return (
    <React.Fragment>
      <div className="p-1 absolute top-0 left-0 bg-teal-500 w-full h-full">
        <div className="sm:p-1 md:p-2 lg:p-4">
          {isDesktopActive && (
            <div className="grid grid-rows-3 grid-flow-col p-1">
              <Icon icon="🌐" label="Indienet Explorer" onClick={showBrowser} />
              <Icon icon="💬" label="Messenger" onClick={showChat} />
              <Icon icon="🚪" label="Logout" onClick={onLogout} />
              <Icon icon="🎵" label="Music" />
              <Icon icon="📂" label="New folder" />
              <Icon icon="💥" label="Sweeping Mines" />
            </div>
          )}
          {!isDesktopActive && isChatActive && <Chat onClose={showDesktop} />}
          {!isDesktopActive && isBrowserActive && (
            <Browser onClose={showDesktop} />
          )}
          {!isDesktopActive && isCustomizerActive && (
            <Customizer title="Update user picture" onClose={showDesktop} />
          )}
        </div>
      </div>
      <TaskBar
        startIcon="🍎"
        startText="Start"
        onClickStart={showCustomizer}
        pins={pinnedApps}
      />
    </React.Fragment>
  );
};

Browser.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Computer;

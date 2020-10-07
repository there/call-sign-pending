import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getVisits, jumpTo } from "../state/actions";

import TaskBar from "./TaskBar";
import Window from "./window/Window";
import WindowButton from "./window/WindowButton";
import Icon from "./Icon";

const Bag = ({ currLocation, keyItems, jumpTo }) => {
  const [isBagActive, setIsBagActive] = useState(false);
  const [isNotebookActive, setIsNotebookActive] = useState(false);
  const [isRadioActive, setIsRadioActive] = useState(false);
  const [isMapActive, setIsMapActive] = useState(false);

  const toggleBag = () => {
    setIsMapActive(false);
    setIsNotebookActive(false);
    setIsRadioActive(false);
    setIsBagActive(!isBagActive);
  };

  const showNotebook = () => {
    setIsMapActive(false);
    setIsRadioActive(false);
    setIsBagActive(true);
    setIsNotebookActive(true);
  };

  const showRadio = () => {
    setIsMapActive(false);
    setIsNotebookActive(false);
    setIsBagActive(true);
    setIsRadioActive(true);
  };

  const showMap = () => {
    setIsNotebookActive(false);
    setIsRadioActive(false);
    setIsBagActive(true);
    setIsMapActive(true);
  };

  const jump = (knotName) => {
    jumpTo(knotName);
    setIsBagActive(false);
  };

  const locations = [
    {
      tag: "station",
      text: "The radio station.",
    },
    {
      tag: "dorm",
      text: "Your dorm.",
    },
  ];

  const showLocation = (knotName) =>
    getVisits(knotName) > 1 && knotName !== currLocation;

  const pinnedItems = keyItems.map((item) => ({
    ...item,
    label: undefined,
    onClick: showMap,
  }));
  return (
    <React.Fragment>
      {isBagActive && (
        <div className="h-screen w-full p-1 sm:p-2 md:p-3 lg:p-4 grid grid-flow-col lg:grid-cols-2 bg-teal-900 bg-opacity-75 absolute top-0 left-0">
          <div>
            {!keyItems.length && (
              <div className="text-white">
                {/* Your bag is empty. Your spine thanks you. */}
              </div>
            )}
            {keyItems.map((item, i) => (
              <Icon key={i} {...item} onClick={showMap} />
            ))}
            <Icon
              icon="📓"
              label="Notebook"
              title="Jot down some notes in here."
              onClick={showNotebook}
            />
            <Icon
              icon="📻"
              label="Radio"
              title="Portable radio is good radio."
              onClick={showRadio}
            />
            <Icon icon="💿" label="Beth's mixtape" />
            <Icon
              icon="💳"
              label="Farecard"
              title="Valid fare for all bus, subway, and light rail trips in the metropolitan area."
            />
            <Icon
              icon="📷"
              label="Broken camera"
              title="A broken film camera. Maybe you can find someone to fix it..."
            />
            <Icon icon="🚲" label="Bike" title="A bag-sized bicycle." />
            <Icon icon="👓" label="Glasses" />
            <Icon icon="🧢" label="Cap" />
            <Icon icon="👒" label="Sun hat" />
            <Icon
              icon="📼"
              label="VHS tape"
              title="Picked up from the library archives. I wonder what's on it?"
            />
            <Icon icon="🔨" label="Hammer" title="Great for crushing CDs." />
            <Icon
              icon="🥽"
              label="Goggles"
              title="Protect yourself from floorcore."
            />
            <Icon
              icon="🏏"
              label="Cricket bat"
              title="Sort of okay at crushing CDs."
            />
            <Icon
              icon="🍀"
              label="4-leaf clover"
              title="Give this to someone who could use a little luck."
            />
            <Icon icon="🔋" label="Battery" title="Keep it juicy." />
            <Icon icon="📁" label="Folder" title="Photos, odds and ends." />
            <Icon icon="🔑" label="Key" title="Confidence is the key." />
            <Icon
              icon="📞"
              label="Phone"
              title="This feels like it shouldn't work without the phone body, but it does."
            />
          </div>
          <div className="p-1 sm:p-2 md:p-3 lg:p-4 absolute top-0 left-0 lg:relative w-full">
            {isMapActive && (
              <Window
                title="Map"
                icon="🗺"
                onClose={() => setIsMapActive(false)}
              >
                <div className="p-4 text-center">
                  A map of campus and the nearby city, with some of the metro
                  lines marked. Might take awhile to make sense of it all. Where
                  do you want to go?
                  <ul className="leading-none m-4">
                    {locations.map(
                      (location) =>
                        showLocation(location.tag) && (
                          <WindowButton
                            key={location.tag}
                            onClick={() => jump(location.tag)}
                          >
                            {location.text}
                          </WindowButton>
                        )
                    )}
                    <WindowButton onClick={() => setIsMapActive(false)}>
                      Not sure...
                    </WindowButton>
                  </ul>
                </div>
              </Window>
            )}
            {isNotebookActive && (
              <Window
                title="Notebook"
                icon="📓"
                onClose={() => setIsNotebookActive(false)}
              >
                <div className="p-4 text-center">
                  Jot down some notes in here.
                  <div className="bg-white border-2 shadow mt-6">
                    <div className="border-dotted border-t-8 mb-4"></div>
                    <div className="border-dashed border-t shadow-sm"></div>
                    <textarea
                      className="w-full p-4 text-xl leading-tight"
                      spellCheck="false"
                    ></textarea>
                  </div>
                </div>
              </Window>
            )}
            {isRadioActive && (
              <Window
                title="Radio"
                icon="📻"
                onClose={() => setIsRadioActive(false)}
              >
                <div className="p-4 text-center">
                  Portable radio is good radio.
                  <ul className="leading-none m-4">
                    <WindowButton onClick={() => {}}>
                      Dial into the station.
                    </WindowButton>
                    <WindowButton onClick={() => {}}>
                      Scan the other frequencies.
                    </WindowButton>
                    <WindowButton onClick={() => {}}>
                      Change the batteries.
                    </WindowButton>
                  </ul>
                </div>
              </Window>
            )}
          </div>
        </div>
      )}
      <TaskBar
        startIcon="🎒"
        startText="Bag"
        onClickStart={toggleBag}
        pins={pinnedItems}
      />
    </React.Fragment>
  );
};

Bag.propTypes = {
  keyItems: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const dispatchToProps = (dispatch) => ({
  jumpTo: (knotName) => dispatch(jumpTo(knotName)),
});

export default connect(null, dispatchToProps)(Bag);

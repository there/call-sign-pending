import React, { useState } from "react";
import { connect } from "react-redux";
import { makeChoice } from "./state/actions";

import Bag from "./components/Bag";
import Computer from "./components/computer/Computer";
import Customizer from "./components/Customizer";
import Dialogue from "./components/Dialogue";
import { KEY_ITEMS } from "./items";

const App = (props) => {
  // interface visibility
  const [isBagActive, setIsBagActive] = useState(true);
  const [isComputerActive, setIsComputerActive] = useState(false);
  const [isCustomizerActive, setIsCustomizerActive] = useState(false);
  const [keyItems, setKeyItems] = useState([]);

  const showBag = () => {
    setIsComputerActive(false);
    setIsBagActive(true);
  };

  const showComputer = () => {
    setIsBagActive(false);
    setIsComputerActive(true);
  };

  const addKeyItem = (item) => {
    setKeyItems([...keyItems, KEY_ITEMS[item]]);
  };

  // const dialogue = {
  //   Beth: [
  //     {
  //       mood: "😒",
  //       text:
  //         "someone stole the turntable needle again... ugh. i was rly looking forward to spinning the sleepening today",
  //     },
  //     {
  //       mood: "😮",
  //       text:
  //         "have u heard it before? its a synthpop concept album about underwater robots. hychondriac rereleased it cos they recently got the rights back to their catalog",
  //     },
  //     {
  //       mood: "🙂",
  //       text:
  //         "...anyway, could u ask liv if she can go replace the needle in fm?",
  //     },
  //   ],
  //   Liv: [
  //     {
  //       mood: "😮",
  //       text: "Oh... Hi Theresa.",
  //     },
  //     {
  //       mood: "😐",
  //       text:
  //         "No, I don't have a spare needle. John's taking care of that. I think SGA still has to clear the funds before he can order it. People are just gonna have to bring their own needles in for now.",
  //     },
  //     {
  //       mood: "😐",
  //       text: "...",
  //     },
  //     {
  //       mood: "🙂",
  //       text: "Umm, is there anything else you need?",
  //       options: [
  //         {
  //           text: "I have a record for you!",
  //           onSelect: closeDialogue,
  //         },
  //         {
  //           text: "No, that's all.",
  //           onSelect: closeDialogue,
  //         },
  //       ],
  //     },
  //   ],
  // };

  const { ending, tags, sceneText, currentChoices, makeChoice } = props;

  const customChoices = {
    dorm: [
      {
        text: "Log into computer.",
        onChoose: showComputer,
      },
      {
        text: "Change outfit.",
        onChoose: () => setIsCustomizerActive(true),
      },
    ],
  };

  return (
    <div className="App text-lg lg:text-xl xl:text-2xl select-none font-mono">
      {ending ? (
        "Ended"
      ) : (
        <Dialogue
          tags={tags}
          sceneText={sceneText}
          choices={currentChoices}
          makeChoice={makeChoice}
          addKeyItem={addKeyItem}
          customChoices={tags.location && customChoices[tags.location]}
        ></Dialogue>
      )}
      {isComputerActive && <Computer onLogout={showBag} />}
      {isBagActive && <Bag currLocation={tags.location} keyItems={keyItems} />}
      {isCustomizerActive && (
        <Customizer
          title="Update outfit"
          onClose={() => {
            setIsCustomizerActive(false);
          }}
        />
      )}
    </div>
  );
};

const stateToProps = (state) => ({
  tags: state.tags,
  currentChoices: state.currentChoices,
  sceneText: state.sceneText,
  ending: state.ending,
});

const dispatchToProps = (dispatch) => ({
  makeChoice: (idx) => dispatch(makeChoice(idx)),
});

export default connect(stateToProps, dispatchToProps)(App);

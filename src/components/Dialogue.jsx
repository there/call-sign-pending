import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { setName, getName, getVisits } from "../state/actions";
import { WindupChildren } from "windups";

import Window from "./window/Window";
import WindowButton from "./window/WindowButton";
import Portrait from "./Portrait";
import Emoji from "./Emoji";
import { MOODS } from "./emojis";

const Dialogue = ({
  tags,
  sceneText,
  choices,
  makeChoice,
  addKeyItem,
  customChoices,
}) => {
  const [nameValue, setNameValue] = useState("");
  const [isWindupActive, setIsWindupActive] = useState(true);
  const [currSceneText, setCurrSceneText] = useState(0);

  useEffect(() => {
    if (tags.location && getVisits(tags.location) > 1) {
      setIsWindupActive(false);
    }
  }, [tags.location]);

  const isTextRemaining = () => currSceneText < sceneText.length - 1;
  const isDisabled = () =>
    !isWindupActive && sceneText[currSceneText].length && !isTextRemaining();
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsWindupActive(true);
    setName(nameValue);
    makeChoice(0);
  };

  const handleClick = (choiceIndex) => {
    // if text is currently winding
    if (isWindupActive) {
      setIsWindupActive(false);
    }
    // if paragraphs are remaining
    else if (isTextRemaining()) {
      // begin winding up next paragraph
      setIsWindupActive(true);
      setCurrSceneText(currSceneText + 1);
    }
    // if last paragraph
    else {
      // reset paragraph index
      setCurrSceneText(0);
      // default to first choice if not specified
      const index = Number.isInteger(choiceIndex) ? choiceIndex : 0;
      // begin winding up choice consequences
      setIsWindupActive(true);
      makeChoice(index);
      // if choice has associated item
      if (tags.item) {
        // add item to inventory
        addKeyItem(tags.item);
      }
    }
  };

  const mood = MOODS[tags.mood];
  const speaker = tags.speaker;

  return (
    <div className="flex flex-col w-full h-full fixed top-0">
      <Window title={speaker} icon={mood}>
        <button
          className="w-full flex disabled:cursor-default"
          type="button"
          onClick={handleClick}
          disabled={isDisabled()}
        >
          {mood && (
            <div className="flex-shrink-0 sm:p-2 lg:p-4 w-0 h-0 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64">
              <Portrait />
            </div>
          )}
          <div
            className={`flex-grow flex flex-col justify-between text-sm sm:text-base md:text-lg lg:text-xl ${
              mood ? `sm:h-40 md:h-48 lg:h-56 xl:h-64` : ``
            }`}
          >
            <div className="p-1 sm:p-2 md:p-3 lg:p-4 text-left">
              <WindupChildren
                skipped={!isWindupActive}
                onFinished={() => setIsWindupActive(false)}
              >
                {sceneText[currSceneText].length
                  ? sceneText[currSceneText]
                  : choices[0].text}
              </WindupChildren>
            </div>
            <div
              className={
                isWindupActive
                  ? "hidden"
                  : "flex flex-row-reverse sm:p-2 lg:p-4"
              }
            >
              <Emoji
                emoji={
                  sceneText[0].length && choices && !isTextRemaining()
                    ? `💭`
                    : `🔻`
                }
              />
            </div>
          </div>
        </button>
      </Window>
      <div className="leading-none px-8 pb-8 bg-blue-100 bg-opacity-50">
        {!isWindupActive &&
          sceneText[0].length > 0 &&
          !isTextRemaining() &&
          (tags.input ? (
            <Window icon="💬" title={getName()}>
              <form className="p-4" onSubmit={handleSubmit}>
                <input
                  className="border-8 border-white rounded-full w-full"
                  type="text"
                  value={nameValue}
                  onChange={(e) => setNameValue(e.target.value)}
                  placeholder={tags.input}
                  spellCheck="false"
                  required
                ></input>
                <input className="hidden" type="submit" value="Submit"></input>
              </form>
            </Window>
          ) : (
            <ul className="text-center">
              {customChoices &&
                customChoices.map((choice, i) => (
                  <WindowButton key={i} onClick={choice.onChoose}>
                    {choice.text}
                  </WindowButton>
                ))}
              {choices.map((choice) => (
                <WindowButton
                  key={choice.index}
                  onClick={() => handleClick(choice.index)}
                >
                  {choice.text}
                </WindowButton>
              ))}
            </ul>
          ))}
      </div>
      <div className="flex-grow bg-blue-100 bg-opacity-50"></div>
    </div>
  );
};

Dialogue.propTypes = {
  tags: PropTypes.object,
  sceneText: PropTypes.arrayOf(PropTypes.string),
  choices: PropTypes.array,
  makeChoice: PropTypes.func.isRequired,
  addKeyItem: PropTypes.func.isRequired,
  customChoices: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      onChoose: PropTypes.func.isRequired,
    })
  )
};

export default Dialogue;

import { Story } from "inkjs";
import storyContent from "./story.json";
export const ink = new Story(storyContent);
export const MAKE_CHOICE = "MAKE_CHOICE";
export const JUMP_TO = "JUMP_TO";

export const getGlobalVars = (variablesState) =>
  Object.keys(variablesState._globalVariables).reduce(
    (acc, key) => ({
      ...acc,
      [key]: variablesState[key],
    }),
    {}
  );
export const getTags = (tags) =>
  tags.reduce(
    (acc, tag) => ({ ...acc, [tag.split(": ")[0]]: tag.split(": ")[1] }),
    {}
  );

export const getVisits = (pathString) =>
  ink.state.VisitCountAtPathString(pathString);

export const getName = () => ink.variablesState["name"];

export const setName = (name) => (ink.variablesState["name"] = name);

export const gameLoop = () => {
  const sceneText = [];
  let currentTags = [];
  while (ink.canContinue) {
    sceneText.push(ink.Continue());
    currentTags = currentTags.concat(ink.currentTags);
  }
  const { currentChoices, variablesState } = ink;
  if (!ink.canContinue && !currentChoices.length)
    throw new GameOverError("no more choices");
  return {
    globals: getGlobalVars(variablesState),
    tags: getTags(currentTags),
    currentChoices,
    sceneText,
    currentTags,
  };
};

export const jumpTo = (knotName) => {
  ink.ChoosePathString(knotName);
  try {
    const gameData = gameLoop();
    return {
      type: JUMP_TO,
      ...gameData,
    };
  } catch (e) {
    if (e instanceof GameOverError) {
      throw e;
    }
  }
};

export const makeChoice = (choiceIdx) => {
  ink.ChooseChoiceIndex(choiceIdx);
  try {
    const gameData = gameLoop();
    return {
      type: MAKE_CHOICE,
      ...gameData,
    };
  } catch (e) {
    if (e instanceof GameOverError && e.reason === "no more choices") {
      return {
        type: MAKE_CHOICE,
        ending: true,
      };
    }
    throw e;
  }
};

function GameOverError(reason = "", ...rest) {
  var instance = new Error(`Game Over, ${reason}`, ...rest);
  instance.reason = reason;
  Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
  if (Error.captureStackTrace) {
    Error.captureStackTrace(instance, GameOverError);
  }
  return instance;
}
GameOverError.prototype = Object.create(Error.prototype, {
  constructor: {
    value: Error,
    enumerable: false,
    writable: true,
    configurable: true,
  },
});

if (Object.setPrototypeOf) {
  Object.setPrototypeOf(GameOverError, Error);
} else {
  GameOverError.__proto__ = Error;
}

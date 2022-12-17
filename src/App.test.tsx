import { expect, test } from "vitest";
import {
  render,
  screen,
  fireEvent,
  waitFor,
  act,
  Screen,
} from "@testing-library/react";
import App from "./App";
import * as get from "./api/get";
import { Users } from "./api";

// write some basic test to know that the criteria is met

/**
 * @name getNotSelectedSkill
 * @param {number} skillId
 * @param {Screen} screen
 */
function getNotSelectedSkill(skill: number, screen: Screen) {
  const regex = new RegExp(`skill-${skill}--not-selected`, "i");
  return screen.queryByAltText(regex);
}

/**
 * @name getSelectedSkill
 * @param {number} skillId
 * @param {Screen} screen
 */
function getSelectedSkill(skill: number, screen: Screen) {
  const regex = new RegExp(`skill-${skill}--selected`, "i");
  return screen.queryByAltText(regex);
}

const rightClick = { button: 2 };
const leftClick = { button: 0 };

test("Left click to add points.", async () => {
  render(<App api={{ get }} />);

  const skillNotSelectedZero = getNotSelectedSkill(0, screen);
  expect(skillNotSelectedZero).toBeInTheDocument();

  if (skillNotSelectedZero === null) {
    throw new Error("FAILED");
  }

  fireEvent.click(skillNotSelectedZero, leftClick);

  const skillSelectedZero = getSelectedSkill(0, screen);
  expect(skillSelectedZero).toBeInTheDocument();
});

test("Right click to remove points.", () => {
  render(
    <App
      api={{
        get: {
          ...get,
          user: () => Users[1],
        },
      }}
    />
  );

  let skillSelectedZero = getSelectedSkill(0, screen);
  expect(skillSelectedZero).toBeInTheDocument();

  if (skillSelectedZero == null) {
    throw new Error("FAILED");
  }

  fireEvent.contextMenu(skillSelectedZero, rightClick);

  const skillNotSelectedZero = getNotSelectedSkill(0, screen);
  expect(skillNotSelectedZero).toBeInTheDocument();
});

test("The user may only use up to 6 points.", () => {
  render(
    <App
      api={{
        get: {
          ...get,
          user: () => Users[2],
        },
      }}
    />
  );

  let skillNotSelectedSix = getNotSelectedSkill(6, screen);
  expect(skillNotSelectedSix).toBeInTheDocument();

  if (skillNotSelectedSix === null) {
    throw new Error("FAILED");
  }

  fireEvent.click(skillNotSelectedSix, leftClick);

  skillNotSelectedSix = getNotSelectedSkill(6, screen);
  expect(skillNotSelectedSix).toBeInTheDocument();
});

test("Displays current point total", () => {
  render(<App api={{ get }} />);
  const totalPoints = screen.queryByText(/0\s\/\s6/i);
  expect(totalPoints).toBeInTheDocument();
});

test("Each item only accounts for one point.", () => {
  render(<App api={{ get }} />);

  let skillNotSelectedZero = getNotSelectedSkill(0, screen);

  // test there are not points yet
  const noPoints = screen.queryByText(/0\s\/\s6/i);
  expect(noPoints).toBeInTheDocument();

  if (skillNotSelectedZero === null) {
    throw new Error("FAILED");
  }
  fireEvent.click(skillNotSelectedZero, leftClick);

  // test there is one point now
  const onePoint = screen.queryByText(/1\s\/\s6/i);
  expect(onePoint).toBeInTheDocument();
});

test("The user must select the items in order. Select the next one.", () => {
  render(
    <App
      api={{
        get: {
          ...get,
          user: () => Users[1],
        },
      }}
    />
  );

  const skillNotSelectedOne = getNotSelectedSkill(1, screen);
  expect(skillNotSelectedOne).toBeInTheDocument();

  if (skillNotSelectedOne === null) {
    throw new Error("FAILED");
  }

  fireEvent.click(skillNotSelectedOne, leftClick);

  const skillSelectedOne = getSelectedSkill(1, screen);
  expect(skillSelectedOne).toBeInTheDocument();
});

test("The user must select the items in order. Try to skip one.", () => {
  render(
    <App
      api={{
        get: {
          ...get,
          user: () => Users[1],
        },
      }}
    />
  );

  let skillNotSelectedTwo = getNotSelectedSkill(2, screen);
  expect(skillNotSelectedTwo).toBeInTheDocument();

  let skillSelectedZero = getSelectedSkill(0, screen);
  expect(skillSelectedZero).toBeInTheDocument();

  if (skillNotSelectedTwo === null) {
    throw new Error("FAILED");
  }

  fireEvent.click(skillNotSelectedTwo, leftClick);

  skillNotSelectedTwo = getNotSelectedSkill(2, screen);
  expect(skillNotSelectedTwo).toBeInTheDocument();

  skillSelectedZero = getSelectedSkill(0, screen);
  expect(skillSelectedZero).toBeInTheDocument();
});

// This seems like a UAC that is missing
test("Removing a skill removes skills that required it", () => {
  render(
    <App
      api={{
        get: {
          ...get,
          user: () => Users[2],
        },
      }}
    />
  );

  let skillSelectedOne = getSelectedSkill(1, screen);
  expect(skillSelectedOne).toBeInTheDocument();

  const skillSelectedTwo = getSelectedSkill(2, screen);
  expect(skillSelectedTwo).toBeInTheDocument();

  const skillSelectedThree = getSelectedSkill(3, screen);
  expect(skillSelectedThree).toBeInTheDocument();

  if (skillSelectedTwo === null) {
    throw new Error("FAILED");
  }

  fireEvent.contextMenu(skillSelectedTwo, rightClick);

  const skillNotSelectedThree = getNotSelectedSkill(3, screen);
  expect(skillNotSelectedThree).toBeInTheDocument();

  const skillNotSelectedTwo = getNotSelectedSkill(2, screen);
  expect(skillNotSelectedTwo).toBeInTheDocument();

  skillSelectedOne = getSelectedSkill(1, screen);
  expect(skillSelectedOne).toBeInTheDocument();
});

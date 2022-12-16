/**
 * This file a place holder for all the api data
 */

export interface Attribute {
  // name of the attribute
  name: string;
  // sort order for view... alphanewmeric? then not needed
  sortOrder: number;
  // values are summed up to get total attribute value
  value: number;
}

/**
 * Attrubutes
 * These are the base set of attributes
 * hoping to use them got my little pony
 * variant
 */
export const Attributes: Attribute[] = [
  {
    name: "stanima",
    sortOrder: 0,
    value: 0,
  },
  {
    name: "body",
    sortOrder: 1,
    value: 0,
  },
  {
    name: "mind",
    sortOrder: 2,
    value: 0,
  },
  {
    name: "charm",
    sortOrder: 3,
    value: 0,
  },
];
export interface Skill {
  // id of the skill
  id: string; //unique
  // name of the skill
  name: string; //unique?
  // names of other skills that need to be purchased first
  prerequisites: string[];
  // the parent classifications that this skill belongs to
  classifications: string[];
  // description of the skill
  description: string;
  // how this skill effects attributes
  effects: Attribute[]; // name ... attributes maybe?
  // sprite card position
  activeSprite: Sprite;
  // deactive sprite
  deactiveSprite: Sprite;
}

/**
 * Skills
 *
 * @description these are the skills
 * that the app is using hopefulle we
 * can move these to a db some day
 */
export const Skills: Skill[] = [
  {
    id: "0",
    name: "laundry",
    description: "So good at doing laundry",
    prerequisites: [],
    classifications: ["homemaker"],
    effects: [],
    activeSprite: {
      x: 0,
      y: 0,
      width: 50,
      height: 50,
    },
    deactiveSprite: {
      x: 0,
      y: 50,
      width: 50,
      height: 50,
    },
  },
  {
    id: "1",
    name: "dishes",
    description: "So good at doing dishes",
    prerequisites: ["0"],
    classifications: ["homemaker"],
    effects: [],
    activeSprite: {
      x: 50,
      y: 0,
      width: 50,
      height: 50,
    },
    deactiveSprite: {
      x: 50,
      y: 50,
      width: 50,
      height: 50,
    },
  },
  {
    id: "2",
    name: "baking",
    description: "So good at doing baking",
    prerequisites: ["1"],
    classifications: ["homemaker"],
    effects: [],
    activeSprite: {
      x: 100,
      y: 0,
      width: 50,
      height: 50,
    },
    deactiveSprite: {
      x: 100,
      y: 50,
      width: 50,
      height: 50,
    },
  },
  {
    id: "3",
    name: "boss",
    description: "So good at being the boss",
    prerequisites: ["2"],
    classifications: ["homemaker"],
    effects: [],
    activeSprite: {
      x: 150,
      y: 0,
      width: 50,
      height: 50,
    },
    deactiveSprite: {
      x: 150,
      y: 50,
      width: 50,
      height: 50,
    },
  },
  {
    id: "4",
    name: "boating",
    description: "So good at boating",
    prerequisites: [],
    classifications: ["moneymaker"],
    effects: [],
    activeSprite: {
      x: 200,
      y: 0,
      width: 50,
      height: 50,
    },
    deactiveSprite: {
      x: 200,
      y: 50,
      width: 50,
      height: 50,
    },
  },
  {
    id: "5",
    name: "diving",
    description: "So good at diving",
    prerequisites: ["4"],
    classifications: ["moneymaker"],
    effects: [],
    activeSprite: {
      x: 250,
      y: 0,
      width: 50,
      height: 50,
    },
    deactiveSprite: {
      x: 250,
      y: 50,
      width: 50,
      height: 50,
    },
  },
  {
    id: "6",
    name: "meteorology",
    description: "So good at doing meteorology",
    prerequisites: ["5"],
    classifications: ["moneymaker"],
    effects: [],
    activeSprite: {
      x: 300,
      y: 0,
      width: 50,
      height: 50,
    },
    deactiveSprite: {
      x: 300,
      y: 50,
      width: 50,
      height: 50,
    },
  },
  {
    id: "7",
    name: "costumes",
    description: "So good at making costumes",
    prerequisites: ["6"],
    classifications: ["moneymaker"],
    effects: [],
    activeSprite: {
      x: 350,
      y: 0,
      width: 50,
      height: 50,
    },
    deactiveSprite: {
      x: 350,
      y: 50,
      width: 50,
      height: 50,
    },
  },
];

export interface Classification {
  // name of the classification
  name: string;
  // sort order for view... alphanewmeric? then not needed
  sortOrder: number;
  // base attributes for the classification
  baseAttributes: Attribute[];
}

/**
 * Classifications
 *
 * @description These are classifications
 */
export const Classifications: Classification[] = [
  {
    name: "homemaker",
    sortOrder: 0,
    baseAttributes: [
      {
        name: "stanima",
        sortOrder: 0,
        value: 12,
      },
      {
        name: "body",
        sortOrder: 1,
        value: 8,
      },
      {
        name: "mind",
        sortOrder: 2,
        value: 4,
      },
      {
        name: "charm",
        sortOrder: 3,
        value: 6,
      },
    ],
  },
  {
    name: "moneymaker",
    sortOrder: 1,
    baseAttributes: [
      {
        name: "stanima",
        sortOrder: 0,
        value: 12,
      },
      {
        name: "body",
        sortOrder: 1,
        value: 8,
      },
      {
        name: "mind",
        sortOrder: 2,
        value: 4,
      },
      {
        name: "charm",
        sortOrder: 3,
        value: 6,
      },
    ],
  },
];

export interface User {
  // name of the user
  name: string; // only matter with auth?
  // skills
  skills: string[];
  // skill points for purchasing points
  skillPoints: number;
  // attributes
  // attributes: Attribute[];
  // classification of the user
  // classification: Classification;
}

/**
 * Users
 *
 * @description these are for testing purposes
 * the first user is for the mvp of the app
 */
export const Users: User[] = [
  {
    name: "Jim",
    skills: [],
    skillPoints: 6,
  },
  {
    name: "Jess",
    skills: ["0"],
    skillPoints: 6,
  },
  {
    name: "Jason",
    skills: ["0", "1", "2", "3", "4", "5"],
    skillPoints: 6,
  },
];

export interface Sprite {
  // position from the left
  x: number;
  // position from the top
  y: number;
  // width of sprite section
  width: number;
  // height
  height: number;
}

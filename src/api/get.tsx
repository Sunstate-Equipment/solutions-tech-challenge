import {
  User,
  Users,
  Skill,
  Skills,
  Classification,
  Classifications,
} from "./";

export function user(): User {
  return Users[0];
}

export function skills(): Skill[] {
  return Skills;
}

export function classifications(): Classification[] {
  return Classifications;
}

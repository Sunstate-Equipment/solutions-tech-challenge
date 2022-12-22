import {
  AnonymousUser,
  Classification,
  Classifications,
  Skill,
  Skills,
  User,
} from "../api";

export interface AppState {
  classifications: Classification[] | null; // null means not requested yet
  skills: Skill[] | null; // null means not requested yet
  user: User;
}

export const initialState: AppState = {
  classifications: Classifications,
  skills: Skills,
  user: AnonymousUser,
};

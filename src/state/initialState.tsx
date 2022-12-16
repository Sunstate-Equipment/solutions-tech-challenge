import { Classification, Classifications, Skill, Skills, User } from "../api";

export interface AppState {
  classifications: Classification[] | null; // null means not requested yet
  skills: Skill[] | null; // null means not requested yet
  user: User | null; // null is not logged in...
}

export const initialState: AppState = {
  classifications: Classifications,
  skills: Skills,
  user: null,
};

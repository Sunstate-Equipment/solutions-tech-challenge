import { validateSkills } from "../utils";
import * as ACTIONS from "./actions";
import { AppState } from "./initialState";

// TODO:: NO ANY PLEASE
interface ActionInfo {
  type: ACTIONS.Action;
  payload: any;
}

/**
 * @name reducer
 * @param state current app state
 * @param action
 *
 * @description this function manages
 * the state of the app. A reduce is
 * probaly over kill for the mvp, but is
 * going to be more justfied as the app
 * matures
 */
export function reducer(state: AppState, { type, payload }: ActionInfo) {
  switch (type) {
    /**
     * @name ADD_SKILL
     * @description takes the id of skill to
     * add. if there are skill points and
     * if it is not there add it. if it is
     * there dont add it.
     */
    case ACTIONS.ADD_SKILL: {
      // check if we can add a skill
      // TODO: make sure we can add a skill we can only add so many
      const { id } = payload;

      const newSkills = state.user.skills.includes(id)
        ? state.user.skills
        : [...(state.user.skills || []), id];
      const skills = validateSkills(state.skills || [], newSkills);
      return {
        ...state,
        user: {
          ...state.user,
          skills,
        },
      };
    }
    /**
     * @name REMOVE_SKILL
     * @description takes the id of skill to
     * remove. if it is there dont remove it.
     */
    case ACTIONS.REMOVE_SKILL: {
      const { id } = payload;

      const newSkills: string[] | undefined = state.user.skills.filter(
        (skill) => skill !== id
      );

      const skills = validateSkills(state.skills || [], newSkills || []);
      return {
        ...state,
        user: {
          ...state.user,
          skills,
        },
      };
    }
    /**
     * @name LOAD_SKILLS
     * @description load skills for the app to use.
     */
    case ACTIONS.LOAD_SKILLS:
      return {
        ...state,
        skills: payload,
      };
    /**
     * @name LOAD_CLASSIFICATIONS
     * @description load classifications for the app to use.
     */
    case ACTIONS.LOAD_CLASSIFICATIONS:
      return {
        ...state,
        classifications: payload,
      };
    /**
     * @name LOAD_USER
     * @description load user for the app to use.
     */
    case ACTIONS.LOAD_USER:
      return {
        ...state,
        user: payload,
      };
    default:
      throw new Error(`Reducer does not support the action: ${type}`);
  }
}

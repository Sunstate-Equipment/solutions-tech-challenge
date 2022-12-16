/**
 * Utils to help with business logic
 */

import { Skill } from "../api";

/**
 * @name validateSkills
 * @param {array} allSkills an array of all skills
 * @param {array} userSkills an array of skill ids the user has
 *
 * @description compare the skills the user has to the skills
 * that are available and remove all the ones it should not have.
 *
 * TODO: Contemplate the ux arround this behavior.
 */
export function validateSkills(allSkills: Skill[], userSkills: string[]) {
  // sort the user array lowest to highst
  // this allows us to remove the higher skills
  // that do not have the prerequiments met
  const sortedUserSkills = userSkills.sort();
  // check that each skill has its requirements met
  const newUserSkills: string[] = sortedUserSkills.reduce(
    (newUserSkills, skillId): string[] => {
      // get skill to check for prereqs
      const skill: Skill | undefined = allSkills.find(
        (skill) => skill.id === skillId
      );
      if (!skill) {
        return newUserSkills;
      } else if (skill?.prerequisites.length < 1) {
        return [...newUserSkills, skillId];
      } else if (
        skill?.prerequisites.length > 0 &&
        skill?.prerequisites.some((sId: string) => newUserSkills.includes(sId))
      ) {
        return [...newUserSkills, skillId];
      } else {
        return newUserSkills;
      }
    },
    [] as string[]
  );

  return newUserSkills;
}

import { useContext } from "react";
import { AppContext } from "../../state";

import "./styles.scss";

/**
 * @name SkillPoints
 */

export const SkillPoints = function () {
  const { state } = useContext(AppContext);
  const { user } = state;

  return (
    <div className="skill-points">
      <div className="skill-points__points">
        {user?.skills.length} / {user?.skillPoints}
      </div>
      <div className="skill-points__title">Points Spent</div>
    </div>
  );
};

import React, { useContext } from "react";
import { AppContext } from "../../state";
import { Skill } from "../Skill";
import "./styles.scss";

/**
 * @name Classifications
 * @description grabs the user and the skills
 * from context then maps over the skills
 * to render the main view
 */

export const Classifications: React.FC = function ({ children, ...props }) {
  const { state } = useContext(AppContext);
  const { skills, user, classifications } = state;

  return (
    <div className="classifications">
      {classifications
        ?.sort((a, b) => a.sortOrder - b.sortOrder)
        .map(({ name }) => (
          <div key={name} className="classification">
            <div className="classification__title">{name}</div>
            {skills
              ?.filter(({ classifications }) => classifications.includes(name))
              .map(({ id, activeSprite, deactiveSprite }) => (
                <Skill
                  key={id}
                  id={id}
                  selected={user?.skills.includes(id)}
                  activeSprite={activeSprite}
                  deactiveSprite={deactiveSprite}
                />
              ))}
          </div>
        ))}
    </div>
  );
};

import React, { useContext, useState } from "react";
import { Sprite } from "../../api";
import { AppContext } from "../../state";
import * as ACTIONS from "../../state/actions";

import "./styles.scss";

interface AppProps {
  id: string;
  selected?: boolean;
  activeSprite: Sprite;
  deactiveSprite: Sprite;
}

/**
 * @name Skill
 * @param id id of the skill
 * @param selected is the skill on the user
 * @param activeSprite active sprite
 * @param deactiveSprite deactive sprite
 */

export const Skill = function ({
  id,
  selected,
  activeSprite,
  deactiveSprite,
}: AppProps) {
  const { dispatch } = useContext(AppContext);
  const [isHovering, setIsHovering] = useState(false);

  /**
   * @name handleClick
   * @param event event.button to determine th click
   *
   * @description handle the right and left click
   * done by onClick and onContextMenu. right click removes
   * the skill left click adds the skill
   */
  function handleClick(event: React.MouseEvent<HTMLDivElement>): void {
    event.preventDefault();
    if (!selected && event.button === 0) {
      dispatch({
        type: ACTIONS.ADD_SKILL,
        payload: {
          id,
        },
      });
    }
    if (selected && event.button === 2) {
      dispatch({
        type: ACTIONS.REMOVE_SKILL,
        payload: {
          id,
        },
      });
    }
  }

  const selectedModifier: string = selected ? "selected" : "not-selected";

  const sprite = selected || isHovering ? activeSprite : deactiveSprite;

  return (
    <div
      className={`skill skill-${id}--${selectedModifier} skill--${selectedModifier}`}
      onClick={handleClick}
      onContextMenu={handleClick}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="skill__container">
        <img
          className="skill__img"
          alt={`skill-${id}--${selectedModifier}`}
          style={{
            clipPath: `url(#skill-${id})`,
            position: "absolute",
            left: -sprite.x + 3,
            top: -sprite.y + 3,
          }}
        />
        <svg width="0" height="0">
          <defs>
            <clipPath id={`skill-${id}`}>
              <rect {...sprite} />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
};

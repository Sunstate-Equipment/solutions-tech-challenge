import React, { useContext, useEffect } from "react";
import { Header } from "../components/Header";
import { Classifications } from "../components/Classifications";
import { SkillPoints } from "../components/SkillPoints";
import { AppContext } from "../state";
import * as ACTIONS from "../state/actions";
import "./SkillTreeView.scss";

interface AppProps {
  api: {
    get: {
      user: Function;
      skills: Function;
      classifications: Function;
    };
  };
}

/**
 * @name SkillTreeView
 *
 * @description the view for the main view
 * it makes the api calls the get the data
 * and sets up the app state
 */
export function SkillTreeView({ api }: AppProps) {
  const { state, dispatch } = useContext(AppContext);

  /**
   * @name getData
   * @description make api calls and send
   * data to the app state
   */
  useEffect(
    function getData() {
      dispatch({
        type: ACTIONS.LOAD_USER,
        payload: api.get.user(),
      });
      dispatch({
        type: ACTIONS.LOAD_SKILLS,
        payload: api.get.skills(),
      });
      dispatch({
        type: ACTIONS.LOAD_CLASSIFICATIONS,
        payload: api.get.classifications(),
      });
    },
    [api.get, dispatch]
  );

  // if we dont have a user dont render yet.
  return state.user == null ? null : (
    <div className="App">
      <Header>
        TitanStar Legends - Rune Mastery Loadout Talent Calculator 9000
      </Header>
      <div className="App__Container">
        <Classifications />
        <SkillPoints />
      </div>
    </div>
  );
}

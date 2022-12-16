import React from "react";
import { AppContainer } from "./state";
import { SkillTreeView } from "./views/SkillTreeView";

interface AppProps {
  api: {
    get: {
      user: Function;
      skills: Function;
      classifications: Function;
    };
  };
}

function App(props: AppProps) {
  return (
    <AppContainer>
      <SkillTreeView {...props} />
    </AppContainer>
  );
}

export default App;

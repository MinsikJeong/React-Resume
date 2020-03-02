import React from 'react';
import MainNav from "./Components/MainNav";
import MainPage from "./Components/MainPage";
import AboutmePage from "./Components/AboutmePage";
import PortfolioPage from "./Components/PortfolioPage";
import SkillsPage from "./Components/SkillsPage";
import NotFoundPage from "./Components/NotFoundPage";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <MainNav />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/aboutme" component={AboutmePage} />
        <Route path="/skills" component={SkillsPage} />
        <Route path="/portfolio" component={PortfolioPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </>
  );
}

export default App;

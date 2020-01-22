import React from 'react';
import MainNav from "./Components/MainNav";
import MainPage from "./Components/MainPage";
import EducationsPage from "./Components/EducationsPage";
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
        <Route path="/skills" component={SkillsPage}/>
        <Route path="/educations" component={EducationsPage}/>
        <Route path="/portfolio" component={PortfolioPage}/>
        <Route component={NotFoundPage}/>
      </Switch>
    </>
  );
}

export default App;

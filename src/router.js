import React from "react";
import { Switch, Route } from "react-router-dom";
import ListOfGames from "./components/ListOfGames/ListOfGames";
import EachGame from "./components/EachGame/EachGame";
import ListOfFavoriteGames from "./components/ListOfFavoriteGames/ListOfFavoriteGames";

export default (
  <Switch>
    <Route exact path="/" component={ListOfGames} />
    <Route path="/game/:name" component={EachGame} />
    <Route path="/listoffavorites" component={ListOfFavoriteGames} />
  </Switch>
);

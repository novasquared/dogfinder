import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import DogList from "./DogList";
import DogDetails from "./DogDetails";

function Routes() {
    return (
        <Switch>
            <Route exact path="/dogs">
                <DogList />
            </Route>
            <Route exact path="/dogs/:name">
                <DogDetails />
            </Route>
            <Redirect to="/dogs" />
      </Switch>
    );
}

export default Routes;
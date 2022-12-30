import React, { useState, useEffect }   from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";

import ColorList from "./ColorList";
import NewColorForm from "./NewColorForm";
import Color from "./Color";


function Routes() {
    const [colors, setColors] = useState({
        red: "#FF0000",
        green: "#00FF00",
        blue: "#0000FF"
      });

      function addColor(newColorObj) {
        setColors(prevColors => ({ ...prevColors, ...newColorObj }));
      }

    return (
        <BrowserRouter>
          <Switch>
            <Route exact path="/colors">
              <ColorList colors={colors} />
            </Route>
            <Route exact path="/colors/new">
              <NewColorForm addColor={addColor} />
            </Route>
            <Route path="/colors/:color"  />
            <Redirect to="/colors" />
          </Switch>
        </BrowserRouter>
      );
}

export default Routes;
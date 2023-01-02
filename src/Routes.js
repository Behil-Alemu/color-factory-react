// import React, { useState, useEffect } from 'react';
// import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';

// import ColorList from './ColorList';
// import NewColorForm from './NewColorForm';
// import Color from "./Color";

// function Routes() {
// 	const [ colors, setColors ] = useState(
// 		JSON.parse(localStorage.getItem('colors')) || {
// 			red: '#FF0000',
// 			green: '#00FF00',
// 			blue: '#0000FF'
// 		}
// 	);

// 	function addColor(newColorObj) {
// 		setColors((prevColors) => ({ ...prevColors, ...newColorObj }));
// 	}
//     function renderCurrentColor(props) {
//         const { color } = props.match.params;
//         const hex = colors[color];
//         return <Color {...props} hex={hex} color={color} />;
//       };
// 	return (
// 		<BrowserRouter>
// 			<Switch>
// 				<Route exact path="/colors">
// 					<ColorList colors={colors} />
// 				</Route>
// 				<Route exact path="/colors/new">
// 					<NewColorForm addColor={addColor} />
// 				</Route>
// 				<Route path="/colors/:color" render={renderCurrentColor} />
// 				<Redirect to="/colors"/>
// 			</Switch>
// 		</BrowserRouter>
// 	);
// }

// export default Routes;
import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";

import ColorList from "./ColorList";
import NewColorForm from "./NewColorForm";
import Color from "./Color";


function Routes() {

  const initialColors = JSON.parse(localStorage.getItem("colors")) || {
    red: "#FF0000",
    green: "#00FF00",
    blue: "#0000FF"
  };
  const [colors, updateColors] = useState(initialColors);

  useEffect(
    () => localStorage.setItem("colors", JSON.stringify(colors)),
    [colors]
  );

  function handleAdd(newColorObj) {
    updateColors(prevColors => ({ ...prevColors, ...newColorObj }));
  }

  function renderCurrentColor(props) {
    const { color } = props.match.params;
    const hex = colors[color];
    return <Color {...props} hex={hex} color={color} />;
  };
// why do I have to reload the page for me to see the changes I made. After clicking on color I would see 'http://localhost:3000/colors/green' but not the page until I reload it. 
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/colors">
          <ColorList colors={colors} />
        </Route>
        <Route exact path="/colors/new">
          <NewColorForm addColor={handleAdd} />
        </Route>
        <Route path="/colors/:color" render={renderCurrentColor} />
        <Redirect to="/colors" />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;

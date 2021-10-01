import "./App.css";
import Palette from "./Components/Palette/Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelper";
import { Route, Switch } from "react-router-dom";
import PaletteList from "./Components/PaletteList/PaletteList";
import SingleColorPalette from "./Components/SingleColorPalette/SingleColorPalette";
function App() {
  function findPalette(id) {
    return seedColors.find(function (palette) {
      return palette.id === id;
    });
  }
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={(routeProps) => (
          <PaletteList palettes={seedColors} {...routeProps} />
        )}
      />
      <Route
        exact
        path="/palette/:id"
        render={(routeProps) => (
          <Palette
            palette={generatePalette(findPalette(routeProps.match.params.id))}
          />
        )}
      />
      <Route
        exact
        path="/palette/:paletteId/:colorId"
        render={() => <SingleColorPalette />}
      />
    </Switch>
  );
}
export default App;

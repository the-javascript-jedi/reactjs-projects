import chroma from "chroma-js";

const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
// starterPalette=paletteName: "Material UI Colors",
//     id: "material-ui-colors",
//     emoji: "🎨",
//     colors: [
//       { name: "red", color: "#F44336" },
//       { name: "pink", color: "#E91E63" },
//      ]
function generatePalette(starterPalette) {
  let newPalette = {
    paletteName: starterPalette.paletteName,
    id: starterPalette.id,
    emoji: starterPalette.emoji,
    //we will loop and create the array values
    //colors:{50:[],100:[],200:[],..etc}
    colors: {},
  };
  for (let level of levels) {
    // create colors obj with empty arrays with levels
    newPalette.colors[level] = [];
  }
  // generate a scale of colors
  // take the lightest color and add as the 50th value, take second and add  as lightest and so on
  // also create rgb, rgba values
  for (let color of starterPalette.colors) {
    let scale = getScale(color.color, 10).reverse();
    for (let i in scale) {
      // add the range of colors to the created array
      newPalette.colors[levels[i]].push({
        name: `${color.name} ${levels[i]}`,
        //replace space globally with a dash
        id: color.name.toLowerCase().replace(/ /g, "-"),
        hex: scale[i],
        rgb: chroma(scale[i]).css(),
        //replace
        rgba: chroma(scale[i])
          .css()
          .replace("rgb", "rgba")
          .replace(")", ",1.0)"),
      });
    }
  }
  return newPalette;
}
function getRange(hexColor) {
  //range starts from dark goes to the color and then finally white
  //color.darken(1.4)(hex-color) - color(hex-color) - white(fff)
  const end = "#fff";
  return [chroma(hexColor).darken(1.4).hex(), hexColor, end];
}

function getScale(hexColor, numberOfColors) {
  return chroma.scale(getRange(hexColor)).mode("lab").colors(numberOfColors);
}

export { generatePalette };

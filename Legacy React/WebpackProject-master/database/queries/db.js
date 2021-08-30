const _ = require("lodash");
const Artist = require("../seeds/artist");

const artists = _.times(20, () => Artist());
console.log("artists", artists);
module.exports = artists;

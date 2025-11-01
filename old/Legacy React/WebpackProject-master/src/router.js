import React from "react";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Home from "./components/Home";
import ArtistMain from "./components/artists/ArtistMain";
// Below modules are dynamically loaded
// import ArtistDetail from "./components/artists/ArtistDetail";
// import ArtistCreate from "./components/artists/ArtistCreate";
// import ArtistEdit from "./components/artists/ArtistEdit";
// React Route Codesplitting
const componentRoutes = {
  component: Home,
  path: "/",
  indexRoute: { component: ArtistMain },
  childRoutes: [
    {
      path: "artists/new",
      getComponent(location, cb) {
        // logic to fetch component
        System.import("./components/artists/ArtistCreate").then((module) =>
          cb(null, module.default)
        );
      },
    },
    {
      path: "artists/:id",
      getComponent(location, cb) {
        // logic to fetch component
        System.import("./components/artists/ArtistDetail").then((module) =>
          cb(null, module.default)
        );
      },
    },
    {
      path: "artists/:id/edit",
      getComponent(location, cb) {
        // logic to fetch component
        System.import("./components/artists/ArtistEdit").then((module) =>
          cb(null, module.default)
        );
      },
    },
  ],
};

const Routes = () => {
  /* Existing Route before applying componentRoutes */
  // <Router history={hashHistory}>
  //   <Route path="/" component={Home}>
  //     <IndexRoute component={ArtistMain} />
  //     <Route path="artists/new" component={ArtistCreate} />
  //     <Route path="artists/:id" component={ArtistDetail} />
  //     <Route path="artists/:id/edit" component={ArtistEdit} />
  //   </Route>
  // </Router>
  return (
    // Router using componentRoutes
    <Router history={hashHistory} routes={componentRoutes} />
  );
};

export default Routes;

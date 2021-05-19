import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ExpenseDashboardPage from "../Components/ExpenseDashboardPage";
import AddExpensePage from "../Components/AddExpensePage";
import EditExpensePage from "../Components/EditExpensePage";
import HelpPage from "../Components/HelpPage";
import NotFoundPage from "../Components/NotFoundPage";
import Header from "../Components/Header";
const AppRouter = () => {
  const routes = (
    <BrowserRouter>
      {/* BrowserRouter must always have only one child */}
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={ExpenseDashboardPage} />
          <Route path="/create" component={AddExpensePage} />
          <Route path="/edit/:id" component={EditExpensePage} />
          <Route path="/help" component={HelpPage} />
          {/* Switch goes through all the routes one at a time to find a matching url
            for a NotFound component we must place the wildcard route at the bottom */}
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
  return <div>{routes}</div>;
};
export default AppRouter;
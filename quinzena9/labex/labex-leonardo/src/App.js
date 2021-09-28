import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ListTripPage from "./pages/ListTripsPage/ListTripsPage";
import ApplicationFormPage from "./pages/ApplicationFormPage/ApplicationFormPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import AdminHomePage from "./pages/AdminHomePage/AdminHomePage";
import TripDetailsPage from "./pages/TripDetailsPage/TripDetailsPage";
import CreateTripPage from "./pages/CreateTripPage/CreateTripPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">

          <HomePage />

        </Route>

        <Route exact path="/trips/list">

          <ListTripPage/>

        </Route>

        <Route exact path="/trips/application">

          <ApplicationFormPage/>

        </Route>

        <Route exact path="/login">

          <LoginPage/>

        </Route>

        <Route exact path="/admin/trips/list">

          <AdminHomePage/>

        </Route>

        <Route exact path="/admin/trips/create">

          <TripDetailsPage/>

        </Route>

        <Route exact path="/admin/trips/:id">

          <CreateTripPage/>
          
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './component/Home/Home/Home';
import Appointment from './component/Appointment/Appointment/Appointment';
import { createContext, useState } from 'react';
import Login from './component/Login/Login/Login';
import PrivateRoute from './component/Login/PrivateRoute/PrivateRoute';
import Dashboard from './component/Dashboard/Dashboard/Dashboard';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <PrivateRoute path="/appointment">
          <Appointment></Appointment>
        </PrivateRoute>
        <PrivateRoute path="/dashboard/appointment">
          <Dashboard></Dashboard>
        </PrivateRoute>
        <PrivateRoute path="/dashboard/all_patients">
        <Dashboard></Dashboard>
        </PrivateRoute>
        <Route path="/dashboard/addDoctor">
        <Dashboard></Dashboard>
        </Route>
        <Route path="/login">
            <Login></Login>
        </Route>
        <Route path="/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;

import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from "./components/loginSystem/SignUp";
import Login from "./components/loginSystem/Login";
import Dashboard from "./Pages/Dashboard";
import Thinking from "./Pages/Thinking";
import QuotesPage from "./Pages/QuotesPage";
import Navbar from "./components/Dangiri/Navbar";
import ProtectedRoute from "./components/Protected";
function App() {
  const users = [];
  const GetInfoUser = user => {
    console.log("Funca");
    users.push(user);
    console.log(users);
  };
  const [quote, setQuote] = useState({});
  const getQuote = q => {
    setQuote(q);
  };
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <SignUp users={users} SendUser={GetInfoUser} />
        </Route>
        <Route exact path="/home">
          <Login users={users} />
        </Route>
        <ProtectedRoute exact path="/dashboard">
          <Dashboard getQuote={setQuote} />
        </ProtectedRoute>
        <ProtectedRoute exact path="/quotes">
          <QuotesPage />
        </ProtectedRoute>
        <ProtectedRoute exact path="/quotes/:id">
          <Thinking quote={quote} />
        </ProtectedRoute>
      </Switch>
    </Router>
  );
}

export default App;

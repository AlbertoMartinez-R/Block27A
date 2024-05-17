import React from "react";
import Header from "./components/header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";

function App () {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Dashboard />
    </div>
  );
};

export default App;
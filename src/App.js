// import logo from './logo.svg';
import './App.css';

import React from "react";
import ReactDOM from "react-dom";
import { VotingProvider } from "./VotingProvider";
import StudentList from "./StudentList";
import VoteInput from "./VoteInput";

const App = () => {
  return (
    <VotingProvider>
      <div className="App">
        <StudentList />
        <VoteInput />
      </div>
    </VotingProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

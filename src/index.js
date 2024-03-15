import React from "react";
import ReactDOM from "react-dom";
import { VotingProvider } from "./components/VotingProvider";
import StudentList from "./components/StudentList";
import VoteInput from "./components/VoteInput";

ReactDOM.render(
  <React.StrictMode>
    <VotingProvider>
      <StudentList />
      <VoteInput />
    </VotingProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

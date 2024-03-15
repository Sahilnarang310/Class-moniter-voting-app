
import React from "react";
import { useVoting } from "./VotingProvider";

const StudentList = () => {
  const { students, setShowInput, setSelectedStudentName, handleDeleteVoter } = useVoting();

  const totalVotes = students.reduce((total, student) => total + student.votes, 0);

  const handleAddVote = () => {
    setSelectedStudentName(""); // Clear selected student name
    setShowInput(true);
  };

  return (
    <div className="student-list">
      <h2>  Class Voting </h2>
      <p>Total Votes: {totalVotes}</p>
      <button onClick={handleAddVote}>Add Vote</button>
      {students && students.map(student => (
        <div key={student.id} className="student">
          <h2>{student.name}</h2>
          <p>Votes: {student.votes}</p>
          <ul>
            {student.voterNames.map((voter, index) => (
              <li key={index}>
                {voter} 
                <button onClick={() => handleDeleteVoter(student.name, index)}>  Delete</button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default StudentList;

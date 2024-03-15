
import React from "react";
import { useVoting } from "./VotingProvider";

const VoteInput = () => {
  const { students, showInput, setShowInput, voterName, setVoterName, selectedStudentName, setSelectedStudentName, addVote,  } = useVoting();

//   const handleAddVote = () => {
//     setShowInput(true);
//   };

  const handleCancelVote = () => {
    setShowInput(false);
  };

  return (
    <div className="vote-input">
      {showInput ? (
        <div>
          <h4>Moniter ke liye Vote kr do bahi</h4>
          <input
            type="text"
            placeholder="which moniter to vote"
            value={voterName}
            onChange={e => setVoterName(e.target.value)}
          />
          <select value={selectedStudentName} onChange={e => setSelectedStudentName(e.target.value)}>
            <option value="">Select Student</option>
            {students && students.map(student => (
              <option key={student.id} value={student.name}>{student.name}</option>
            ))}
          </select>
          <button onClick={addVote}>Submit Vote</button>
          <button onClick={handleCancelVote}>Cancel</button>
        </div>
      ) : null}
    </div>
  );
};

export default VoteInput;

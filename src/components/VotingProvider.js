// VotingProvider.js
import React, { useState, createContext, useContext, useEffect } from "react";

const VotingContext = createContext();

export const useVoting = () => useContext(VotingContext);

export const VotingProvider = ({ children }) => {
  const [students, setStudents] = useState(() => {
    const storedStudents = localStorage.getItem("students");
    return storedStudents
      ? JSON.parse(storedStudents)
      : [
          { id: 1, name: "Sahil", votes: 0, voterNames: [] },
          { id: 2, name: "Mohit", votes: 0, voterNames: [] },
          { id: 3, name: "Rahul", votes: 0, voterNames: [] }
        ];
  });

  const [showInput, setShowInput] = useState(false);
  const [voterName, setVoterName] = useState("");
  const [selectedStudentName, setSelectedStudentName] = useState(""); // Updated to use student name instead of ID

  const addVote = () => {
    if (voterName && selectedStudentName) {
      const updatedStudents = students.map(student =>
        student.name === selectedStudentName
          ? { ...student, votes: student.votes + 1, voterNames: [...student.voterNames, voterName] }
          : student
      );
      setStudents(updatedStudents);
      setVoterName("");
      setSelectedStudentName(""); // Clear selected student name
      setShowInput(false);
    }
  };

  const cancelVote = () => {
    setVoterName("");
    setSelectedStudentName(""); // Clear selected student name
    setShowInput(false);
  };

  const handleDeleteVoter = (studentName, voterIndex) => {
    const updatedStudents = students.map(student => {
      if (student.name === studentName) {
        const updatedVoterNames = [...student.voterNames];
        updatedVoterNames.splice(voterIndex, 1);
        return { ...student, votes: student.votes - 1, voterNames: updatedVoterNames };
      }
      return student;
    });
    setStudents(updatedStudents);
  };

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  return (
    <VotingContext.Provider value={{ students, addVote, cancelVote, showInput, setShowInput, voterName, setVoterName, selectedStudentName, setSelectedStudentName, handleDeleteVoter }}>
      {children}
    </VotingContext.Provider>
  );
};
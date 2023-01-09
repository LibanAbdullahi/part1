import { useState } from "react";

const App = () => {
  const initialAnecdotes = [
    {
      text: "If it hurts, do it more often.",
      votes: 0,
    },
    {
      text: "Adding manpower to a late software project makes it later!",
      votes: 0,
    },
    {
      text: "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
      votes: 0,
    },
    {
      text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
      votes: 0,
    },
    {
      text: "Premature optimization is the root of all evil.",
      votes: 0,
    },
    {
      text: "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
      votes: 0,
    },
    {
      text: "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
      votes: 0,
    },
  ];

  const [selected, setSelected] = useState(0);
  const [anecdotes, setAnecdotes] = useState(initialAnecdotes);

  const handleClick = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };

  const handleVote = () => {
    const newAnecdotes = [...anecdotes];
    newAnecdotes[selected].votes++;
    setAnecdotes(newAnecdotes);
  };

  const mostVotedAnecdoteIndex = anecdotes.reduce(
    (mostVotedIndex, currentAnecdote, currentIndex) => {
      return currentAnecdote.votes > anecdotes[mostVotedIndex].votes
        ? currentIndex
        : mostVotedIndex;
    },
    0
  );

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected].text}</p>
      <p>has votes: {anecdotes[selected].votes}</p>
      <button onClick={handleVote}>Vote</button>
      <button onClick={handleClick}>Next Anecdote</button>
      <h1>Anecdote with the most votes</h1>
      <p>{anecdotes[mostVotedAnecdoteIndex].text}</p>
    </div>
  );
};

export default App;

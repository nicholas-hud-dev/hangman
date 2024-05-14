import React from "react";

const KEYS = [
  "a", "b", "c", "d", "e", "f", "g",
  "h", "i", "j", "k", "l", "m", "n",
  "o", "p", "q", "r", "s", "t", "u",
  "v", "w", "x", "y", "z"
];

type KeyboardProps = {
  disabled?: boolean
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
}

export function Keyboard({ disabled = false, activeLetters, inactiveLetters, addGuessedLetter }: KeyboardProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
        gap: ".5rem",
      }}
    >
      {KEYS.map(key => {
        const isActive = activeLetters.includes(key);
        const isInactive = inactiveLetters.includes(key);
        return (
          <button
          disabled={isInactive || isActive || disabled}
            key={key}
            onClick={() => addGuessedLetter(key)}
            style={{
              width: "100%",
              border: "3px solid black",
              background: "none",
              aspectRatio: 1 / 1,
              fontSize: "2.5rem",
              textTransform: "uppercase",
              padding: ".5rem",
              fontWeight: "bold",
              cursor: "pointer",
              color: isActive ? "white" : "black", // Change text color for active letters
              backgroundColor: isActive ? "green" : isInactive ? "red" : "transparent", // Apply background color based on active and inactive states
              transition: "background-color 0.3s",
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = isActive ? "darkgreen" : "cyan"} // Change background color on hover
            onMouseLeave={(e) => e.target.style.backgroundColor = isActive ? "green" : isInactive ? "red" : "transparent"} // Reset background color on mouse leave
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}

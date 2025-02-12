"use client";

export const Button = () => {
  return (
    <button
      className="border bg-red-500 "
      onClick={() => alert(`Hello from yo app!`)}
    >
      button
    </button>
  );
};

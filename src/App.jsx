import { useState } from "react";
import React from "react";

function Greeting({ name }) {
  return <h2 className="text-xl font-semibold text-indigo-500">Hello, {name}! 👋</h2>;
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          Welcome to React + Tailwind
        </h1>

        <Greeting name="Nitish" />

        <p className="mt-4 text-gray-700 text-center">
          You clicked <span className="font-bold">{count}</span> times
        </p>

        <button
          onClick={() => setCount(count + 1)}
          className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 active:scale-95 transition"
        >
          Click Me
        </button>

        <hr className="my-6" />

        <p className="text-gray-600 text-center mb-2">This page teaches:</p>
        <ul className="text-gray-700 space-y-1 text-sm list-disc list-inside">
          <li>Components</li>
          <li>Props</li>
          <li>State (useState)</li>
          <li>Event Handling</li>
        </ul>
      </div>
    </div>
  );
}

export default App;

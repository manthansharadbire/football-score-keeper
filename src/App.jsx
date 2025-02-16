import React, { useState } from "react";

function App() {
  // State for the scores
  const [manchesterScore, setManchesterScore] = useState(0);
  const [barcelonaScore, setBarcelonaScore] = useState(0);

  // Functions to increase/decrease scores
  const incrementManchesterScore = () => setManchesterScore(manchesterScore + 1);
  const decrementManchesterScore = () =>
    setManchesterScore(manchesterScore > 0 ? manchesterScore - 1 : 0);

  const incrementBarcelonaScore = () => setBarcelonaScore(barcelonaScore + 1);
  const decrementBarcelonaScore = () =>
    setBarcelonaScore(barcelonaScore > 0 ? barcelonaScore - 1 : 0);

  return (
    <div className="bg-gray-800 text-white min-h-screen flex flex-col items-center justify-center">
      <div className="text-4xl font-bold mb-8">Football Score Keeper</div>

      <div className="flex items-center justify-center space-x-16">
        {/* Manchester United */}
        <div className="text-center">
          <div className="text-2xl font-bold text-red-600 mb-4">Manchester United</div>
          <div className="text-6xl font-bold mb-4">{manchesterScore}</div>
          <div className="flex space-x-4">
            <button
              className="px-4 py-2 bg-red-600 rounded-lg hover:bg-red-700 transition"
              onClick={incrementManchesterScore}
            >
              +
            </button>
            <button
              className="px-4 py-2 bg-red-600 rounded-lg hover:bg-red-700 transition"
              onClick={decrementManchesterScore}
            >
              -
            </button>
          </div>
        </div>

        {/* Barcelona */}
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-600 mb-4">Barcelona</div>
          <div className="text-6xl font-bold mb-4">{barcelonaScore}</div>
          <div className="flex space-x-4">
            <button
              className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
              onClick={incrementBarcelonaScore}
            >
              +
            </button>
            <button
              className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
              onClick={decrementBarcelonaScore}
            >
              -
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <button
          className="px-6 py-2 bg-yellow-500 text-black rounded-lg hover:bg-yellow-400 transition"
          onClick={() => {
            setManchesterScore(0);
            setBarcelonaScore(0);
          }}
        >
          Reset Scores
        </button>
      </div>
    </div>
  );
}

export default App;

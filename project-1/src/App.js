import React, { useState } from "react";
import Header from "./components/Header";
import Game from "./components/Game";
import Footer from "./components/Footer";

function App() {
  const [score, setScore] = useState(0);

  return (
    <>
      <div className="container bg-dark p-4  mt-5">
        <Header score={score} />
        <Game score={score} setScore={setScore} />
      </div>
      <Footer />
    </>
  );
}

export default App;

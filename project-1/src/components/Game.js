import React, { useEffect, useState } from "react";

const Game = ({ score, setScore }) => {
  const [playerSign, setPlayerSign] = useState("");
  const [playerWin, setPlayerWin] = useState("");
  const [pcSign, setPcSign] = useState("");
  const choices = ["rock", "paper", "scissors"];
  const newpcSignPick = () => {
    setPcSign(choices[Math.floor(Math.random() * 3)]);
  };
  useEffect(() => {
    newpcSignPick();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const Result = () => {
    if (playerSign === "rock" && pcSign === "scissors") {
      setPlayerWin("win");
      setScore(score + 1);
    } else if (playerSign === "rock" && pcSign === "paper") {
      setPlayerWin("lose");
      setScore(score - 1);
    } else if (playerSign === "scissors" && pcSign === "paper") {
      setPlayerWin("win");
      setScore(score + 1);
    } else if (playerSign === "scissors" && pcSign === "rock") {
      setPlayerWin("lose");
      setScore(score - 1);
    } else if (playerSign === "paper" && pcSign === "rock") {
      setPlayerWin("win");
      setScore(score + 1);
    } else if (playerSign === "paper" && pcSign === "scissors") {
      setPlayerWin("lose");
      setScore(score - 1);
    } else {
      setPlayerWin("draw");
    }
  };

  useEffect(() => {
    if (playerSign !== "") {
      setTimeout(function () {
        newpcSignPick();
        Result();
      }, 10);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playerSign, pcSign]);

  return (
    <div className="container text-white">
      <div className="d-flex flex-column justify-content-center align-items-center">
        <div className="p-4 text-center">
          <h1>You {playerWin}</h1>
        </div>
        {playerSign !== "" && pcSign !== "" && (
          <div className="row p-4">
            <div className="col-6 d-flex flex-column gap-4">
              <div className="circle">
                <img
                  src={require(`../images/icon-${playerSign}.svg`)}
                  alt={playerSign}
                />
              </div>

              <p className="">
                You Choose : <span className="text-warning">{playerSign}</span>
              </p>
            </div>
            <div className="col-6 d-flex flex-column gap-4">
              <div className=" circle ">
                <img
                  src={require(`../images/icon-${pcSign}.svg`)}
                  alt={pcSign}
                />
              </div>
              <p className="">
                {" "}
                Computer Choose : <span className="text-warning">{pcSign}</span>
              </p>
            </div>
          </div>
        )}

        <div className="d-flex gap-4 p-4">
          {choices.map((item) => (
            <button
              className="btn btn-primary "
              onClick={() => setPlayerSign(item)}
              key={item}
            >
              {item}
            </button>
          ))}
          <button
            className="btn btn-danger"
            onClick={() => {
              setScore(0);
              setPlayerWin("");
              setPlayerSign("");
              newpcSignPick();
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Game;

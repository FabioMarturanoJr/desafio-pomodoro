import React from "react";

function CompleteTask({closeCompleteTask}) {
  return (
    <div className="CompleteTask">
      <div className="title">
        <h1>Parabéns você concluiu sua Tarefa !!!</h1>
      </div>
      <button className="closeCompleteTask" onClick={closeCompleteTask}>OK</button>
    </div>
  );
}

export default CompleteTask;

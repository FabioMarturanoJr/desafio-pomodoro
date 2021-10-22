import React from "react";
import Howler from "./Howler";

function CompleteTask({closeCompleteTask}) {
  return (
    <div className="CompleteTask">
      <div className="title">
        <h1>Parabéns você concluiu sua Tarefa !!!</h1>
      </div>
      <button className="closeCompleteTask" onClick={closeCompleteTask}>OK</button>
      <Howler src={ 'zelda' } />
    </div>
  );
}

export default CompleteTask;

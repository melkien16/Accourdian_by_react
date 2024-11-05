//single selection
//multiple selection
import "./styles.css";
import React, { useState } from "react";
import data from "./data";
export default function Accourdian() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(id) {
    setSelected(selected === id ? null : id);
  }

  function handleMultiSelection(currentId) {
    let cpyMultiple = [...multiple];
    const findIndexOfCurrentId = cpyMultiple.indexOf(currentId);

    if (findIndexOfCurrentId === -1) {
      cpyMultiple.push(currentId);
    } else {
      cpyMultiple.splice(findIndexOfCurrentId, 1);
    }

    setMultiple(cpyMultiple);
  }

  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        Enable Multi Selection
      </button>
      <div className="accourdian">
        {data && data.length > 0
          ? data.map((item) => {
              return (
                <div key={item.id} className="item">
                  <div
                    className="title"
                    onClick={
                      enableMultiSelection
                        ? () => handleMultiSelection(item.id)
                        : () => handleSingleSelection(item.id)
                    }
                  >
                    <h3>{item.question} </h3>
                    <span>{selected === item.id ? "-" : "+"}</span>
                  </div>

                  {selected === item.id || multiple.indexOf(item.id) !== -1 ? (
                    <div className={"answer"}>
                      <p>{item.answer}</p>
                    </div>
                  ) : null}
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}

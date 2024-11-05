//single selection
//multiple selection
import "./styles.css";
import React, { useState } from "react";
import data from "./data";
export default function Accourdian() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="wrapper">
      <div className="accourdian">
        {data && data.length > 0
          ? data.map((item) => {
              return (
                <div key={item.id} className="item">
                  <div
                    className="title"
                    onClick={() =>
                      setSelected(selected === item.id ? null : item.id)
                    }
                  >
                    <h3>
                      {item.question}{" "}
                      <span>{selected === item.id ? "-" : "+"}</span>
                    </h3>
                  </div>
                  <div
                    className={`content ${selected === item.id ? "open" : ""}`}
                  >
                    <p>{item.answer}</p>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}

import React, { useContext, useState } from "react";
import "./Thinking.css";
import QuoteCage from "../components/Dangiri/QuoteCage";
import DataContext from "../contexto/context/DataContext";
import uuid from "uuid/v4";
const Thinking = ({ quote }) => {
  const [comentario, setComentario] = useState("");
  const context = useContext(DataContext);
  const HandleChange = e => {
    setComentario(e.target.value);
  };

  if (quote) {
    return (
      <>
        <QuoteCage
          image={quote.image}
          quote={quote.quote}
          char={quote.character}
        />

        <div className="coments">
          {context.state.comentarios.map(c => (
            <h1 key={uuid()}>{c}</h1>
          ))}
        </div>
        <div className="form-C ">
          <input type="text" onChange={HandleChange} value={comentario} />
          <button
            className="btn btn-success btn-block"
            onClick={() => context.SaveComments(comentario)}
          >
            Comentar
          </button>
        </div>
      </>
    );
  } else {
    return <h1>Carga una cita</h1>;
  }
};

export default Thinking;

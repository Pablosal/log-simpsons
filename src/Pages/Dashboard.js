import React, { useContext } from "react";
import uuid from "uuid/v4";

import "./Dashboard.css";
import { Link } from "react-router-dom";
import DataContext from "../contexto/context/DataContext";

const Dashboard = ({ getQuote }) => {
  const { state } = useContext(DataContext);
  console.log(state.quotesFavoritas);

  if (state.loading) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <>
        <div className="front-welcome">
          <div className="backshadow">
            {JSON.parse(localStorage.getItem("user")).nombre && (
              <h1>
                {" "}
                {"Bienvenido " +
                  JSON.parse(localStorage.getItem("user")).nombre +
                  " ¿En que has pensado?"}
              </h1>
            )}

            <div className="quotes_list">
              <h1>Frases Favoritas</h1>
              {state.quotesFavoritas &&
                state.quotesFavoritas.map(q => (
                  <Link
                    key={uuid()}
                    onClick={() => getQuote(q)}
                    to={`/quotes/${q.quote}`}
                  >
                    <h2>{q.quote}</h2>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Dashboard;

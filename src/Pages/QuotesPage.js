import React, { useContext } from "react";
import QuoteCage from "../components/Dangiri/QuoteCage";
import { Link } from "react-router-dom";
import uuid from "uuid";
import DataContext from "../contexto/context/DataContext";

const QuotesPage = () => {
  const { state, SaveFavorites } = useContext(DataContext);
  if (state.loading) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <>
        <div className="list">
          {state.quotes.map(q => (
            <button key={uuid()} onClick={() => SaveFavorites(q)}>
              <QuoteCage image={q.image} quote={q.quote} char={q.character} />
            </button>
          ))}
        </div>
      </>
    );
  }
};
export default QuotesPage;

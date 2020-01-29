import React, { useReducer, useEffect } from "react";
import DataContext from "../context/DataContext";
import Axios from "axios";
import DataReducer from "../reducers/DataReducers";
import {
  SAVE_QUOTES,
  SAVE_FAVORITE_QUOTE,
  SAVE_COMMENTS,
  SET_LOADING
} from "../types";

const DataState = props => {
  const initialState = {
    quotes: "",
    quotesFavoritas: [],
    comentarios: [],
    loading: true
  };
  const [state, dispatch] = useReducer(DataReducer, initialState);
  //OBTENER DATOS DE LA API
  useEffect(() => {
    GetInfo();
  }, []);

  const GetInfo = async () => {
    const info = await Axios.get(
      "https://thesimpsonsquoteapi.glitch.me/quotes?count=10"
    );

    dispatch({ type: SAVE_QUOTES, payload: info.data });
    dispatch({ type: SET_LOADING });
  };
  const SaveFavorites = quot => {
    if (state.quotesFavoritas.find(a => a.quote === quot.quote)) {
      return;
    }
    dispatch({ type: SAVE_FAVORITE_QUOTE, payload: quot });
  };
  const SaveComments = comment => {
    dispatch({ type: SAVE_COMMENTS, payload: comment });
  };

  return (
    <DataContext.Provider
      value={{
        state,
        GetInfo,
        SaveFavorites,
        SaveComments
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataState;

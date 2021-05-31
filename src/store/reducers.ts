import {ActionTypes, DELETE_GAME, ADD_GAME, } from "./actions";
import { Library } from "./types";

export const libraryReducer = (state: Library = {library: []} , action: ActionTypes) => {
  switch (action.type) {
    case DELETE_GAME:
      const filData = state.library.filter(game => game.id !== action.payload.id)
      return {library: filData };
    case ADD_GAME:
      return {
        library: [...state.library, action.payload]
      };
    default:
      return state;
  }
}

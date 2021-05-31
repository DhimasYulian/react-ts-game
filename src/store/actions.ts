import { Game } from "./types";

export const ADD_GAME = "ADD_GAME";
export const DELETE_GAME = "DELETE_GAME";

export type ActionTypes = { type: typeof ADD_GAME, payload: Game } | { type: typeof DELETE_GAME, payload: Game }

export const addGame = (game: Game): ActionTypes => ({ 
    type: ADD_GAME,
    payload: game,
});

export const deleteGame = (game: Game): ActionTypes => ({
  type: DELETE_GAME,
  payload: game,
});

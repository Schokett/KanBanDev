import type { Board } from "../types/board.type";

type BoardState = { type: "ADD"; data: Board } | { type: "DELETE"; data: { id: string } };

function boardReducer(state: Board[], action: BoardState): Board[] {
  switch (action.type) {
    case "ADD":
      return [...state, action.data];
    case "DELETE":
      return state.filter((b) => b.id !== action.data.id);
    default:
      return state;
  }
}
export default boardReducer;

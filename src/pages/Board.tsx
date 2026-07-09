import { useParams } from "react-router-dom";

function Board() {
  const { id } = useParams();
  return <div className="">Board {id}</div>;
}
export default Board;

import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className=" border ">Ich bin die navigation</div>
      <Outlet />
    </>
  );
}

export default App;

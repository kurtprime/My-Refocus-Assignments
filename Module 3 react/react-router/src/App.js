import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import "./App.css";

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/"></Route>)
);

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
}

export default App;

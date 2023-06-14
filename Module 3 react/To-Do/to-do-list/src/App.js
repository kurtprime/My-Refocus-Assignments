import SearchBar from "./searchBar.js";
import "./App.css";
import TodoList from "./TodoList.jsx";

function App() {
  return (
    <div className="container">
      <SearchBar />
      <br />
      <div className="TodoItems">
        <TodoList />
      </div>
    </div>
  );
}

export default App;

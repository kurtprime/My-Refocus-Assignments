import Button from "./button";
import "./TodoItem.css";

function TodoItem({ id, item, isComplete }) {
  return (
    <>
      <div className="Todos">
        <label id={id}>
          <input
            type="checkbox"
            className="checkbox"
            defaultChecked={isComplete}
          />
          <h2>{item}</h2>
        </label>
        <div className="Button-todos">
          <Button>Delete</Button>
        </div>
      </div>
    </>
  );
}

export default TodoItem;

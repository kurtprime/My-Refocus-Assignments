import TodoItem from "./TodoItem";

export default function TodoList() {
  const todoList = [
    {
      id: 1,
      item: "Brush my teeth",
      isComplete: true,
    },
    {
      id: 2,
      item: "Meditate and Exercise",
      isComplete: false,
    },
    {
      id: 3,
      item: "Make a To-Do List",
      isComplete: false,
    },
  ];
  return todoList.map((list) => (
    <>
      <TodoItem item={list.item} id={list.id} isComplete={list.isComplete} />
    </>
  ));
}

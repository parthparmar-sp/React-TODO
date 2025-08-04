import { useState } from 'react';

function Todo() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addNewTask = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  const updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>📝 My Todo App</h1>
      <div style={styles.inputSection}>
        <input
          type="text"
          placeholder="Add your task"
          value={newTodo}
          onChange={updateTodoValue}
          style={styles.input}
        />
        <button onClick={addNewTask} style={styles.button}>
          ➕ Add
        </button>
      </div>
      <hr style={styles.separator} />
      <h3 style={styles.taskHeading}>Your Tasks</h3>
      <ul style={styles.list}>
        {todos.map((todo, index) => (
          <li key={index} style={styles.listItem}>
            ✅ {todo}
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '500px',
    margin: '40px auto',
    padding: '20px',
    backgroundColor: '#f7f7f7',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    fontFamily: 'Arial, sans-serif'
  },
  heading: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '20px'
  },
  inputSection: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '10px'
  },
  input: {
    flex: 1,
    padding: '10px',
    fontSize: '16px',
    borderRadius: '8px',
    border: '1px solid #ccc'
  },
  button: {
    padding: '10px 16px',
    fontSize: '16px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer'
  },
  separator: {
    margin: '20px 0',
    border: 'none',
    height: '1px',
    backgroundColor: '#ddd'
  },
  taskHeading: {
    marginBottom: '10px',
    color: '#555'
  },
  list: {
    listStyle: 'none',
    padding: 0
  },
  listItem: {
    backgroundColor: '#fff',
    padding: '10px',
    borderRadius: '8px',
    marginBottom: '10px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
  }
};

export default Todo;

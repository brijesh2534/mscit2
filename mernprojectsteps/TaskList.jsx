function TaskList({ tasks, setEditingTask, deleteTask }) {
    return (
      <div className="task-list">
        {tasks.map((task) => (
          <div key={task._id} className="task-item">
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <button onClick={() => setEditingTask(task)}>Edit</button>
            <button onClick={() => deleteTask(task._id)}>Delete</button>
          </div>
        ))}
      </div>
    );
  }
  
  export default TaskList;
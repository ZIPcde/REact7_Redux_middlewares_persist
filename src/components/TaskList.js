import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from '../reducers/taskActions';

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  console.log(345, tasks);
  const [isDataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    dispatch(fetchTasks())
      .then(() => {
        setDataLoaded(true);
      });
  }, [dispatch]);

  if (!isDataLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Список задач</h2>
      <ul>
        {console.log("массив в элементах", tasks)}
        {tasks.map((task) => (
          <>
            <li key={task.id}>{task.id}</li>
            <li key={task.id}>{task.title}</li>
            <li key={task.id}>{task.completed ? "Выполнено, фух" : "Выполнено?!!: У меня лапки!!!"}</li>
            <li style={{ listStyleType: 'none' }}>.</li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
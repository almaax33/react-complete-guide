import React, { useEffect, useState } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import useHttp from "./hooks/use-http";

function App() {
  const [tasks, setTasks] = useState([]);
  const { isLoading, error, sendRequest: requestTasks } = useHttp();
  
  useEffect(() => {
    const processTasks = (tasks) => {
      const loadedTasks = [];
      for (const taskKey in tasks) {
        loadedTasks.push({ id: taskKey, text: tasks[taskKey].text });
      }
  
      setTasks(loadedTasks);
    }; 
    
    requestTasks({url:"https://react-http-9390f-default-rtdb.firebaseio.com/tasks.json"}, processTasks);
  }, [requestTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={requestTasks}
      />
    </React.Fragment>
  );
}

export default App;

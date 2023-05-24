import { useEffect, useState } from "react";
import styles from "./style.module.css";
import PlusButton from "../Plus button";
import AddOrEditTask from "../AddOrEditTask/index";
import DeleteButton from "../delete button";
import apiRequest from "../../function/index";
import DoneButton from "../done button";
import SortButton from "../sort button";

function List() {
  const [arr, setArr] = useState([]);
  const [count, setCount] = useState(0);
  const [displayPlusTask, setDisplayPlusTask] = useState(null);
  const [displayPutTask, setDisplayPutTask] = useState(null);

  // Function to delete a task
  const deleteTask = async (idTask) => {
    apiRequest(`/${idTask}`, "DELETE", null)
      .then((data) => {
        setCount((prevCount) => prevCount + 1);
      })
      .catch((err) => {
        console.log("err=", err);
      });
  };

  // Fetch the list of tasks on component mount and whenever count changes
  useEffect(() => {
    apiRequest("/", "GET", null)
      .then((data) => {
        setArr(data);
      })
      .catch((err) => {
        console.log("err=", err);
      });
  }, [count]);

  return (
    <>
      <h1>Welcome User</h1>
      <SortButton setArr={setArr} />
      {arr.length > 0 &&
        arr.map((item, index) => {
          return (
            <div key={index} className={styles.list}>
              <h1
                className={item.isDone ? `${styles.done}` : ""}
                onDoubleClick={() => setDisplayPutTask(item)}
              >
                Title: {item.title}
              </h1>
              <h2 className={item.isDone ? `${styles.done}` : ""}>
                Content: {item.content}
              </h2>
              <h2>Level of Urgency: {item.urgency}</h2>
              <DeleteButton onClick={() => deleteTask(item.id)} />
              <DoneButton
                count={count}
                setCount={setCount}
                data={item}
                method={"PUT"}
                url={`/${item.id}`}
              />
            </div>
          );
        })}
      {displayPutTask && (
        <AddOrEditTask
          count={count}
          setCount={setCount}
          data={displayPutTask}
          method={"PUT"}
          url={`/${displayPutTask.id}`}
          setDisplayPutTask={setDisplayPutTask}
        />
      )}
      {displayPlusTask && (
        <AddOrEditTask
          count={count}
          setCount={setCount}
          method={"POST"}
          url={`/`}
          setDisplayPutTask={setDisplayPlusTask}
        />
      )}
      <PlusButton setDisplayPlusTask={setDisplayPlusTask} />
    </>
  );
}

export default List;




import apiRequest from "../../function/index"
import styles from "./style.module.css";
function SortButton({setArr}) {
    
    const apiSort = async () => {
        apiRequest("/Sort", "GET", null)
          .then((data) => {
             setArr(data);
          })
          .catch((err) => {
            console.log("err=", err);
          });
      };
    return (
        <div>
            <button className={styles.button} onClick={apiSort}>Sort by level of urgency</button>
        </div>
    )
}
export default SortButton;
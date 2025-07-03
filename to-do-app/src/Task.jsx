import { useState } from "react";



function Task({ darkMode, deleteMode }){

    const [empty, setEmpty] = useState(true);



    const taskStyle = {
      backgroundColor: darkMode ? "#303030" : "#4B9CFF",
      padding: "15px",
      margin: "5px",
      display: "flex",
      borderRadius: "20px",
    }

    const emptyTextStyle = {
      margin: "0",
      padding: "5px",
      fontSize: "25px",
      cursor: deleteMode ? "alias" : "pointer",
      color: "white",
    }

    const TextStyle = {
      fontFamily: "Arial, Helvetica, sans-serif",
      fontWeight: "bold",
      margin: "0",
      padding: "5px",
      fontSize: "25px",
      backgroundColor: darkMode ? "#303030" : "#4B9CFF",
      border: "none",
      color: "white",
      cursor: deleteMode ? "alias" : "pointer",
      width: "100%",
      backgroundColor: "transparent",
    }

    const checkboxStyle = {
      width: "30px",
    }

    return(
      <div style={taskStyle}>
        {empty ? <h4 style={emptyTextStyle} onClick={() => setEmpty(!empty)}>Add new task</h4> : <input style={TextStyle} placeholder="Type your task here.."></input>}
        {empty ? <></> : <input style={checkboxStyle} type="checkbox"></input>}
        
      </div>
    );
}


// {empty ? "Add New Task" : "Task"}
export default Task
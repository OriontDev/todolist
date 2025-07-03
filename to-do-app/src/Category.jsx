import { useEffect, useRef } from "react";
import Task from "./Task.jsx";

function Category({ onClick, darkMode, deleteMode, index, arrayLength, moveRight, moveLeft }){

    // handle add pop in
    const categoryRef = useRef(null);
    useEffect(() => {
        if (categoryRef.current) {
            categoryRef.current.classList.add("category-pop");

            const timer = setTimeout(() => {
                categoryRef.current.classList.remove("category-pop");
            }, 300);
            return () => clearTimeout(timer);
        }
    }, []);


    const categoryStyle = {
        backgroundColor: darkMode ? "#141414" : "white",
        width: "500px",
        flexShrink: "0",
        marginLeft: "20px",
        minHeight: "400px",
        marginBottom: "10px",
        border: deleteMode ? "solid 5px red" : darkMode ? "solid 5px black" : "solid 5px skyblue",
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        padding: "0px",
        cursor: deleteMode ? "alias" : "auto",
    }

    const titleStyle = {
        cursor: deleteMode ? "alias" : "text",
        width: "96.5%",
        height: "50%",
        fontSize: "40px",
        fontWeight: "bold",
        outline: "none", //remove the input border
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        border: "none",
        margin: "5px",
        marginTop: "10px",
        marginBottom: "10px",
        padding: "8px",
        backgroundColor: darkMode ? "#141414" : "white",
        color: darkMode ? "white" : "#000000"
    }

    const titleDivStyle = {
        display: "flex",
        alignItems: "center",
    }

    const titleButtonStyle = {
        padding: 0,
        paddingLeft: "3px",
        paddingRight: "3px",
        height: "40px",
        fontSize: "1.5rem",
        backgroundColor: darkMode ? "#303030" : "skyblue",
        margin: "2px",
        borderRadius: "10px",
        border: "none",
        cursor: "pointer",
    }

    return(
        <div style={categoryStyle} onClick={onClick} ref={categoryRef}>
            <div style={titleDivStyle}>
                
                {index === 0 ? <></> : <button style={titleButtonStyle} onClick={moveLeft}>⬅️</button>}
                <input type="text" style={titleStyle} placeholder="Title.."></input>
                {index === (arrayLength - 1) ? <></> : <button style={titleButtonStyle} onClick={moveRight}>➡️</button>}
            </div>
            <Task darkMode={darkMode} deleteMode={deleteMode}/>
            <Task darkMode={darkMode} deleteMode={deleteMode}/>
            <Task darkMode={darkMode} deleteMode={deleteMode}/>
            <Task darkMode={darkMode} deleteMode={deleteMode}/>
        </div>
    );
}


export default Category
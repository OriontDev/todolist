function Header({ darkMode, deleteMode }){

    const wrapperStyle = darkMode
        ? {
              padding: "2px", // border thickness
              borderRadius: "12px",
              background: "linear-gradient(to right,rgb(184, 228, 249), #0575e6)", // gradient border
          }
        : {};

    const headerStyle = {
        backgroundColor: darkMode ? "#1a1a1a" : "#4B9CFF",
        margin: "0",
        color: "white",
        padding: "20px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        borderRadius: darkMode ? "12px" : "0px",
    };

    const titleStyle = {
        fontSize: "40px",
        margin: "0",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    }

    const deleteStyle = {
        position: "absolute",
        backgroundColor: "#ff4f42",
        padding: "5px",
        borderRadius: "10px",
        right: "10px",
        fontSize: "40px",
        margin: "0",
        marginLeft: "30px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    }

    return(
        <div style={wrapperStyle}>
            <div style={headerStyle}>
                <h1 style={titleStyle}>📋To-Do List📋</h1>
                {deleteMode ? <h1 style={deleteStyle}>DELETE MODE</h1> : <></>}
            </div>
        </div>

    );
}

export default Header
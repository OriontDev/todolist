function Footer({ darkMode }){

    const footerStyle = {
        bottom: "0px",
        margin: "0",
        color: "white",
        position: "absolute",
        backgroundColor: darkMode ? "#1a1a1a" : "#4B9CFF",
        width: "100%",
        height: "15%",
    }

    const textStyle = {
        marginLeft: "10px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    }

    return(
        <div style={footerStyle}>
            <h1 style={textStyle}>OriontDev</h1>
        </div>
    );
}

export default Footer
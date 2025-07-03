import { useState } from "react";
import Header from "./Header.jsx";
import Category from "./Category.jsx";
import Footer from "./Footer.jsx";

function App() {

    const [darkMode, setDarkMode] = useState(true);
    const [categories, setCategories] = useState([
      { id: 1 }
    ]);
    const [deleteMode, setDeleteMode] = useState(false);

    function deleteCategory(id){
      if(deleteMode === true){
        setCategories(categories.filter(c => c.id !== id));
      }
    }

    function addCategory(){
      const newCategory = {id: Date.now()};
      setCategories([...categories, newCategory]);
    }

    function moveRight(index){
      const updatedCategories = [...categories];
      [updatedCategories[index], updatedCategories[index + 1]] = [updatedCategories[index + 1], updatedCategories[index]];
      console.log("works");
      setCategories([...updatedCategories]);
    }

    function moveLeft(index){
      const updatedCategories = [...categories];
      [updatedCategories[index], updatedCategories[index - 1]] = [updatedCategories[index - 1], updatedCategories[index]];
      console.log("works");
      setCategories([...updatedCategories]);
    }
    
    const noTaskStyle = {
      justifySelf: "center",
      color: darkMode ? "white" : "black",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    }

    return(
      <>
        <div className={darkMode ? "dark-mode" : "light-mode"}>
          <Header deleteMode={deleteMode} darkMode={darkMode}/>
          <br></br>
          {categories.length > 0 ? <></> : <h1 style={noTaskStyle}>There is no task yet..</h1>}
          <div className="category-container">
              {categories.map((category, index) => <Category 
                                              key={category.id} 
                                              id={category.id} 
                                              onClick={() => deleteCategory(category.id)} 
                                              deleteMode={deleteMode}
                                              darkMode={darkMode}
                                              index={index}
                                              arrayLength={categories.length}
                                              moveRight={() => moveRight(index)}
                                              moveLeft={() => moveLeft(index)}
                                          />)}
              <div style={{ minWidth: "600px", flexShrink: 0 }} />
          </div>
          {/* {tasks.map((task, index) => 
              <List input={task}/>
          )} */}
          <Footer darkMode={darkMode}/>
          <button className="category-add" onClick={addCategory}>+</button>
          <button className="category-remove" onClick={() => setDeleteMode(!deleteMode)}>🗑️</button>
          <button className="theme-btn" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "⚪" : "⚫"}
          </button>
        </div>

      </>
    );
}

export default App

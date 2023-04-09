import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState(0);

  useEffect(() => {
    const autosaved = localStorage.getItem('autosaved');
    if (autosaved) {
      const textarea = document.getElementById("text");
      textarea.value = autosaved;
      setText(textarea.value.length);
    }
  }, [])

  function handleTextareaChange() {
    const textarea = document.getElementById("text");
    setText(textarea.value.length);
    localStorage.setItem("autosaved", textarea.value);
  }

  return (
    <div className="App">
      <textarea
        className="border rounded-md p-5 m-5 w-[90vw] h-[80vh]"
        id="text"
        cols="120"
        rows="40"
        
        onChange={handleTextareaChange}
      ></textarea>
      <h1>{text}</h1>
    </div>
  );
}

export default App;

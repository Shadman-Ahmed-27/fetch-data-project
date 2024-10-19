import { useState, useEffect } from "react";
import Form from "./Form";

function App() {
  const API_URL = "https://jsonplaceholder.typicode.com/";
  const [reqType, setReqtype] = useState("users");
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_URL}${reqType}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setItems(data);
      } catch (error) {
        setError(error.message);
      }
    };
  }, [reqType]);

  return (
    <div className="App">
      <Form reqType={reqType} setReqtype={setReqtype} />
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Define a function to fetch data from your API
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/v1/airlines');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(error.message);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();

    // Cleanup function to cancel any pending requests if the component unmounts
    return () => {
      // Any cleanup code here, e.g., cancelling pending requests
    };
  }, []); // Empty dependency array to run the effect only once on mount

  console.log(data)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

"use client";

import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [cache, setCache] = useState({});

  const fetchData = async () => {
    console.log("api call with ", input)
    if (cache[input]) {
      setResults(cache[input])
      return;
    }
    try {
      const res = await fetch(`https://dummyjson.com/recipes/search?q=${encodeURIComponent(input)}`)
      if (!res.ok) {
        const errBody = await res.json().catch(() => null);
        setError(errBody?.message || `HTTP ${res.status} ${res.statusText}`);
        throw new Error(errBody?.message || `HTTP ${res.status} ${res.statusText}`);
      }
      const json = await res.json();
      setResults(json.recipes ?? []);
      setCache(prev => ({
        ...prev,
        [input]: json.results
      }))

    } catch (error) {
      console.log("error is:", error.message);
      setError(error.message);
      // set error state here, e.g. setError(err.message)
      return null;
    }

  }

  useEffect(() => {
    const timer = setTimeout(fetchData, 300)

    return () => {
      clearTimeout(timer);
    }
  }, [input]);

  return (
    <div className="App">
      <h1>Autocomplete search bar</h1>
      <div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <input
          value={input}
          type={'text'}
          onBlur={() => setShowResults(false)}
          onFocus={() => setShowResults(true)}
          className="search-input"
          onChange={(e) => {
            setInput(e.target.value)
          }}></input>
        {showResults && results.length > 0 && <div className="result-container">
          {results.map((r) => (
            <span
              onClick={() => { setInput(r.name) }}
              className="result"
              key={r.id}>{r.name}
            </span>))}
        </div>}
      </div>
    </div >
  );
}

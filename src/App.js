import { useEffect, useState } from "react";
import "./App.css";
import Home from "./component/home/Home";
import Spinner from "./component/spinner/Spinner";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <Home />
        </div>
      )}
    </div>
  );
}

export default App;

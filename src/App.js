import { useEffect, useState } from "react";
import "./App.css";
import Home from "./component/home/Home";
import Spinner from "./component/spinner/Spinner";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fakeLogin = async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setLoading(false);
    };

    fakeLogin();
  }, []);

  return (
    <div className="App">
      {loading ? <Spinner /> : null}
      <Home />
    </div>
  );
}

export default App;

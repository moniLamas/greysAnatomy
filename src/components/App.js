import { useState } from "react";
import "../styles/App.scss";
import { useState, useEffect } from "react";
import api from "../services/callToApi";
import ls from "../services/ls";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (ls.get("characters", []).length > 0) {
      setData(ls.get("characters", []));
    } else {
      api().then((initialData) => {
        setData(initialData);
        ls.set("characters", initialData);
      });
    }
  }, []);
}

export default App;

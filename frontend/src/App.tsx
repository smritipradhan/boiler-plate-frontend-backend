import { useEffect } from "react";
import styles from "./App.module.scss";
import { getData, postData } from "./utils/apiUtils";
import { Button } from "@mui/material";

const App = () => {
  useEffect(() => {
    console.log("Start");
    const d = getData("");
    console.log({ d });
  }, []);

  const postCallHandler = () => {
    console.log("Post Call will be made");
    postData("");
  };

  return (
    <div className={styles.app}>
      Hello this is for testing
      <Button onClick={postCallHandler}>Click for post</Button>
    </div>
  );
};

export default App;

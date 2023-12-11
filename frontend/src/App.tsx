import { Button } from "@mui/material";
import { useEffect } from "react";
import styles from "./App.module.scss";
import { deleteData, getData, postData, putData } from "./utils/apiUtils";
import { ErrorBoundary } from "react-error-boundary";

const App = () => {
  useEffect(() => {
    console.log("Start");
    const d = getData("");
    console.log({ d });
  }, []);

  const postCallHandler = async () => {
    try {
      const data = await postData("", {
        name: "Dummy Call for POST !!",
        rating: 6.7,
        price: 500,
      });
      console.log({ data });
    } catch (err) {
      console.log(err);
    }
  };

  const getCallHandler = async () => {
    try {
      const data = await getData("/6572f641bd65c8971a1a24d4");
      console.log({ data });
    } catch (err) {
      console.log(err);
    }
  };

  const putCallHandler = async () => {
    try {
      const data = await putData("/6572f641bd65c8971a1a24d4", {
        rating: 10,
        price: 2000,
      });
      console.log({ data });
    } catch (err) {
      console.log(err);
    }
  };

  const deleteCallHandler = async () => {
    try {
      const data = await deleteData("/6576f31c64b1819bb861b605");
      console.log({ data });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <div className={styles.app}>
        Hello this is for testing <br />
        <Button onClick={postCallHandler}>POST</Button>
        <br />
        <Button onClick={getCallHandler}>GetBy ID</Button> <br />
        <Button onClick={putCallHandler}>Put Call</Button> <br />
        <Button onClick={deleteCallHandler}> Delete</Button>
      </div>
    </ErrorBoundary>
  );
};

export default App;
